
import { Project, FocusArea, SocialLink } from './types';

export const PROFILE = {
  name: "Bob Gaynor",
  role: "Senior Full Stack Engineer",
  bio: "Building AI/ML tools to automate cybersecurity and threat detection.",
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
    title: "AI-Driven Threat Detection",
    description: "Building custom ML models to identify irregular network patterns, anomalies, and potential zero-day vulnerabilities in real-time.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    id: 2,
    title: "SecOps Automation",
    description: "Developing intelligent agents and SOAR workflows to automate incident response, reducing mean time to resolution (MTTR).",
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    id: 3,
    title: "Threat Intelligence Analysis",
    description: "Leveraging LLMs to ingest, summarize, and correlate vast amounts of unstructured threat data from the dark web and public feeds.",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CTA: Cyber Threat Analysis",
    description: "An automated framework designed to ingest, normalize, and analyze threat intelligence feeds in real-time. It features IOC extraction, correlation with internal telemetry, and automated reporting.",
    tags: ["Python", "Threat Intel", "Automation", "Cybersecurity"],
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
