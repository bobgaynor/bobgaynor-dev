
import { Project, FocusArea, SocialLink } from './types';

export const PROFILE = {
  name: "Bob Gaynor",
  role: "Senior Full Stack Engineer",
  bio: "Combining security expertise with machine learning to reveal hidden threat patterns and move detection toward predictive intelligence.",
  location: "San Francisco, CA",
  email: "bg@bobgaynor.dev"
};

export const SKILLS = [
  "Python", "TensorFlow", "PyTorch", "LangChain", "TypeScript", 
  "React", "PostgreSQL", "AWS Security", "Docker", "Wireshark"
];

export const CURRENT_RESEARCH = {
  title: "Adversarial Robustness in NIDS",
  description: "Investigating gradient-based evasion attacks against deep learning-based Network Intrusion Detection Systems (NIDS) and developing defensive distillation techniques to improve model resilience."
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 1,
    title: "ML for Security",
    description: "Building end-to-end machine learning pipelines for log analysis, including parsing, enrichment, feature engineering, and baseline model evaluation. Focused on identifying subtle patterns and behaviors traditional tools miss.",
    iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    id: 2,
    title: "Threat Intelligence Analysis",
    description: "Collecting, organizing, and correlating threat intelligence with observed indicators and cybersecurity-relevant data to strengthen understanding of emerging threats and support predictive detection approaches.",
    iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    id: 3,
    title: "Security Data Analysis",
    description: "Analyzing system and network logs to identify anomalies and technical indicators using repeatable workflows designed to separate noise from actionable signals.",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CTA: Cyber Threat Analysis",
    description: "A reproducible machine-learning pipeline built to detect brute-force activity using structured log parsing, enrichment, feature engineering, and baseline modeling. Designed to show how data-driven workflows improve traditional analysis and provide a foundation for future predictive detection work.",
    tags: ["Cybersecurity", "Threat Intel", "Automation", "ML"],
    imageUrl: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=1200", // Verified Cloud Gate (The Bean) Image
    link: "https://github.com/bobgaynor/cta"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/bobgaynor",
    iconPath: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/bobgaynor/",
    iconPath: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z"
  }
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for ${PROFILE.name}'s portfolio website. 
Your goal is to professionally and politely answer questions about ${PROFILE.name} based on the following information:
- Role: ${PROFILE.role}
- Bio: ${PROFILE.bio}
- Location: ${PROFILE.location}
- Skills: ${SKILLS.join(", ")}
- Areas of Focus: ${FOCUS_AREAS.map(e => `${e.title}: ${e.description}`).join("; ")}
- Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join("; ")}
- Current Research: ${CURRENT_RESEARCH.title} - ${CURRENT_RESEARCH.description}

If a user asks about specific past employment history, mention that Bob focuses on independent contracting and tool building now, but you can share his technical focus areas.
Keep responses concise (under 100 words) unless asked for details. Be enthusiastic but professional.`;
