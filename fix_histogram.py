#!/usr/bin/env python3
"""
Fix histogram mathTool structures in statistics YAML file.
Converts from wrong format to correct format.
"""

import re
import json

def fix_histogram_yaml(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    i = 0
    output_lines = []
    fixed_count = 0

    while i < len(lines):
        line = lines[i]
        output_lines.append(line)

        # Check if this is a histogram toolName line
        if 'toolName: histogram' in line:
            # Get the indentation level
            indent = len(line) - len(line.lstrip())
            param_indent = ' ' * (indent + 2)
            interval_indent = ' ' * (indent + 4)

            # Skip to parameters line
            i += 1
            output_lines.append(lines[i])  # parameters:
            i += 1

            # Now we need to collect intervals and frequencies/dataPoints
            intervals_list = None
            frequencies_list = None
            other_params = []

            # Read all parameters
            while i < len(lines):
                current_line = lines[i]
                current_indent = len(current_line) - len(current_line.lstrip())

                # Stop if we've outdented (end of parameters)
                if current_indent <= indent + 2 and current_line.strip() and not current_line.strip().startswith('-'):
                    break

                # Check for intervals (as array)
                if 'intervals:' in current_line and '[' not in current_line:
                    # Intervals as YAML list
                    intervals_list = []
                    i += 1
                    while i < len(lines):
                        if lines[i].strip().startswith('-') and lines[i][current_indent:current_indent+4].strip():
                            val = lines[i].strip().lstrip('-').strip()
                            try:
                                intervals_list.append(float(val) if '.' in val else int(val))
                            except:
                                pass
                            i += 1
                        else:
                            break
                    continue
                elif 'intervals:' in current_line and '[' in current_line:
                    # Intervals as JSON string
                    match = re.search(r"intervals:\s*'?\[([0-9,\s]+)\]'?", current_line)
                    if match:
                        intervals_str = match.group(1)
                        intervals_list = [int(x.strip()) for x in intervals_str.split(',')]
                    i += 1
                    continue

                # Check for frequencies
                elif 'frequencies:' in current_line:
                    frequencies_list = []
                    i += 1
                    while i < len(lines):
                        if lines[i].strip().startswith('-'):
                            val = lines[i].strip().lstrip('-').strip()
                            try:
                                frequencies_list.append(float(val) if '.' in val else int(val))
                            except:
                                pass
                            i += 1
                        else:
                            break
                    continue

                # Check for dataPoints (another name for frequencies)
                elif 'dataPoints:' in current_line:
                    frequencies_list = []
                    i += 1
                    while i < len(lines):
                        if lines[i].strip().startswith('-'):
                            val = lines[i].strip().lstrip('-').strip()
                            try:
                                frequencies_list.append(float(val) if '.' in val else int(val))
                            except:
                                pass
                            i += 1
                        else:
                            break
                    continue

                # Keep other parameters
                else:
                    other_params.append(current_line)
                    i += 1

            # Now reconstruct with correct format
            if intervals_list and frequencies_list:
                # Convert to correct format
                output_lines.append(f"{interval_indent}intervals:\n")
                for idx in range(len(frequencies_list)):
                    start = intervals_list[idx]
                    end = intervals_list[idx + 1]
                    freq = frequencies_list[idx]
                    output_lines.append(f"{interval_indent}- start: {start}\n")
                    output_lines.append(f"{interval_indent}  end: {end}\n")
                    output_lines.append(f"{interval_indent}  frequency: {freq}\n")

                # Add other parameters
                for param_line in other_params:
                    output_lines.append(param_line)

                fixed_count += 1
                print(f"✓ Fixed histogram #{fixed_count}")
            else:
                # Keep original if we couldn't parse
                for param_line in other_params:
                    output_lines.append(param_line)
        else:
            i += 1

    # Write back
    with open(file_path, 'w') as f:
        f.writelines(output_lines)

    print(f"\n✓ Total histograms fixed: {fixed_count}")
    return fixed_count

if __name__ == '__main__':
    file_path = "/Users/farhat/Documents/AI Systems/AITutor/aicampus/curriculum-content/S3/Maths/s3-math-statistics.yaml"
    fix_histogram_yaml(file_path)
