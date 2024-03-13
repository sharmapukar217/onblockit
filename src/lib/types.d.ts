export interface Item {
  title?: string;
  description?: string;
  iconClass?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  disabled?: true;
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Price {
  title: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<{ description: string; available: boolean }>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
  summary: string;
  stripeUrl: string;
}
