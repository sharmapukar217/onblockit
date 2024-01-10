<script lang="ts">
  import t, { type Toast } from "svelte-french-toast";

  export let toast: Toast & { onUpdate: () => void };
</script>

<div
  class="-ml-2 inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-primary/100 rounded-lg">
  <div class="icon-[heroicons--arrow-path] h-6 w-6 text-foreground" />
</div>
<div class="ms-3 text-sm font-normal">
  <span class="mb-1 text-sm font-semibold text-foreground">Update available</span>
  <div class="mb-2 text-sm font-semibold">A new version is available for update.</div>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <button
        onclick={toast.onUpdate}
        class="inline-flex justify-center w-full px-2 py-1.5 rounded-md text-xs font-medium text-center bg-primary text-primary-foreground hover:bg-primary/80">
        Update</button>
    </div>
    <div>
      <button
        onclick={() => t.dismiss(toast.id)}
        class="inline-flex justify-center w-full px-2 py-1.5 rounded-md text-xs font-medium text-center text-destructive-foreground bg-destructive/70 hover:bg-destructive/80 border border-destructive">
        Not now
      </button>
    </div>
  </div>
</div>
<button
  type="button"
  onclick={() => t.dismiss(toast.id)}
  class="ms-auto -mr-3 -my-1 items-center justify-center flex-shrink-0 h-8 w-8 hover:text-foreground"
  aria-label="Close">
  <span class="sr-only">Close</span>
  <div class="icon-[heroicons--x-mark] h-5 w-5" />
</button>
