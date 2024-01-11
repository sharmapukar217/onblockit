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
    className: "!bg-muted/90 !text-muted-foreground text-sm font-semibold"
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
<!-- use icon: <svg> for direct icor or
     iconClass: 'icon--[provider--icon-name]' for iconify icons
     see `https://icon-sets.iconify.design` for icons
-->

<Features
  title="What you get with {siteConfig.title}?"
  subtitle="One of the most professional and comprehensive digital marketing agency currently on the market..."
  features={[
    {
      title: "Profile Optimization",
      description: `<ul>
        <li> - Create a professional and compelling LinkedIn profile</li>
        <li> - Use a high-quality profile picture and an attention-grabbing headline.</li>  
      </ul>`,
      iconClass: "icon-[heroicons--wrench-screwdriver]"
    },
    {
      title: "Content Sharing",
      description: `<ul>
        <li> - Share relevant and engaging content regularly.</li>  
        <li> - Utilize various media formats, such as text, images, and videos.</li>  
      </ul>`,
      iconClass: "icon-[heroicons--share]"
    },
    {
      title: "Connection Building",
      description: `
        <ul>
          <li> - Connect with professionals in your industry.</li>
          <li> - Personalize connection requests to foster meaningful connections.</li>
        </ul>
      `,
      iconClass: "icon-[heroicons--link]"
    },
    {
      title: "Group Participation",
      description: `
        <ul>
          <li> - Join and actively participate in LinkedIn groups related to your niche.</li>
          <li> - Share insights, ask questions, and engage in discussions.</li>
        </ul>
      `,
      iconClass: "icon-[heroicons--users]"
    },
    {
      title: "Targeted Advertising",
      description: `
        <ul>
          <li> - Explore LinkedIn's advertising options for targeted promotions.</li>
          <li> - Define specific demographics and characteristics for your ad audience.</li>
        </ul>
      `,
      iconClass: "icon-[bi--badge-ad]"
    },
    {
      title: "Authority Building",
      description: `
        <ul>
          <li> - Position yourself as an industry expert by sharing valuable insights.</li>
          <li> - Publish articles or posts showcasing your expertise.</li>
        </ul>
      `,
      iconClass: "icon-[bi--shield-slash]"
    },
    {
      title: "Lead Generation",
      description: `
        <ul>
          <li> - Position yourself as an industry expert by sharing valuable insights.</li>
          <li> - Publish articles or posts showcasing your expertise.</li>
        </ul>
      `,
      iconClass: "icon-[heroicons--arrow-path]"
    }
  ]} />

<!-- services section -->
<Services
  title="What services do we offer?"
  services={[
    {
      title: "Best Practices",
      description: "Best in the town with best practices of digital maketing.",
      iconClass: "icon-[flat-color-icons--approval]"
    },
    {
      title: "Call-to-Action",
      description: "Available on service for 24/7, with best class technical support.",
      iconClass: "icon-[flat-color-icons--advertising]"
    },
    {
      title: "Linkedin Marketing",
      description: "We provide you techincal support for boosing your projects on linked in.",
      iconClass: "icon-[skill-icons--linkedin]"
    },
    {
      title: "Pricing",
      description: "Services at reasonable prices, choices await. Can you resist?",
      iconClass: "icon-[flat-color-icons--currency-exchange]"
    }
  ]} />

<!-- pricing section -->
<Pricing />

<!-- FAQs -->
<Faq
  questions={[
    {
      title: "What does a Digital Marketer do?",
      description: `Digital Marketing is many elements all working together to deliver on the marketing strategy.`
    },
    {
      title: `Why ${siteConfig.title}?`,
      description: `Because we provide one of the best linkedin marketing services and advices available within the market with <i>pay as you go</i> model which helps to grow your business more productively.`
    },
    {
      title: "How can I hire the team?",
      description: `You can use our <a href="#contact-us" class="text-primary hover:underline">contact form</a> or contact us directly using the contact details which you can find on <a href="#footer" class="font-semibold hover:underline">footer</a> section.`
    },
    {
      title: "What is it like working with us?",
      description: `Enjoyable and engaging! Once the terms of our engagement have been defined, you will be assigned a single point-of-contact.`
    },
    {
      title: "What is your pricing model and what packages do you offer?",
      description: `The package of services we offer you will be based explicitly on your needs. .`
    }
  ]} />

<!-- contact us -->
<ContactUs />

<Footer />
