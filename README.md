# ExplainX - AI-Powered Document Chatbot

![ExplainX Screenshot](https://github.com/user-attachments/assets/95e00516-e4db-4575-9990-fc1a3aaa69ca)

## Overview
ExplainX is an AI-powered chatbot that allows users to upload documents, ask questions, and get instant answers from their document library. The project is built using **Vite**, **React**, and **TypeScript** for the frontend and integrates with an AI model to process and understand document content.

## Features
- **Upload and manage** PDF, Word, and Excel documents.
- **Ask questions** and get AI-powered responses.
- Chat interface for **follow-up queries**.
- Real-time updates with a clean and modern UI.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: *(Specify if using Flask, FastAPI, Node.js, etc.)*
- **AI Model**: OpenAI GPT / LangChain / Custom NLP Model
- **Database**: MongoDB / PostgreSQL / Firebase *(if applicable)*

## Installation & Setup
- npm install
- npm run dev

## Project Structure
explainx/
├── src/
│   ├── components/       # Reusable UI Components
│   ├── pages/            # App Pages
│   ├── hooks/            # Custom Hooks
│   ├── utils/            # Helper Functions
│   ├── assets/           # Images & Static Files
│   ├── App.tsx           # Main App Component
│   ├── main.tsx          # Entry Point
├── public/               # Static Files
├── package.json          # Dependencies & Scripts
├── vite.config.ts        # Vite Configuration
└── README.md             # Project Documentation

## Usage
1. Upload Documents: Upload your PDF, DOCX, or XLSX files.
2. Ask Questions: Interact with the chatbot by asking questions related to your documents.
3. Receive Responses: Get AI-generated responses based on the content of your documents.
4. Chat Continuously: Keep the conversation going for follow-up queries.

### Clone the Repository
```bash
git clone https://github.com/your-username/explainx.git
cd explainx

