import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isHighlight?: boolean;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}