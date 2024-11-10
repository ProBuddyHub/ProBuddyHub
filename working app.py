from flask import Flask, render_template, request, redirect, url_for, jsonify
#from demo_ai import get_ai_response  # Import the function from demo_ai.py
#from chatbot.chatbot import get_response  # Import your chatbot function
from buddy.chatbot import TrialBuddy  # Import the TrialBuddy class

app = Flask(__name__, static_url_path='/static')


# Create an instance of the TrialBuddy class
trial_buddy = TrialBuddy()

# Home Page Route
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/demo-ai')
def demo_ai():
    return render_template('demo-ai.html')


@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    user_query = data.get('query')

    if user_query:
        # Get AI's response using the chatbot method
        response = chatbot.chat(user_query)
    else:
        response = "I'm sorry, I didn't understand your query."

    return jsonify({"answer": response})


@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('user_input')
    response = trial_buddy.get_response(user_input)
    return jsonify({"response": response})

 '''   
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('user_input')  # Get input from the frontend
    response = buddy.get_response(user_input)  # Get the chatbot's response
    return jsonify({"response": response})  # Return the response to the frontend
'''


'''

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('user_input')  # Get input from the frontend
    response = chatbot.chat(user_input)  # Get the chatbot response
    return jsonify({"response": response})  # Return the response to the frontend
'''

# Other routes
@app.route('/about')
def about():
    return render_template('about-us.html')

@app.route('/ai-solutions')
def ai_solutions():
    return render_template('ai-solutions.html')

@app.route('/use-cases')
def use_cases():
    return render_template('use-cases.html')

@app.route('/learning-center')
def learning_center():
    return render_template('learning-center.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')




@app.route('/community-hub')
def community_hub():
    return render_template('community-hub.html')

@app.route('/forum')
def forum():
    # Placeholder: replace with actual forum page
    return "<h1>Forum Page - Coming Soon</h1>"

@app.route('/projects')
def projects():
    # Placeholder: replace with actual projects page
    return "<h1>Projects Page - Coming Soon</h1>"

@app.route('/events')
def events():
    # Placeholder: replace with actual events page
    return "<h1>Events Page - Coming Soon</h1>"

@app.route('/mentorship')
def mentorship():
    # Placeholder: replace with actual mentorship page
    return "<h1>Mentorship Page - Coming Soon</h1>"





@app.route('/support')
def support():
    return render_template('support.html')

@app.route('/sign-in', methods=['GET', 'POST'])
def sign_in():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        # Placeholder for authentication logic
        return redirect(url_for('home'))
    return render_template('sign-in.html')

@app.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    if request.method == 'POST':
        email = request.form['email']
        # Placeholder for password reset logic
        return redirect(url_for('sign_in'))
    return render_template('forgot-password.html')

@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        # Placeholder for user registration logic
        return redirect(url_for('sign_in'))
    return render_template('sign-up.html')

if __name__ == '__main__':
    app.run(debug=True)

