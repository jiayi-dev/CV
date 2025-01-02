/**
 * Created by Jiayi Li at 12/30/2024,10:22 PM
 */

import {
    Github,
    Linkedin,
    Mail,
    Globe,
    type LucideIcon
} from 'lucide-react';

interface Social {
    name: string;
    url: string;
    icon: LucideIcon;
}

export const DATA = {
    name: "Your Name", // Full name
    url: "https://yourwebsite.com", // Personal or portfolio website URL
    description: "Your Job Title", // Your professional title or role
    summary: "A brief summary of yourself, your passions, and your goals.", // A short description of your interests, experience, or what drives you
    avatarUrl: "/img/avatar.jpg", // Path to your profile picture
    skills: [
        "Skill 1", "Skill 2", "Skill 3", "Skill 4", // List your skills (e.g., programming languages, tools, etc.)
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/your-username", // Your GitHub URL
                icon: Github
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/your-username", // Your LinkedIn URL
                icon: Linkedin
            },
            email: {
                name: "Send Email",
                url: "mailto:your-email@example.com", // Your email address
                icon: Mail
            },
            website: {
                name: "Website",
                url: "https://yourwebsite.com", // Your website URL (can be personal, portfolio, or blog)
                icon: Globe
            }
        },
    },
    work: [
        {
            date: "MM YYYY - MM YYYY", // Employment duration
            company: "Company Name", // Company name
            title: "Your Job Title", // Your job title
            logoUrl: "/img/company-logo.png", // Path to company logo
            description: [
                {
                    title: "Role Title", // If you had different roles, specify them here
                    details: "Describe your job responsibilities and achievements."
                }
            ]
        },
        // Add more work experiences if needed
    ],
    education: [
        {
            school: "University/School Name", // Name of your educational institution
            href: "https://www.yourschool.edu", // Link to your school's website
            degree: "Your Degree (e.g., B.Tech, M.Sc., etc.)", // Your degree or qualification
            logoUrl: "/img/school-logo.jpg", // Path to school logo
            date: "YYYY - YYYY", // Duration of your studies
        },
        // Add more education details as needed
    ],
    projects: [
        {
            title: "Project Title", // Project name
            href: "https://yourproject.com", // Live URL of the project
            dates: "MM YYYY", // Project completion or development dates
            description: "A brief description of the project. What problem does it solve? What tools/technologies did you use?", // Description of the project
            technologies: [
                "Technology 1", "Technology 2", "Technology 3", "Technology 4" // List of technologies used in the project
            ],
            links: [
                {
                    type: "Website",
                    href: "https://yourproject.com", // Link to the project website or app
                    icon: Globe
                },
                {
                    type: "Source",
                    href: "https://github.com/your-username/project-repo", // Link to project code repository
                    icon: Github
                },
            ],
            image: "/img/project-image.png" // Path to an image representing the project
        },
        // Add more projects if needed
    ],
    activities: [
        {
            title: "Activity Title", // Name of the activity or event
            dates: "MM YYYY", // Date the activity took place
            location: "Location (Online/Physical)", // Where the activity took place
            description: "Describe your involvement in the activity, key achievements, and outcomes.", // Description of your participation
            image: "/img/activity-image.png", // Path to an image representing the activity
            links: [], // Additional links related to the activity (if any)
        },
        // Add more activities if needed
    ],
    certificates: [
        {
            title: "Certification Title", // Certification title
            dates: "MM YYYY", // Date certification was awarded
            organization: "Certifying Organization", // Organization that issued the certificate
            logoUrl: "/img/organization-logo.jpg", // Path to organization logo
            credential: "https://www.credly.com/badges/your-badge-id", // Link to the certification or credential
        },
        {
            title: "Another Certification", // Certification title
            dates: "MM YYYY", // Date certification was awarded
            organization: "Another Organization", // Organization that issued the certificate
            logoUrl: "/img/another-logo.jpg", // Path to organization logo
            credential: "https://www.credly.com/badges/another-badge-id", // Link to the certification or credential
        },
        // Add more certificates if needed
    ],
};