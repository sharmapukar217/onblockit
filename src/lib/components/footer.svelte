<script>
  import { siteConfig } from "$lib/utilities/config";
  import SocialLinks from "./social-links.svelte";
  import SubscriptionForm from "./subscription-form.svelte";
</script>

<footer id="footer" class="bg-background border-t">
  <div class="mx-auto max-w-screen-xl px-4 pb-4 pt-16 sm:px-6 md:px-8">
    <div class="mx-auto max-w-md space-y-3">
      <strong class="block text-center text-xl font-bold text-foreground sm:text-3xl">
        Want us to email you with the latest news?
      </strong>
      <SubscriptionForm />
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-32">
      <div>
        <p class="mt-4 text-muted-foreground text-left">
          {siteConfig.descriptionLong}
        </p>

        <!-- social links here -->
        <SocialLinks />
      </div>

      <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 text-left">
        <div class="w-full">
          <strong class="font-medium text-foreground/80 block mb-2"> USA </strong>

          <div class="flex flex-col space-y-1">
            <div class="flex items-center space-x-3">
              <div class="icon-[heroicons--building-office] min-h-4 min-w-4" />
              <small class="text-muted-foreground">Hyperce, LLC</small>
            </div>

            <div class="flex items-center space-x-3">
              <div class="icon-[heroicons--map-pin] min-h-4 min-w-4" />
              <small class="text-muted-foreground">
                800 N King Street Suite 304 1198 Wilmington, DE 19801 United States
              </small>
            </div>

            <div class="flex items-center space-x-3">
              <div class="icon-[heroicons--envelope] min-h-4 min-w-4" />
              <a href="mailto:hi@hyperce.com" target="_blank">
                <small class="text-muted-foreground"> hi@hyperce.com </small>
              </a>
            </div>

            <div class="flex items-center space-x-3">
              <div class="icon-[logos--whatsapp-icon] min-h-4 min-w-4" />
              <a href="https://wa.me/16178195576" target="_blank">
                <small class="text-muted-foreground">+1-617-819-5576 </small>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full">
          <strong class="font-medium text-foreground/80 block mb-2"> NEPAL </strong>

          <div class="flex flex-col space-y-1">
            <div class="flex items-center space-x-3">
              <div class="icon-[heroicons--building-office] min-h-4 min-w-4" />
              <small class="text-muted-foreground">Hyperce Technologies Pvt. Ltd.</small>
            </div>

            <div class="flex items-center space-x-3">
              <div class="icon-[heroicons--map-pin] min-h-4 min-w-4" />
              <small class="text-muted-foreground">
                Adarshanagar, Chandragiri - 14, Kathmandu, Nepal, 44600
              </small>
            </div>

            <div class="flex items-center space-x-3">
              <div class="icon-[heroicons--envelope] min-h-4 min-w-4" />
              <a href="mailto:hi@hyperce.com" target="_blank">
                <small class="text-muted-foreground"> hi@hyperce.com </small>
              </a>
            </div>

            <div class="flex items-center space-x-3">
              <div class="icon-[logos--whatsapp-icon] min-h-4 min-w-4" />
              <a href="https://wa.me/9779840260599" target="_blank">
                <small class="text-muted-foreground">+977-9840260599</small>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="text-left">
        <strong>USA</strong>
      </div> -->

      <!-- <div class="grid grid-cols-3 gap-8 text-left">
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
      </div> -->
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
