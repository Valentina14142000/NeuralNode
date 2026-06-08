# 🧠 NeuralNode | AI Talent Marketplace

NeuralNode is a next-generation marketplace designed specifically for the AI economy. It connects elite AI developers, prompt engineers, and automation specialists with high-value projects, using advanced LLM-powered verification to ensure technical excellence.

![NeuralNode Preview](https://picsum.photos/seed/neuralnode-hero/1200/400)

## 🚀 Key Features

- **AI Pitch Assistant**: Automatically generate hyper-tailored project proposals by analyzing job requirements against your unique freelancer profile and work history.
- **Neural Verification Node**: 
    - **GitHub Analysis**: AI-driven scanning of public repositories to verify code quality, patterns, and specific AI/ML expertise.
    - **Technical Assessments**: Time-boxed, LLM-powered evaluations on specialized topics like RAG Architectures, Agentic Workflows, and Prompt Engineering.
- **Command Center (Dashboard)**: A centralized interface for tracking active project nodes, revenue growth, success rates, and real-time market pulse.
- **Neural Profile & Badges**: Showcase your verified skills with AI-issued badges and a detailed project legacy log.
- **Project Node Board**: A high-performance job board for identifying verified AI contracts.

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **AI Orchestration**: [Genkit](https://github.com/firebase/genkit) (Google Generative AI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Database & Auth**: [Firebase](https://firebase.google.com/) (Firestore & Authentication)

## 📂 Project Structure

```text
src/
├── ai/                # Genkit AI flows and configuration
│   ├── flows/         # Specialized AI workflows (Proposals, Verification)
│   └── genkit.ts      # Genkit initialization
├── app/               # Next.js App Router (Pages & Layouts)
│   ├── dashboard/     # Freelancer Command Center
│   ├── jobs/          # Project marketplace
│   ├── profile/       # User neural profiles
│   └── verify/        # Skill verification interface
├── components/        # Reusable UI components (Shadcn)
├── hooks/             # Custom React hooks (Toast, UI state)
├── lib/               # Utility functions and shared data
└── firebase/          # Firebase client configuration and hooks
```


## 🤖 AI Workflows

NeuralNode leverages **Genkit** to handle complex AI logic:

- **Proposal Generation**: Uses the `generateCustomProposalFlow` to bridge the gap between job descriptions and freelancer capabilities.
- **Skill Verification**: Uses the `verifyFreelancerSkillsFlow` which includes custom tools for fetching and summarizing GitHub repository data.

---

Built by Valentina Kiyungi.
