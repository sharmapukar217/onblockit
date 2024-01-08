<script lang="ts">
  import "$lib/assets/styles/globals.pcss";

  import { toast, Toaster } from "svelte-french-toast";
  import ServiceWorker from "$lib/components/service-worker.svelte";
</script>

<Toaster position="bottom-end" toastOptions={{ className: "!bg-muted/90 !text-foreground" }} />
<ServiceWorker />
<slot />
