import re

def tokenize(text):
    # Split text into words based on non-word characters
    return re.findall(r'\b\w+\b', text.lower())
