# Claude Clone
*Inspired by [Claude](https://claude.ai/new)*

A front-end clone of the Claude AI. Project replicate the visual design and basic functionality of Claude's chat interface.

## Features

- **Chat Interface**
- **Chat Managment:**
  * Create new chats
  * Rename existing chats
  * Delete chats
  * Chats history

- **Persistent Storage:**
  All chats saved to localStorage
- **Responsive Sidebar**
- **URL-Based Navigation:** Each chat has a unique URL with chat ID parameter
- **Modern UI Components:**
  * Dropdown menus for chat settings
  * Overlay for chat renaming

# Technologies

- HTML
- CSS
- TypeScript
- localStorage

## Getting started

### Prerequisites

* Node.js and npm (for TypeScript compilation)

### Installation

1. Clone or download the repo
2. Copy `.env.example` to `.env`
3. Add your Anthropic API key to `.env`
4. Install Node.js
5. Install dependecies
  `npm install`
6. Compile TypeScript
  `npm run build`
7. Open the `new.html` file