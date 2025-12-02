export enum ProjectCategory {
  ALL = '全部',
  BRANDING = '品牌全案',
  VIDEO = '视频制作',
  INTERACTIVE = '交互展陈'
}

export type ProjectFormat = 'IMAGE' | 'PPT' | 'PDF' | 'VIDEO';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  format?: ProjectFormat;
  fileUrl?: string; // URL for the actual file (PPT/PDF/Video)
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}