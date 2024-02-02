import type { Price, SocialLink } from "$lib/types";

export const siteConfig = {
  title: "OnBlockIt",
  description: "Your LinkedIn Growth Partner...",
  descriptionLong:
    "Our digital advertising strategies employ various digital channels to execute precisely targeted advertising campaigns, ensuring the identification of your ideal customer without the inefficiency of sifting through unqualified leads.  "
};

export const socialLinks: Array<SocialLink> = [
  {
    href: "",
    name: "facebook",
    icon: "icon-[logos--facebook]"
  },
  {
    href: "",
    name: "instagram",
    icon: "icon-[skill-icons--instagram]"
  },
  {
    href: "",
    name: "twitter",
    icon: "icon-[skill-icons--twitter]"
  },
  {
    href: "",
    name: "github",
    icon: "icon-[skill-icons--github-light]"
  },
  {
    href: "",
    name: "linkedin",
    icon: "icon-[skill-icons--linkedin]"
  }
];

export const prices: Array<Price> = [
  {
    title: "basic",
    subtitle: "Optimal choice for personal use",
    price: 50,
    period: "per month",
    items: [
      // {
      //   description: "Linkedin account creation"
      // },
      {
        description: "Page setup & acount management"
      },
      {
        description: "Other basic things"
      },
      {
        description: "Linkedin marketing",
        icon: "icon-[flat-color-icons--cancel]"
      },
      {
        description: "Lead generation",
        icon: "icon-[flat-color-icons--cancel]"
      },
      {
        description: "Content creation with graphics",
        icon: "icon-[flat-color-icons--cancel]"
      }
    ],
    callToAction: {
      target: "_blank",
      text: "Get started",
      href: "#section-pricing"
    },
    summary: "Marketing And Lead Generation, Increasing Your Product Sales and Popularity"
  },
  {
    title: "advance",
    subtitle: "Optimal choice for small teams",
    price: 100,
    period: "Per Month",
    items: [
      // {
      //   description: "Linkedin account creation"
      // },
      {
        description: "Page setup & acount management"
      },
      {
        description: "Other basic things"
      },
      {
        description: "Linkedin marketing"
      },
      {
        description: "Lead generation"
      },
      {
        description: "Content creation with graphics"
      },
      // {
      //   description: "Sales navigator &  cold emails",
      //   icon: "icon-[flat-color-icons--cancel]"
      // },
      {
        description: "Content video, sales",
        icon: "icon-[flat-color-icons--cancel]"
      }
    ],
    callToAction: {
      target: "_blank",
      text: "Get started",
      href: "#section-pricing"
    },
    hasRibbon: true,
    ribbonTitle: "popular",
    summary: "Marketing And Lead Generation , Profile Build Increasing Connection"
  },
  {
    title: "premium",
    subtitle: "Optimal choice for companies",
    price: 200,
    period: "Per Month",
    items: [
      // {
      //   description: "Linkedin account creation"
      // },
      {
        description: "Page setup & acount management"
      },
      {
        description: "Other basic things"
      },
      {
        description: "Linkedin marketing"
      },
      {
        description: "Lead generation"
      },
      {
        description: "Content creation with graphics"
      },
      // {
      //   description: "Sales navigator and cold emails"
      // },
      {
        description: "Content video, sales and much more..."
      }
    ],
    callToAction: {
      target: "_blank",
      text: "Get started",
      href: "#section-pricing"
    },
    summary: `Marketing And Lead Generation , Profile Build Acquiring Connection From Expected Country & People`
  }
];
