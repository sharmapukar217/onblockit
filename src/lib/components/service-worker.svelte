<script lang="ts">
  import { onMount } from "svelte";
  import * as pkg from "workbox-window";
  import { dev } from "$app/environment";
  import { toast } from "svelte-french-toast";
  import UpdatePrompt from "./update-prompt.svelte";

  onMount(() => {
    const wb = new pkg.Workbox("/service-worker.js", {
      type: dev ? "module" : "classic"
    });

    wb.addEventListener("activated", (event) => {
      if (!event.isUpdate) {
        toast.success("App is ready to work in offline mode.", { id: "sw" });
      }
    });
    wb.addEventListener("controlling", () => {
      window.location.reload();
    });
    wb.addEventListener("waiting", () => {
      toast(UpdatePrompt, {
        id: "sw",
        duration: Infinity,
        // @ts-expect-error passing custom props
        onUpdate: () => wb.messageSkipWaiting()
      });
    });

    wb.register();
  });
</script>
