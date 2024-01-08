<script lang="ts">
  const { title, subtitle, tagline } = $props<{
    title?: string;
    subtitle?: string;
    tagline?: string;
  }>();
</script>

<div class="mb-8 md:mx-auto md:mb-12 text-center max-w-3xl">
  {#if tagline}
    <p class="text-base text-primary font-bold tracking-wide uppercase">{tagline}</p>
  {/if}
  {#if title}
    <h2
      class="font-bold leading-tighter tracking-tighter text-secondary-foreground text-3xl md:text-4xl">
      {title}
    </h2>
  {/if}
  {#if subtitle}
    <p class="mt-4 text-muted-foreground text-xl">{subtitle}</p>
  {/if}
</div>
