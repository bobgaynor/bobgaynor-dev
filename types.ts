
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // Serves as fallback or cover
  link: string;
}

export interface FocusArea {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconPath: string; // SVG path data
}