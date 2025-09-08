# 🔥 Fire Code Camp

Welcome to Fire Code Camp, an interactive and engaging platform designed to ignite a passion for coding in teens. This project provides a fun, community-oriented environment for learning web development, Python, and more.

## ✨ Key Features

- **🤖 AI-Powered Learning Paths:** Get a personalized learning plan based on your experience and interests.
- **🌐 Interactive Course Catalog:** Browse and filter a wide range of courses, from beginner to advanced.
- **💻 In-Browser IDE:** Write, run, and test code directly in your browser with a simulated IDE that supports multiple files and languages.
- **📸 Community-Focused:** Stay connected with a live Instagram feed showcasing student projects and camp life.
- **📊 Progress Tracking:** Visualize your learning journey and celebrate your achievements.
- **📱 Fully Responsive:** Learn on any device, anytime, anywhere.

## 🚀 Tech Stack

This project is built with a modern, production-ready technology stack:

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)
- **Hosting:** Firebase App Hosting

## 📦 Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or later) and npm installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/fire-code-camp.git
    cd fire-code-camp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

Start the development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the application in development mode.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs the linter to check for code quality issues.
- `npm run genkit:dev`: Starts the Genkit development server for AI flows.

## 📂 Project Structure

The project follows the standard Next.js App Router structure:

```
src
├── ai/                # Genkit AI flows and configuration
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable React components (UI and feature-specific)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── styles/            # Global styles
```
