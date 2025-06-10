export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type LibraryType = {
  libraryName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
  library: LibraryType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
};

// * EXPERIENCE SECTION

export type OtherProjects = {
  logo?: string;
  name: string;
  desc: string[];
  github?: string;
  link?: string;
  technologies?: string[];
  other?: OtherProjects[]
}

export type ExperienceType = {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
  otherProjects?: OtherProjects[],
  technologies?: string[];
};

// * PROJECT SECTION

export type ProjectType = {
  id: string;
  name: string;
  desc: string;
  github?: string;
  link?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};
