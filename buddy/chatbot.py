import json
from buddy.tokenizer import tokenize
from buddy.intent_detector import detect_intent
from buddy.response_generator import generate_response
import os

# Load intents from the training_data.json file
data_path = os.path.join(os.path.dirname(__file__), 'data', 'training_data.json')
with open(data_path, 'r') as f:
    intents = json.load(f)

class TrialBuddy:
    def __init__(self):
        self.intents = intents

    def get_response(self, user_input):
        # Tokenize the user input
        tokens = tokenize(user_input)

        # Detect intent based on tokens
        intent = detect_intent(tokens)

        if intent:
            # Find the corresponding intent in the intents data
            for intent_data in self.intents['intents']:
                if intent == intent_data['intent']:
                    return generate_response(intent_data['responses'])

        return "Sorry, I didn't understand that."  # Default response if no intent is detected
