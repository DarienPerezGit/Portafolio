export interface ContactMethod {
    id: number;
    icon: string;
    title: string;
    value: string;
    link: string;
    description: string;
}

export const contactMethods: ContactMethod[] = [
    {
        id: 1,
        icon: 'email',
        title: 'Email',
        value: 'ndarien93@gmail.com',
        link: 'mailto:ndarien93@gmail.com',
        description: 'Send me an email',
    },
    {
        id: 2,
        icon: 'github',
        title: 'GitHub',
        value: '@DarienPerezGit',
        link: 'https://github.com/DarienPerezGit',
        description: 'Check out my code',
    },
    {
        id: 3,
        icon: 'linkedin',
        title: 'LinkedIn',
        value: 'Darien Perez',
        link: 'https://www.linkedin.com/in/darienperez/',
        description: 'Let\'s connect professionally',
    },
];
