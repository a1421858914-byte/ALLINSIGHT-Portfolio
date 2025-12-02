import { Project, ProjectCategory, Service, NavItem } from './types';
import { Camera, Palette, User, Film, MonitorPlay, Zap, PenTool, Image, Layers, GraduationCap, Box } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '精选作品', href: '#portfolio' },
  { label: '服务体系', href: '#services' },
  { label: '关于我们', href: '#about' },
  { label: '合作咨询', href: '#contact' },
];

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: 1,
    title: "EcoFuture 品牌重塑",
    category: ProjectCategory.BRANDING,
    image: "https://picsum.photos/800/600?random=10",
    description: "科技与环保结合的视觉识别系统",
    format: 'IMAGE'
  },
  {
    id: 2,
    title: "极速时刻 TVC",
    category: ProjectCategory.VIDEO,
    image: "https://picsum.photos/800/600?random=4",
    description: "运动品牌动态广告短片",
    format: 'VIDEO'
  },
  {
    id: 3,
    title: "未来博物馆：沉浸式光影展",
    category: ProjectCategory.INTERACTIVE,
    image: "https://picsum.photos/800/1000?random=11",
    description: "数字媒体与物理空间的交互体验",
    format: 'IMAGE'
  },
  {
    id: 4,
    title: "Origin 咖啡全案",
    category: ProjectCategory.BRANDING,
    image: "https://picsum.photos/800/600?random=6",
    description: "极简主义包装与视觉设计",
    format: 'IMAGE'
  },
  {
    id: 5,
    title: "城市脉搏纪录片",
    category: ProjectCategory.VIDEO,
    image: "https://picsum.photos/800/600?random=8",
    description: "4K 城市风光延时摄影",
    format: 'VIDEO'
  },
  {
    id: 6,
    title: "虚拟现实展厅",
    category: ProjectCategory.INTERACTIVE,
    image: "https://picsum.photos/800/800?random=12",
    description: "3D虚拟交互导览系统",
    format: 'IMAGE'
  },
  {
    id: 7,
    title: "Luminous 珠宝品牌",
    category: ProjectCategory.BRANDING,
    image: "https://picsum.photos/800/1000?random=13",
    description: "高端奢侈品视觉识别",
    format: 'IMAGE'
  },
  {
    id: 8,
    title: "科技峰会开场视频",
    category: ProjectCategory.VIDEO,
    image: "https://picsum.photos/800/600?random=14",
    description: "高科技感三维动态视觉",
    format: 'VIDEO'
  },
  {
    id: 9,
    title: "声音互动装置",
    category: ProjectCategory.INTERACTIVE,
    image: "https://picsum.photos/800/800?random=15",
    description: "声波可视化的实时交互艺术",
    format: 'IMAGE'
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "品牌全案",
    description: "从品牌策略到视觉识别系统(VI)的整体构建。我们提供Logo设计、包装设计、品牌画册及全套视觉资产，提升品牌市场辨识度。",
    icon: "Palette"
  },
  {
    id: 2,
    title: "视频制作",
    description: "涵盖TVC商业广告、企业宣传片、纪录片及短视频内容创作。用电影级的镜头语言和后期特效，讲述动人的品牌故事。",
    icon: "Film"
  },
  {
    id: 3,
    title: "交互展陈",
    description: "融合数字媒体技术与空间设计，提供博物馆、企业展厅、艺术展的沉浸式交互解决方案。包含投影互动、AR/VR体验及装置艺术。",
    icon: "MonitorPlay"
  },
  {
    id: 4,
    title: "智能培训",
    description: "结合AI与多媒体技术，为企业提供智能化的内部培训视觉系统、可视化教学课件及交互式培训软件开发。",
    icon: "Zap"
  }
];

export const ICON_MAP: Record<string, any> = {
  Camera: Camera,
  Palette: Palette,
  User: User,
  Film: Film,
  MonitorPlay: MonitorPlay,
  Zap: Zap,
  PenTool: PenTool,
  Image: Image,
  Layers: Layers,
  Box: Box,
  GraduationCap: GraduationCap
};