<script lang="ts">
  import { page } from "$app/stores";
  import { toast } from "svelte-french-toast";
  import { pricingFormSchema } from "$lib/zod-schema";
  import { zod } from "sveltekit-superforms/adapters";
  import { superForm } from "sveltekit-superforms/client";
  import { prices } from "$lib/utilities/config";
  import { twMerge } from "tailwind-merge";
  import Headline from "./headline.svelte";
  import Section from "./section.svelte";
  import { DropdownMenu } from "bits-ui";
  import * as Dialog from "$lib/components/dialog";

  let open = true;
  let selectedPrice: Partial<(typeof prices)[number]> | undefined;

  const { form, errors, enhance, submitting } = superForm($page.data?.pricingForm ?? {}, {
    resetForm: true,
    validators: zod(pricingFormSchema),
    onResult({ result }) {
      if (result.type === "success") {
        open = false;
        toast.success("Your request has been submitted. We'd contact you shortly.", {
          id: "pricing-form"
        });
      } else if (result.type === "error") {
        toast.error("Something went wrong while tryig to process your request.", {
          id: "pricing-form"
        });
      }
    }
  });

  $: console.log($errors);
</script>

<Section id="pricing" class="bg-muted/60">
  <Headline
    title="How much does our services cost?"
    subtitle="Only pay for what you need and change subscription at any time..."
    tagline="Pricing" />

  <div class="flex items-stretch justify-center">
    <div class="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {#each prices as { title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }}
        <div class="col-span-3 mx-auto flex w-full sm:col-span-1">
          {#if price && period}
            <div
              class="rounded-lg backdrop-blur border bg-background px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center">
              {#if hasRibbon && ribbonTitle}
                <div
                  class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                  <span
                    class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-success text-center text-[10px] font-bold uppercase leading-5 text-background shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
                    {ribbonTitle}
                  </span>
                </div>
              {/if}
              <div class="px-2 py-0">
                {#if title}
                  <h3
                    class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                    {title}
                  </h3>
                {/if}
                {#if subtitle}
                  <p class="font-medium text-muted-foreground">{subtitle}</p>
                {/if}
                <div class="my-8">
                  <div class="flex items-center justify-center text-center mb-1">
                    <span class="text-5xl">$</span>
                    <span class="text-6xl font-extrabold">{price}</span>
                  </div>
                  <span class="text-base leading-6 lowercase text-foreground">{period}</span>
                </div>
                {#if items}
                  <ul role="list" class="my-8 md:my-10 space-y-2 text-left">
                    {#each items as { description, icon }}
                      {#if description}
                        <li class="mb-1.5 flex items-start space-x-3 leading-7">
                          <div
                            class="{icon ??
                              'icon-[flat-color-icons--approval]'} w-5 h-5 font-bold p-1" />
                          <span class="text-sm">{description}</span>
                        </li>
                      {/if}
                    {/each}
                  </ul>
                {/if}
              </div>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger
                  class={twMerge(
                    `group relative w-full rounded-lg h-11
                      flex items-center justify-center font-medium border`,
                    hasRibbon
                      ? "bg-primary text-primary-foreground hover:bg-primary/85"
                      : "bg-muted text-foreground hover:bg-muted/85"
                  )}>
                  Get Started

                  <div
                    class="icon-[bi--chevron-down] w-3 h-3 text-foreground absolute right-4 group-data-[state=open]:rotate-[180deg] transition-transform" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  class="bg-muted my-2 w-[16.5rem] rounded-lg p-2 shadow-md focus:outline-none space-y-0.5">
                  <DropdownMenu.Item asChild let:builder>
                    <a
                      {...builder}
                      use:builder.action
                      href="https://stripe_link"
                      class="inline-flex items-center w-full text-muted-foreground cursor-pointer px-2 py-2 rounded-lg data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">
                      <i class="icon-[bi--credit-card] w-4 h-4 me-3" />
                      <span class="font-medium md:font-semibold text-sm"> Pay & Begin </span>
                    </a>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item
                    on:click={() => {
                      open = true;
                      $form.planType = title;
                      selectedPrice = { title, subtitle, price, period, hasRibbon, ribbonTitle };
                    }}
                    class="inline-flex items-center w-full text-muted-foreground cursor-pointer px-2 py-2 rounded-lg data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground">
                    <i class="icon-[bi--headset] w-4 h-4 me-3" />
                    <span class="font-medium md:font-semibold text-sm"> Request for Contact </span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</Section>

{#if selectedPrice}
  <Dialog.Root
    bind:open
    onOpenChange={function (opened) {
      if (!opened) {
        $form.planType = undefined;
        selectedPrice = undefined;
      }
    }}>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Request for Service</Dialog.Title>
      </Dialog.Header>

      <form action="/?/pricingForm" method="post" class="space-y-4" autocomplete="off" use:enhance>
        <div class="relative">
          <span class="text-sm font-medium md:font-semibold text-muted-foreground">Plan</span>
          <input type="hidden" name="planType" bind:value={$form.planType} required />
          <div
            class="w-full h-10 rounded-lg bg-muted text-muted-foreground cursor-not-allowed flex items-center px-3 text-sm font-medium md:font-semibold capitalize">
            {selectedPrice.title} Plan @ ${selectedPrice.price}
            {selectedPrice.period}
          </div>

          {#if selectedPrice.hasRibbon && selectedPrice.ribbonTitle}
            <div
              class="absolute top-[10px] right-0 z-[1] h-[100px] w-[100px] overflow-hidden text-right">
              <span
                class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-success text-center text-[10px] font-bold uppercase leading-5 text-background shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
                {selectedPrice.ribbonTitle}
              </span>
            </div>
          {/if}
        </div>

        <div class="w-full">
          <label for="fullName">Full Name<sup class="text-destructive">*</sup></label>
          <input
            name="fullName"
            id="name"
            class="mt-0.5"
            aria-invalid={$errors.fullName ? true : undefined}
            bind:value={$form.fullName}
            placeholder="i.e: John Doe"
            required />
          {#if $errors.fullName}
            <small class="text-sm font-semibold text-destructive">{$errors.fullName}</small>
          {/if}
        </div>

        <div class="w-full">
          <label for="emailAddress">Email Address<sup class="text-destructive">*</sup></label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            class="mt-0.5"
            aria-invalid={$errors.emailAddress ? true : undefined}
            bind:value={$form.emailAddress}
            placeholder="i.e: johndoe@gmail.com"
            required />
          {#if $errors.emailAddress}
            <small class="text-sm font-semibold text-destructive">{$errors.emailAddress}</small>
          {/if}
        </div>

        <div class="w-full">
          <label for="whatsappNumber">Whatsapp Number<sup class="text-destructive">*</sup></label>
          <input
            type="text"
            inputmode="numeric"
            name="whatsappNumber"
            id="whatsappNumber"
            class="mt-0.5"
            placeholder="i.e: 1 212 456 7890"
            aria-invalid={$errors.whatsappNumber ? true : undefined}
            bind:value={$form.whatsappNumber}
            required />
          {#if $errors.whatsappNumber}
            <small class="text-sm font-semibold text-destructive">{$errors.whatsappNumber}</small>
          {/if}
        </div>

        <div class="w-full">
          <label for="message">Any Message?</label>
          <textarea
            name="message"
            id="message"
            class="mt-0.5"
            rows={3}
            aria-invalid={$errors.message ? true : undefined}
            bind:value={$form.message} />
          {#if $errors.message}
            <small class="text-sm font-semibold text-destructive">{$errors.message}</small>
          {/if}
        </div>

        <div>
          <button
            type="submit"
            class="
          bg-primary text-primary-foreground
          px-8 h-10 rounded-md text-sm font-semibold
          focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:outline-0 disabled:cursor-not-allowed disabled:opacity-80"
            disabled={$submitting}>
            {$submitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </Dialog.Content>
  </Dialog.Root>
{/if}
