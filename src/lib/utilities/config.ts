import type { Price, SocialLink } from "$lib/types";

export const siteConfig = {
  title: "OnBlockIt",
  description: "Your LinkedIn Growth...",
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
    price: 29,
    period: "per month",
    items: [
      {
        description: "Etiam in libero, et volutpat"
      },
      {
        description: "Aenean ac nunc dolor tristique"
      },
      {
        description: "Cras scelerisque accumsan lib"
      },
      {
        description: "In hac habitasse",
        icon: "icon-[flat-color-icons--cancel]"
      }
    ],
    callToAction: {
      target: "_blank",
      text: "Get started",
      href: "#section-pricing"
    }
  },
  {
    title: "standard",
    subtitle: "Optimal choice for small teams",
    price: 69,
    period: "Per Month",
    items: [
      {
        description: "Proin vel laoreet"
      },
      {
        description: "Ut efficitur habitasse egestas"
      },
      {
        description: "Volutpat hac curabitur"
      },
      {
        description: "Pellentesque blandit ut nibh"
      },
      {
        description: "Donec fringilla sem"
      }
    ],
    callToAction: {
      target: "_blank",
      text: "Get started",
      href: "#section-pricing"
    },
    hasRibbon: true,
    ribbonTitle: "popular"
  },
  {
    title: "premium",
    subtitle: "Optimal choice for companies",
    price: 199,
    period: "Per Month",
    items: [
      {
        description: "Curabitur suscipit risus"
      },
      {
        description: "Aliquam habitasse malesuada"
      },
      {
        description: "Suspendisse sit amet blandit"
      },
      {
        description: "Suspendisse auctor blandit dui"
      }
    ],
    callToAction: {
      target: "_blank",
      text: "Get started",
      href: "#section-pricing"
    }
  }
];
