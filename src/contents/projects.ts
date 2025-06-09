import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: 'Shopzo – Full-Stack E-commerce Platform',
        description: 'Built scalable microservice-inspired e-commerce app with OTP auth, admin/user dashboards, and Stripe integration.',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Cloudinary', 'React.js', 'REST APIs'],
        githubLink: 'https://github.com/TanishKumarDev/shopzo',
        demoLink: 'https://shopzo-demo.example.com',
        image: '/projects/shopzo.png',
    },
    {
        title: 'QuizzyAI – AI Quiz Generation Platform',
        description: 'Created GPT-powered MCQ/open-ended quiz app with strict JSON validation and session management.',
        technologies: ['Next.js 13.4', 'Prisma ORM', 'OpenAI GPT API', 'PlanetScale', 'NextAuth.js', 'TypeScript', 'Tailwind CSS'],
        githubLink: 'https://github.com/TanishKumarDev/quizzyai',
        demoLink: 'https://quizzyai-demo.example.com',
        image: '/projects/quizzyai.png',
    },
    {
        title: 'Notely – AI-Enabled Note-Taking App',
        description: 'Developed full-stack note app integrating GPT-4o for Q&A, summarization, and quiz generation.',
        technologies: ['Next.js 15', 'GPT-4o API', 'Supabase', 'Prisma', 'TypeScript', 'Tailwind CSS', 'Fuse.js'],
        githubLink: 'https://github.com/TanishKumarDev/notely',
        demoLink: 'https://notely-demo.example.com',
        image: '/projects/notely.png',
    },
    {
        title: 'Mailgenie – AI Email SaaS Platform',
        description: 'Launched AI email SaaS with GPT-generated threads, full-text search, dark mode, and subscription billing.',
        technologies: ['Next.js 14', 'Prisma', 'GPT API', 'Stripe', 'Clerk Auth', 'PostgreSQL', 'Tailwind CSS'],
        githubLink: 'https://github.com/TanishKumarDev/mailgenie',
        demoLink: 'https://mailgenie-demo.example.com',
        image: '/projects/mailgenie.png',
    }
];
