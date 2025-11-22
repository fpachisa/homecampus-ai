import json
import os

def filter_exam_questions(source_file, drawing_file, diagram_file):
    """
    Filters questions from source_file:
    1. Moves questions with answerType="drawing" to drawing_file.
    2. Moves questions with hasDiagram=true to diagram_file.
    """
    try:
        with open(source_file, 'r') as f:
            source_data = json.load(f)
        
        with open(drawing_file, 'r') as f:
            drawing_data = json.load(f)

        with open(diagram_file, 'r') as f:
            diagram_data = json.load(f)

    except FileNotFoundError as e:
        print(f"Error: File not found - {e}")
        return
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON - {e}")
        return

    questions_to_keep = []
    drawing_questions_to_move = []
    diagram_questions_to_move = []

    for question in source_data.get('questions', []):
        is_drawing = False
        if 'parts' in question:
            for part in question['parts']:
                if part.get('answerType') == 'drawing':
                    is_drawing = True
                    break
        
        if is_drawing:
            drawing_questions_to_move.append(question)
            continue # Skip further checks if it's a drawing question

        if question.get('hasDiagram') is True:
            diagram_questions_to_move.append(question)
            continue # Skip further checks if it's a diagram question
        
        questions_to_keep.append(question)

    # Update source data
    source_data['questions'] = questions_to_keep

    # Update drawing data
    if 'questions' not in drawing_data:
        drawing_data['questions'] = []
    drawing_data['questions'].extend(drawing_questions_to_move)
    drawing_data['totalFilteredQuestions'] = len(drawing_data['questions'])

    # Update diagram data
    if 'questions' not in diagram_data:
        diagram_data['questions'] = []
    diagram_data['questions'].extend(diagram_questions_to_move)
    diagram_data['totalDiagramQuestions'] = len(diagram_data['questions'])

    # Write back to files
    try:
        with open(source_file, 'w') as f:
            json.dump(source_data, f, indent=4)
        
        with open(drawing_file, 'w') as f:
            json.dump(drawing_data, f, indent=4)

        with open(diagram_file, 'w') as f:
            json.dump(diagram_data, f, indent=4)
            
        print(f"Moved {len(drawing_questions_to_move)} drawing questions to {drawing_file}")
        print(f"Moved {len(diagram_questions_to_move)} diagram questions to {diagram_file}")
        print(f"Remaining {len(questions_to_keep)} questions in {source_file}")

    except Exception as e:
        print(f"Error writing files: {e}")

if __name__ == "__main__":
    base_path = "/Users/farhat/Documents/AI Systems/AITutor/aicampus/learning-platform/public/curriculum-content/o-level/exam-papers/raw/"
    source_path = os.path.join(base_path, "zhonghua-2024-paper-1-2.json")
    drawing_path = os.path.join(base_path, "1. questions_require_drawing.json")
    diagram_path = os.path.join(base_path, "2. questions-with-diagrams.json")
    
    filter_exam_questions(source_path, drawing_path, diagram_path)
