export const APP_NAME = "HumanizeAI";
export const APP_DESCRIPTION = "Transform AI-generated text into natural, human-like academic writing";

export const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon_name: "LayoutDashboard" },
  { name: "Humanizer", href: "/dashboard/humanizer", icon_name: "Wand2" },
  { name: "AI Detector", href: "/dashboard/detector", icon_name: "Shield" },
  { name: "Citations", href: "/dashboard/citations", icon_name: "BookOpen" },
  { name: "Research", href: "/dashboard/research", icon_name: "FileText" },
  { name: "Documents", href: "/dashboard/documents", icon_name: "FolderOpen" },
  { name: "Voice Profile", href: "/dashboard/voice-profile", icon_name: "Fingerprint" },
  { name: "Settings", href: "/dashboard/settings", icon_name: "Settings" }
];

export const ACADEMIC_LEVELS = [
  { value: "high_school", label: "High School" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "graduate", label: "Graduate/Master's" },
  { value: "phd", label: "PhD/Doctoral" },
  { value: "professional", label: "Professional/Researcher" }
];

export const DISCIPLINES = [
  { value: "humanities", label: "Humanities" },
  { value: "social_sciences", label: "Social Sciences" },
  { value: "natural_sciences", label: "Natural Sciences" },
  { value: "formal_sciences", label: "Formal Sciences" },
  { value: "applied_sciences", label: "Applied Sciences" },
  { value: "medicine", label: "Medicine & Health" },
  { value: "engineering", label: "Engineering & Technology" }
];

export const TONE_DEFAULTS = {
  formality: 70,
  creativity: 40,
  assertiveness: 50
};

export const FREE_WORD_LIMIT = 2500;
export const PRO_WORD_LIMIT = 999999;
