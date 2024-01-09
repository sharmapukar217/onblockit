<script>
  import { siteConfig } from "$lib/utilities/config";
  import SocialLinks from "./social-links.svelte";
  import SubscriptionForm from "./subscription-form.svelte";
</script>

<!-- <footer id="footer" class="text-center bg-background rounded-lg shadow p-4">
  <div class="w-full mx-auto max-w-screen-xl">
    <ul class="inline-flex mt-3 text-sm font-medium text-muted-foreground sm:mt-0">
      <li>
        <a href="/" class="hover:underline me-4 md:me-6 hover:text-foreground">Home</a>
      </li>
      <li>
        <a href="/" class="hover:underline me-4 md:me-6 hover:text-foreground">About</a>
      </li>
      <li>
        <a href="/" class="hover:underline me-4 md:me-6 hover:text-foreground">Privacy Policy</a>
      </li>
      <li>
        <a href="/" class="hover:underline me-4 md:me-6 hover:text-foreground">Licensing</a>
      </li>
      <li>
        <a href="/" class="hover:underline me-4 md:me-6 hover:text-foreground">Contact us</a>
      </li>
    </ul>
  </div>

  <div class="inline-flex justify-center text-sm text-muted-foreground mt-4 space-x-2">
    <span>
      &copy; {new Date().getFullYear()}
    </span>
    <a href="/" class="hover:underline hover:text-foreground">{siteConfig.title}™</a>
    <span> | All Rights Reserved. </span>
    <span class="block text-start">Made with ❤️ by Hyperce</span>
  </div>
</footer> -->

<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<footer class="bg-background">
  <div class="mx-auto max-w-screen-xl px-4 pb-4 pt-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md space-y-3">
      <strong class="block text-center text-xl font-bold text-foreground sm:text-3xl">
        Want us to email you with the latest news?
      </strong>
      <SubscriptionForm />
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div class="mx-auto max-w-sm lg:max-w-none">
        <p class="mt-4 text-center text-muted-foreground md:text-left md:text-lg">
          {siteConfig.descriptionLong}
        </p>

        <!-- social links here -->
        <SocialLinks />
      </div>

      <div class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <strong class="font-medium text-foreground/80"> Services </strong>

          <ul class="mt-6 space-y-1">
            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Marketing </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Graphic Design </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> App Development </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Web Development </a>
            </li>
          </ul>
        </div>

        <div>
          <strong class="font-medium text-foreground/80"> About </strong>

          <ul class="mt-6 space-y-1">
            <li>
              <a class="text-muted-foreground hover:underline" href="/"> About </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Careers </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> History </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Our Team </a>
            </li>
          </ul>
        </div>

        <div>
          <strong class="font-medium text-foreground/80"> Support </strong>

          <ul class="mt-6 space-y-1">
            <li>
              <a class="text-muted-foreground hover:underline" href="/"> FAQs </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Contact </a>
            </li>

            <li>
              <a class="text-muted-foreground hover:underline" href="/"> Live Chat </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <div class="mt-16 border-t border-gray-100 pt-8">
      <p class="text-center text-xs/relaxed text-gray-500">
        © Company 2022. All rights reserved.

        <br />

        Created with
        <a href="" class="text-gray-700 underline transition hover:text-gray-700/75">Laravel</a>
        and
        <a href="" class="text-gray-700 underline transition hover:text-gray-700/75"
          >Laravel Livewire</a
        >.
      </p>
    </div> -->

    <div class="text-center text-sm text-muted-foreground mt-4 space-x-2 border-t pt-2">
      <span>
        &copy; {new Date().getFullYear()}
      </span>
      <a href="/" class="hover:underline hover:text-foreground">{siteConfig.title}™</a>
      <span> | All Rights Reserved. </span>
      <span class="block">Made with ❤️ by Hyperce</span>
    </div>
  </div>
</footer>
