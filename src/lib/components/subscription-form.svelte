<form class="w-full relative max-w-sm flex mx-auto">
  <div class="absolute -top-[1.5px] left-4 rounded-full h-full flex items-center justify-center">
    <div class="icon-[heroicons--envelope-open] h-5 w-5 text-muted-foreground" />
  </div>

  <input
    required
    type="email"
    placeholder="hi@email.com"
    class="w-full rounded-full h-12 pl-11 pr-28
          bg-muted text-muted-foreground text-sm font-semibold
          border-[3px] focus:border-primary transition-all hover:bg-muted/90
        " />
  <div class="absolute h-full right-0 p-1.5">
    <button
      type="submit"
      class="
          text-sm font-semibold
          bg-primary text-primary-foreground
          rounded-full h-full px-3
          ">Subscribe</button>
  </div>
</form>
