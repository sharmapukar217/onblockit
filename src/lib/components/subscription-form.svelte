<script lang="ts">
  import { enhance } from "$app/forms";
  import { toast } from "svelte-french-toast";
  import type { SubmitFunction } from "@sveltejs/kit";

  let submitting = $state(false);
  const handleSubmit: SubmitFunction = ({ formElement }) => {
    submitting = true;
    toast.loading("Please wait...", { id: "subscription" });
    return async ({ result }) => {
      submitting = false;
      if (result.type === "success") {
        formElement.reset();
        toast.success(result.data?.message, { id: "subscription" });
      } else if (result.type === "error") {
        toast.error(result.error?.message, { id: "subscription" });
      }
    };
  };
</script>

<form
  method="post"
  action="/?/subscribe"
  class="w-full relative max-w-sm flex mx-auto"
  use:enhance={handleSubmit}>
  <div class="absolute -top-[1.5px] left-4 rounded-full h-full flex items-center justify-center">
    <div class="icon-[heroicons--envelope-open] h-5 w-5 text-muted-foreground" />
  </div>

  <input
    type="email"
    name="email"
    placeholder="hi@email.com"
    class="rounded-full h-12 pl-11 pr-28"
    required />
  <div class="absolute h-full right-0 p-1.5">
    <button
      type="submit"
      class="
          text-sm font-semibold
          bg-primary text-primary-foreground
          rounded-full h-full px-3 disabled:cursor-not-allowed disabled:opacity-80"
      disabled={submitting}>
      Subscribe
    </button>
  </div>
</form>
