from flask import Flask, request, jsonify
from flask_cors import CORS
import anthropic
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
api_key = os.getenv('ANTHROPIC_API_KEY')

client = anthropic.Anthropic(
  api_key=api_key
)

@app.route('/chat', methods=['POST'])
def chat():
  try:
    data = request.get_json()
    conversation: str = data.get('message', '')

    if not conversation:
      return jsonify({'error': 'No message provided'}), 400
    
    message = client.messages.create(
      model='claude-haiku-4-5-20251001',
      max_tokens=1024,
      messages=conversation
    )

    response_text = message.content[0].text

    return jsonify({
      'response': response_text,
    })
  
  except anthropic.APIError as e:
    return jsonify({'error': f'API Error: {str(e)}'}), 500
  except Exception as e:
    return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
  return 'Love'

@app.route('/love/<name>')
def love(name):
  return f'I love you... {name}'

if __name__ == '__main__':
  app.run(port=5000, debug=True)