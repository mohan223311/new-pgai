import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  chart?: boolean;
  audio?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Metric {
  value: string;
  label: string;
}
