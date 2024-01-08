import type { Price } from "$lib/types";

export const siteConfig = {
  title: "OnBlockIt",
  description: "Your LinkedIn Growth..."
};

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
