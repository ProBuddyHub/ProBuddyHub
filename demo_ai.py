from transformers import AutoModelForCausalLM, AutoTokenizer

# Load the model and tokenizer from Hugging Face's model hub
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

def get_ai_response(user_query):
    # Encode the user's query and add the necessary input formatting for the model
    new_user_input_ids = tokenizer.encode(user_query + tokenizer.eos_token, return_tensors='pt')

    # Generate a response from the model
    bot_output_ids = model.generate(new_user_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

    # Decode the generated response and return it
    response = tokenizer.decode(bot_output_ids[:, new_user_input_ids.shape[-1]:][0], skip_special_tokens=True)
    return response
