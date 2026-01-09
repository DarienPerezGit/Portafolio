export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    year: string;
    image?: string;
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Xeus",
        category: "FinTech Platform",
        description: "A comprehensive financial operating system for tracking crypto assets, exchanges, and wallets with real-time synchronization.",
        tags: ["React Native", "Spring Boot", "PostgreSQL", "Docker"],
        year: "2025",
        image: "/projects/xues.jpg",
        link: "https://github.com/DarienPerezGit/xeus",
    },
    {
        id: 2,
        title: "The Data Quality Auditor",
        category: "QA + Data Engineering",
        description: "Data quality audit tool for identifying and resolving data quality issues in real-time.",
        tags: ["Python", "SQL", "Excel"],
        year: "2025",
        image: "/projects/quality-data-project.PNG",
        link: "https://the-data-quality-auditor-2m8frn964fuutfznjoyiat.streamlit.app/",
    },
    {
        id: 3,
        title: "Holding Management System",
        category: "Enterprise Application",
        description: "Comprehensive system utilized to manage information flow and resources for a holding company.",
        tags: ["Java", "SpringBoot", "SQL", "HTML/CSS"],
        year: "2025",
        image: "/projects/Cable_vision_holding.PNG",
        link: "https://github.com/darien-perez-utn/cablevision_holding",
    },
    {
        id: 4,
        title: "Nativas",
        category: "E-commerce",
        description: "Nativas is a premium botanical brand reconnecting the modern world with the ancestral healing power of South America.",
        tags: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Vercel"],
        year: "2025",
        image: "/projects/Nativas.PNG",
        link: "https://nativas-two.vercel.app/",
    },
];
