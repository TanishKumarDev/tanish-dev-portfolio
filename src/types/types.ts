/**
 * Interface representing a project in the portfolio
 * Used to define the structure of project data displayed on the website
 */
export interface Project {
    /** The name/title of the project */
    title: string;
    /** A brief description of what the project does and its main features */
    description: string;
    /** Array of technologies, frameworks, and tools used in the project */
    technologies: string[];
    /** URL to the project's GitHub repository */
    githubLink: string;
    /** URL to the live demo or deployed version of the project */
    demoLink: string;
    /** Path to the project's thumbnail/feature image */
    image: string;
}

/**
 * Interface representing a blog post
 * Used to define the structure of blog content displayed on the website
 */
export interface Blog {
    /** The title of the blog post */
    title: string;
    /** A brief summary or excerpt of the blog post */
    excerpt: string;
    /** Estimated reading time for the blog post */

    description: string;
    /** Publication date of the blog post (format can be customized) */
    date: string;
    /** URL-friendly identifier for the blog post */
    readTime: string;
    /** Unique slug for the blog post, used in URLs */
    slug: string;
    /** The main content of the blog post (can be markdown or HTML) */
    content: string;
    /** Optional path to the blog post's featured image */
    image?: string;
} 