#!/usr/bin/env python3
"""
Fix histogram structures in YAML file - convert from wrong format to correct format.
"""

import re

def process_yaml_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Pattern 1: intervals as list + frequencies as list
    # This pattern matches:
    #   intervals:
    #   - 100
    #   - 120
    #   frequencies:
    #   - 5
    #   - 12

    def fix_histogram_block(match):
        full_block = match.group(0)
        indent = match.group(1)

        # Extract intervals
        intervals_section = re.search(r'intervals:\n((?:\s+-\s+\d+\n)+)', full_block)
        # Extract frequencies
        frequencies_section = re.search(r'frequencies:\n((?:\s+-\s+\d+\.?\d*\n)+)', full_block)

        if not intervals_section or not frequencies_section:
            return full_block  # Can't parse, return original

        # Parse intervals
        intervals = [int(x.strip()) for x in re.findall(r'-\s+(\d+)', intervals_section.group(1))]

        # Parse frequencies
        freqs = [float(x.strip()) if '.' in x else int(x.strip())
                for x in re.findall(r'-\s+(\d+\.?\d*)', frequencies_section.group(1))]

        if len(intervals) != len(freqs) + 1:
            return full_block  # Invalid data, return original

        # Build correct structure
        result = f"{indent}intervals:\n"
        for i in range(len(freqs)):
            result += f"{indent}- start: {intervals[i]}\n"
            result += f"{indent}  end: {intervals[i+1]}\n"
            result += f"{indent}  frequency: {freqs[i]}\n"

        # Preserve other parameters
        other_params = re.findall(r'\n\s+(xLabel|yLabel|title|showFrequencies|showMidpoints|caption):.*', full_block)
        for param in other_params:
            result += f"\n{indent}{param}"

        return result

    # Pattern: toolName: histogram followed by parameters with intervals and frequencies as lists
    pattern = r'(          )intervals:\n(?:\s+-\s+\d+\n)+(          )frequencies:\n(?:\s+-\s+\d+\.?\d*\n)+'

    content = re.sub(pattern, fix_histogram_block, content, flags=re.MULTILINE)

    # Pattern 2: intervals as JSON string '[0, 10, 20]' + dataPoints
    def fix_json_intervals(match):
        indent = ' ' * 10
        intervals_str = match.group(1)
        datapoints_str = match.group(2)

        # Parse intervals
        intervals = [int(x.strip()) for x in intervals_str.split(',')]

        # Parse datapoints
        datapoints = [float(x.strip()) if '.' in x else int(x.strip())
                     for x in datapoints_str.split('\n-') if x.strip()]
        datapoints = [int(re.sub(r'[^\d.]', '', str(d))) for d in datapoints if d]

        # Get first datapoint line to extract values properly
        dp_matches = re.findall(r'-\s+(\d+\.?\d*)', match.group(2))
        datapoints = [float(x) if '.' in x else int(x) for x in dp_matches]

        if len(intervals) != len(datapoints) + 1:
            return match.group(0)  # Can't fix

        # Build correct structure
        result = f"{indent}intervals:\n"
        for i in range(len(datapoints)):
            result += f"{indent}- start: {intervals[i]}\n"
            result += f"{indent}  end: {intervals[i+1]}\n"
            result += f"{indent}  frequency: {datapoints[i]}\n"

        return result

    # Match pattern like: intervals: '[0, 10, 20, 30]'\n...dataPoints:\n- 15\n- 25
    pattern2 = r"intervals: '?\[([0-9,\s]+)\]'?\n.*?\n.*?dataPoints:\n((?:\s+-\s+\d+\.?\d*\n)+)"
    content = re.sub(pattern2, fix_json_intervals, content, flags=re.DOTALL)

    with open(file_path, 'w') as f:
        f.write(content)

    print("✓ Histogram structures fixed")

if __name__ == '__main__':
    file_path = "/Users/farhat/Documents/AI Systems/AITutor/aicampus/curriculum-content/S3/Maths/s3-math-statistics.yaml"
    process_yaml_file(file_path)
