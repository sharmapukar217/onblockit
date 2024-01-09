<script lang="ts">
  import "$lib/assets/styles/globals.pcss";

  import { dev } from "$app/environment";
  import { onNavigate } from "$app/navigation";
  import { siteConfig } from "$lib/utilities/config";
  import { inject } from "@vercel/analytics";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  // components
  import { Toaster } from "svelte-french-toast";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import ServiceWorker from "$lib/components/service-worker.svelte";

  // sections
  import Hero from "$lib/components/hero.svelte";
  import Note from "$lib/components/note.svelte";
  import Features from "$lib/components/features.svelte";
  import Services from "$lib/components/services.svelte";
  import Pricing from "$lib/components/pricing.svelte";
  import Faq from "$lib/components/faq.svelte";
  import ContactUs from "$lib/components/contact-us.svelte";

  // TODO: Work on view transition api for
  // better animations

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  // vercel analytics
  injectSpeedInsights();
  inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  <title>{siteConfig.title}-{siteConfig.description}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<!-- toasters and rest -->
<Toaster
  position="bottom-end"
  toastOptions={{
    className: "!bg-muted/90 !text-foreground"
  }} />

<!-- service worker for offline loads -->
<ServiceWorker />

<!-- main app contents starts from here -->
<Header />

<!-- hero section -->
<Hero />

<!-- note section -->
<Note />

<!-- features section -->
<Features
  title="What you get with {siteConfig.title}?"
  subtitle="One of the most professional and comprehensive digital marketing agency currently on the market..."
  features={[
    {
      title: "Feature 1",
      description: "a short but clear description of feature (1)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Feature 2",
      description: "a short but clear description of feature (2)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Feature 3",
      description: "a short but clear description of feature (3)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Feature 4",
      description: "a short but clear description of feature (4)"
      // icon: "tabler:brand-tailwind"
    },
    {
      title: "Starred by many",
      description:
        "We have been selected as one of the best and mostly starred digtal marketing agent in 2023.",
      icon: "icon-[heroicons--star]"
    }
  ]} />

<!-- services section -->
<Services
  title="What services do we offer?"
  services={[
    {
      title: "Best Practices",
      description: "Best in the town with best practices of digital maketing.",
      icon: "icon-[flat-color-icons--approval]"
    },
    {
      title: "Call-to-Action",
      description: "Available on service for 24/7, with best class technical support.",
      icon: "icon-[flat-color-icons--advertising]"
    },
    {
      title: "Dummy service",
      description: "Idk what to write, waiting for content managers for the content :-(",
      icon: "icon-[flat-color-icons--like]"
    },
    {
      title: "Pricing",
      description: "Services at reasonable prices, choices await. Can you resist?",
      icon: "icon-[flat-color-icons--currency-exchange]"
    }
  ]} />

<!-- pricing section -->
<Pricing />

<!-- FAQs -->
<Faq
  questions={[
    {
      title: "What does a Digital Marketer do?",
      description: `Digital Marketing is many elements all working together to deliver on the marketing strategy. The Digital Marketer’s job is to measure progress toward the strategy goals by monitoring the performance on each platform. The tactics may involve social media, search engine optimization (SEO), email marketing, pay-per-click (PPC), and/or blogging.<br>Each of these channels requires trained and experienced professionals who understand how their efforts contribute to the larger strategy and goals. The digital marketing team has many specialists, working together toward the overall goals.`
    },
    {
      title: `Why ${siteConfig.title}?`,
      description: `Because we provide one of the best marketing services and advices available within the market which helps to grow your business more productively. <br> We provide affordable pricing plans and our services are based on <i>pay as you go</i> model, so pay as you grow 😀`
    },
    {
      title: "How can I hire the team?",
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse  in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: "What is it like working with us?",
      description: `Enjoyable and engaging! Once the terms of our engagement have been defined, you will be assigned a single point-of-contact. We also evaluate your current online presence, applying sophisticated software tools to mine valuable insights that we then use to form a cohesive strategy to deliver the best ROI on your marketing spend with us.`
    },
    {
      title: "What is your pricing model and what packages do you offer?",
      description: `The package of services we offer you will be based explicitly on your needs. Prior to developing a proposal for you, we will request a phone meeting to understand where you are having challenges. Then, in sending you a proposal, we will book time with you to review the proposal together, ensuring you understand each of the service deliverables described.`
    }
  ]} />

<!-- contact us -->
<ContactUs />

<Footer />
