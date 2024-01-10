<script lang="ts">
  import { onMount } from "svelte";
  import * as pkg from "workbox-window";
  import { dev } from "$app/environment";
  import { toast } from "svelte-french-toast";
  import UpdatePrompt from "./UpdatePrompt.svelte";

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
    wb.addEventListener("waiting", (event) => {
      toast(UpdatePrompt, {
        // @ts-ignore passing custom props
        props: { onUpdate: wb.messageSkipWaiting }
      });

      if (confirm("An update is availabe. Would you like to update?")) {
      }
    });

    wb.register();
  });
</script>
