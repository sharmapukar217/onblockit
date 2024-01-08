<script>
  import { siteConfig } from "$lib/utilities/config";
</script>

<footer id="footer" class="bg-background rounded-lg shadow p-4">
  <div class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
    <div class="text-sm sm:text-center text-muted-foreground">
      <span>
        &copy; {new Date().getFullYear()}
      </span>
      <a href="/" class="hover:underline hover:text-foreground">{siteConfig.title}™</a>
      <span> | All Rights Reserved. </span>
      <span class="block text-start">Made with ❤️ by Hyperce</span>
    </div>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="/" class="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="/" class="hover:underline me-4 md:me-6">Privacy Policy</a>
      </li>
      <li>
        <a href="/" class="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
        <a href="/" class="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
</footer>
