<script lang="ts">
  import "$lib/assets/styles/globals.pcss";

  import { onNavigate } from "$app/navigation";
  import { Toaster } from "svelte-french-toast";
  import ServiceWorker from "$lib/components/service-worker.svelte";

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
</script>

<Toaster position="bottom-end" toastOptions={{ className: "!bg-muted/90 !text-foreground" }} />
<ServiceWorker />
<slot />
