
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isHighlight?: boolean;
}

export interface PracticeItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

// Added TestimonialItem interface to support Testimonials component
export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}
