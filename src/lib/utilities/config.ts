import type { Price, SocialLink } from "$lib/types";

export const siteConfig = {
  title: "OnBlockIt",
  description: "Your LinkedIn Growth Partner...",
  descriptionLong:
    "Our digital advertising strategies employ various digital channels to execute precisely targeted advertising campaigns, ensuring the identification of your ideal customer without the inefficiency of sifting through unqualified leads.  "
};

export const socialLinks: Array<SocialLink> = [
  // {
  //   href: "",
  //   name: "facebook",
  //   icon: "icon-[logos--facebook]"
  // },
  // {
  //   href: "",
  //   name: "instagram",
  //   icon: "icon-[skill-icons--instagram]"
  // },
  // {
  //   href: "",
  //   name: "twitter",
  //   icon: "icon-[skill-icons--twitter]"
  // },
  // {
  //   href: "",
  //   name: "github",
  //   icon: "icon-[skill-icons--github-light]"
  // },
  {
    href: "",
    name: "linkedin",
    icon: "icon-[skill-icons--linkedin]"
  }
];

export const prices: Array<Price> = [
  {
    title: "Boost",
    subtitle: "Optimal choice for personal branding",
    price: 300,
    period: "per month",
    items: [
      {
        description: "Profile Creation & Optimization",
        available: true
      },
      {
        description: "Connection Strategy",
        available: true
      },
      {
        description: "Content Engagement",
        available: true
      },
      {
        description: "Thought Leadership Engagement",
        available: true
      },
      {
        description: "Monthly Performance Report",
        available: true
      },
      {
        description: "Bi-Weekly Strategy Calls",
        available: false
      },
      {
        description: "Content Creation",
        available: false
      },
      {
        description: "Lead Generation",
        available: false
      },
      {
        description: "LinkedIn Advertising",
        available: false
      },
      {
        description: "LinkedIn Recruiter",
        available: false
      },
      {
        description: "Advanced Analytics",
        available: false
      },
      {
        description: "Premium Content Package",
        available: false
      },
      {
        description: "VIP Support",
        available: false
      },
      {
        description: "LinkedIn Sales Navigator Strategy",
        available: false
      }
    ],
    summary:
      "Enhance Your Personal Branding Efforts, Connect with Your Audience, and Measure Performance",
    stripeUrl: "https://buy.stripe.com/28o6oSaZu9uq8YE8wB"
  },
  {
    title: "Accelerator",
    subtitle: "Optimal choice for small and medium businesses",
    price: 500,
    period: "per month",
    items: [
      {
        description: "Profile Creation & Optimization",
        available: true
      },
      {
        description: "Connection Strategy",
        available: true
      },
      {
        description: "Content Engagement",
        available: true
      },
      {
        description: "Thought Leadership Engagement",
        available: true
      },
      {
        description: "Monthly Performance Report",
        available: true
      },
      {
        description: "Bi-Weekly Strategy Calls",
        available: true
      },
      {
        description: "Content Creation",
        available: true
      },
      {
        description: "Lead Generation",
        available: true
      },
      {
        description: "LinkedIn Advertising",
        available: true
      },
      {
        description: "LinkedIn Recruiter",
        available: true
      },
      {
        description: "Advanced Analytics",
        available: false
      },
      {
        description: "Premium Content Package",
        available: false
      },
      {
        description: "VIP Support",
        available: false
      },
      {
        description: "LinkedIn Sales Navigator Strategy",
        available: false
      }
    ],
    summary:
      "Comprehensive Solution for Small and Medium Businesses, Drive Growth through Marketing and Recruitment Efforts",
    stripeUrl: "https://buy.stripe.com/eVa8x05FabCy7UA14a",
    hasRibbon: true,
    ribbonTitle: "popular"
  },
  {
    title: "Mastery",
    subtitle: "Optimal choice for growing and large businesses",
    price: 1000,
    period: "per month",
    items: [
      {
        description: "Profile Creation & Optimization",
        available: true
      },
      {
        description: "Connection Strategy",
        available: true
      },
      {
        description: "Content Engagement",
        available: true
      },
      {
        description: "Thought Leadership Engagement",
        available: true
      },
      {
        description: "Monthly Performance Report",
        available: true
      },
      {
        description: "Bi-Weekly Strategy Calls",
        available: true
      },
      {
        description: "Content Creation",
        available: true
      },
      {
        description: "Lead Generation",
        available: true
      },
      {
        description: "LinkedIn Advertising",
        available: true
      },
      {
        description: "Advanced Analytics",
        available: true
      },
      {
        description: "Premium Content Package",
        available: true
      },
      {
        description: "VIP Support",
        available: true
      },
      {
        description: "LinkedIn Recruiter",
        available: true
      },
      {
        description: "LinkedIn Sales Navigator Strategy",
        available: true
      }
    ],
    summary:
      "Tailored Solutions for Growing and Large Businesses, Drive Growth through Comprehensive Marketing and Recruitment Efforts",
    stripeUrl: "https://buy.stripe.com/aEU00uc3y7mi7UA7sz"
  }
];
