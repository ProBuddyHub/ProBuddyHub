import json
import os

# Load intents from training_data.json
data_path = os.path.join(os.path.dirname(__file__), 'data', 'training_data.json')
with open(data_path, 'r') as f:
    training_data = json.load(f)

def detect_intent(tokens):
    # Check each intent's patterns to see if any match the tokens
    for intent_data in training_data['intents']:
        for pattern in intent_data['patterns']:
            pattern_tokens = set(pattern.lower().split())
            if pattern_tokens.intersection(tokens):  # Look for any common tokens
                return intent_data['intent']
    return None
