# Claude Clone
*Inspired by [Claude](https://claude.ai/new)*

Recreation of the Anthropic's Claude AI chat interface. Build with TypeScript and Flask

## 🎯 Overview

This project is a **full-stack clone of the Claude AI chat interface**. Created to practice and learn modern web development and providing a functional chat application.
(Also because it's interesting and fun :) ) 

## Features

### Core Functionality

- **🤖 AI-Powered Chat**: Conversations with Claude (Haiku 4.5)
- **💬 Chat Management**: Create, rename, delete, and organize conversations
- **⭐ Favorites System**: Star important conversations
- **💾 Persistent Storage**: All chats automatically saved to browser storage
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

### User Interface

- **Collapsible Sidebar**: Quick access to chat history
- **Dropdown Menus**: Context actions for each conversation
- **Modal Dialogs**: Rename interface with keyboard support
- **URL Navigation**: Each chat has a unique shareable URL
- **Markdown Rendering**: Rich text display in messages

## 🛠️ Tech Stack

### Frontend


- [TypeScript](https://www.typescriptlang.org/)
- [Marked.js](https://marked.js.org/)
- HTML5/CSS3
- localStorage

### Backend


- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Flask-CORS](https://flask-cors.readthedocs.io/)
- [Anthropic SDK](https://docs.anthropic.com/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
```bash
  node --version  # Should be v18+
```
- **npm** (v9.0.0 or higher)
```bash
  npm --version  # Should be v9+
```
- **Python** (3.9 or higher)
```bash
  python --version  # Should be 3.9+
```
- **Anthropic API Key**

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/claude-clone.git
   cd claude-clone
```

2. **Install frontend dependencies**
```bash
   npm install
```

3. **Set up Python backend**
```bash
   cd backend
   
   # Create virtual environment
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
```

### Configuration

1. **Create environment file**
```bash
   cd backend
   cp .env.example .env
```

2. **Add your Anthropic API key**
   
   Open `backend/.env` and add:
```env
   ANTHROPIC_API_KEY=your_actual_api_key_here
```

3. **Verify TypeScript configuration**
   
   Check `tsconfig.json` for compiler options:
```json
   {
     "compilerOptions": {
       "target": "es2023",
       "module": "es2022",
       "strict": true,
       "outDir": "./dist"
     }
   }
```

### Running the Application

**Run Backend and Frontend Separately**

Terminal 1 - Backend:
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
python server.py
```
Server runs at `http://127.0.0.1:5000`

Terminal 2 - Frontend Compilation (watch mode):
```bash
npm run build -- --watch
```

Then open `new.html` in your browser.

## 🤝 Contributing

Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
```bash
   git checkout -b feature/sugoooy-feature
```
3. **Make your changes**
4. **Commit your changes**
```bash
   git commit -m 'Add some ohayoo feature'
```
5. **Push to the branch**
```bash
   git push origin feature/sugoooy-feature
```
6. **Open a Pull Request**

**Made with 愛 by [Your Name]**