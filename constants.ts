
export interface FocusArea {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

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
    title: "Security Engineering",
    description: "Developing robust, scalable, and operationally-ready security solutions. My experience includes building custom tools for Indicator of Compromise (IOC) matching, data pipelines for threat detection, and automated workflows to streamline security operations.",
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Network Intrusion Detection System (NIDS) Log Analysis",
    description: "An end-to-end data engineering and machine learning project focused on analyzing Suricata NIDS logs to identify potential threats. The project involved parsing and enriching log data, performing exploratory data analysis (EDA), and building a baseline model to detect malicious activity.",
    imageUrl: "project-1.gif",
    tags: ["Python", "Pandas", "Scikit-learn", "Jupyter", "Data Engineering", "Suricata"],
    link: "https://github.com/bobgaynor/nids-log-analysis"
  },
];

export const SOCIAL_LINKS = [
    {
        platform: "GitHub",
        url: "https://github.com/bobgaynor",
        iconPath: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/bob-gaynor-a947031/",
        iconPath: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    },
    {
        platform: "Twitter",
        url: "https://twitter.com/bob_gaynor",
        iconPath: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    }
];

export const PROFILE = {
    name: "Bob Gaynor",
    email: "bob@bobgaynor.dev",
};

export const UI_CONFIG = {
    NAVBAR_SCROLL_THRESHOLD: 20, // In pixels
};

export const Z_INDICES = {
  BASE: 0,
  CONTENT: 10,
  OVERLAY: 20,
  MOBILE_MENU: 900,
  NAVBAR: 1000,
  NAVBAR_BUTTON: 1010,
};
