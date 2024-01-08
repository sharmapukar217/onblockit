<script lang="ts">
  import { page } from "$app/stores";
  import { siteConfig } from "$lib/utilities/config";
  import { clickOutside } from "$lib/utilities/actions";

  type Mode = "light" | "dark" | "system";

  let navOpened = $state(false);
  let mode = $state<Mode>("dark");
  let activeHash = $state($page.url.hash || "#section-hero");
  let headerRef = $state<HTMLHeadElement | undefined>(undefined);

  const toggleMode = () => {
    const sequence: Array<Mode> = ["light", "dark", "system"];
    mode = sequence[sequence.indexOf(mode) + 1] ?? "light";

    // update dom
    document.documentElement.setAttribute("data-mode", mode);
  };

  $effect(() => {
    const sections = document.querySelectorAll("section");

    const trackScroll = () => {
      if (!headerRef) return;
      headerRef.classList.toggle("md:border-0", window.scrollY <= 50);

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (window.scrollY + 100 >= offsetTop && window.scrollY < offsetBottom) {
          if (section.id) activeHash = `#${section.id}`;
        }
      });
    };

    trackScroll();
    window.addEventListener("scroll", trackScroll);
    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  });
</script>

<header
  bind:this={headerRef}
  class="
    sticky top-0 z-40 w-full
    py-6 px-4 md:py-4 mx-auto bg-background/95 select-none
    flex-none transition-all border-b ease-in-out md:shadow-none"
  class:shadow-sm={navOpened}
  use:clickOutside={() => {
    navOpened = false;
  }}>
  <div class="mr-auto rtl:mr-0 flex flex-col md:flex-row md:items-center md:justify-between">
    <div class="flex justify-between items-center">
      <a href="/" class="text-2xl md:text-xl font-bold">
        🚀 {siteConfig.title}
      </a>

      <button
        onclick={() => {
          navOpened = !navOpened;
        }}
        class="
        px-3 py-1 text-muted-foreground hover:text-foreground
        inline-flex md:hidden items-center justify-center rounded-md">
        {#if navOpened}
          <div class="icon-[heroicons--x-mark] pointer-events-none h-8 w-8" />
        {:else}
          <div class="icon-[heroicons--bars-3] pointer-events-none h-8 w-8" />
        {/if}
      </button>
    </div>

    <div class="md:contents {navOpened ? 'contents' : 'hidden'}">
      <nav class="flex flex-col md:flex md:flex-row mt-2 md:mt-0">
        <a href="#section-hero" class:active={activeHash === "#section-hero"}>
          <div class="icon-[heroicons--home]" />
          <span>Home</span>
        </a>
        <a href="#section-features" class:active={activeHash === "#section-features"}>
          <div class="icon-[heroicons--server-stack]" />
          <span>Features</span>
        </a>
        <a href="#section-services" class:active={activeHash === "#section-services"}>
          <div class="icon-[heroicons--wrench-screwdriver]" />
          <span>Services</span></a>

        <a href="#section-pricing" class:active={activeHash === "#section-pricing"}>
          <div class="icon-[heroicons--currency-dollar]" />
          <span>Pricing</span></a>
      </nav>

      <div class="inline-flex items-center mt-2 md:mt-0">
        <button class="inline-flex items-center justify-center ml-2 mr-4 py-2" onclick={toggleMode}>
          {#if mode === "light"}
            <div class="icon-[heroicons--sun] h-6 w-6 pointer-events-none" />
          {:else if mode === "dark"}
            <div class="icon-[heroicons--moon] h-6 w-6 pointer-events-none" />
          {:else}
            <div class="icon-[heroicons--computer-desktop] h-6 w-6 pointer-events-none" />
          {/if}
        </button>
        <a href="/" aria-label="RSS Feed" class="inline-flex items-center justify-center">
          <div class="icon-[heroicons--rss] h-6 w-6" />
        </a>

        <a
          href="/"
          class="text-sm font-semibold ml-auto md:ml-4 bg-primary text-primary-foreground h-10 rounded-full px-4 flex items-center justify-center"
          >Contact us</a>
      </div>
    </div>
  </div>
</header>

<style lang="postcss">
  nav a {
    @apply font-medium hover:text-primary p-1.5 inline-flex items-center space-x-2.5;
  }
  nav a div {
    @apply h-5 w-5 md:hidden;
  }
  a.active {
    @apply underline decoration-wavy underline-offset-2;
  }
</style>
