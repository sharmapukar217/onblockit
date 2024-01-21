<script lang="ts">
  import { page } from "$app/stores";

  //   components
  import Section from "./section.svelte";
  import Headline from "./headline.svelte";
  import { contatFormSchema } from "$lib/zod-schema";
  import { superForm } from "sveltekit-superforms/client";
  import toast from "svelte-french-toast";

  const { form, errors, enhance, submitting } = superForm($page.data?.contactFom, {
    resetForm: true,
    taintedMessage: undefined,
    validators: contatFormSchema,
    onResult({ result }) {
      if (result.type === "success") {
        toast.success("Your query has been submitted. We'd contact you shortly.", {
          id: "contact-form"
        });
      } else if (result.type === "error") {
        toast.error("Something went wrong while tryig to process your request.", {
          id: "contact-form"
        });
      }
    }
  });
</script>

<Section id="contact-us" class="bg-muted/50">
  <Headline
    title="Let's get in touch..."
    subtitle="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know 🙂"
    tagline="Contact us" />

  <form
    method="post"
    action="/?/contactForm"
    class="mx-auto md:mb-12 max-w-xl space-y-4"
    autocomplete="off"
    novalidate
    use:enhance>
    <div class="w-full">
      <label for="fullName">
        <span>Full name</span>
        <sup class="text-destructive font-bold">*</sup>
      </label>
      <input
        name="fullName"
        id="fullName"
        type="text"
        placeholder="Your full name"
        aria-invalid={$errors.fullName ? true : undefined}
        bind:value={$form.fullName}
        required />
      {#if $errors.fullName}
        <small class="text-sm font-semibold text-destructive">{$errors.fullName}</small>
      {/if}
    </div>

    <div class="md:flex space-y-4 md:space-y-0 md:space-x-2">
      <div class="w-full">
        <label for="email">
          <span> Your email address </span>
          <small> (So we can reply to you) </small>
          <sup class="text-destructive font-bold">*</sup>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="hi@gmail.com"
          aria-invalid={$errors.email ? true : undefined}
          bind:value={$form.email}
          required />
        {#if $errors.email}
          <small class="text-sm font-semibold text-destructive">{$errors.email}</small>
        {/if}
      </div>

      <div class="w-full">
        <label for="phone">
          <span>Phone number</span>
          <small> (Optional) </small>
        </label>
        <input
          type="text"
          maxlength={15}
          placeholder="(XXX) XXX-XXXX"
          bind:value={$form.phone}
          aria-invalid={$errors.phone ? true : undefined} />
        {#if $errors.phone}
          <small class="text-sm font-semibold text-destructive">{$errors.phone}</small>
        {/if}
      </div>
    </div>

    <div>
      <label for="subject">
        <span>Subject</span>
        <sup class="text-destructive font-bold">*</sup>
      </label>

      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="eg: To know about (something)"
        bind:value={$form.subject}
        aria-invalid={$errors.email ? true : undefined}
        required />
      {#if $errors.subject}
        <small class="text-sm font-semibold text-destructive">{$errors.subject}</small>
      {/if}
    </div>

    <div>
      <label for="message">
        <span>Your Message</span>
        <sup class="text-destructive font-bold">*</sup>
      </label>

      <textarea
        rows={3}
        id="message"
        name="message"
        placeholder="Please enter your message..."
        aria-invalid={$errors.message ? true : undefined}
        value={$form.message ?? ""}
        oninput={(e) => {
          $form.message = e.currentTarget.value;
        }}
        required />
      {#if $errors.message}
        <small class="text-sm font-semibold text-destructive">{$errors.message}</small>
      {/if}
    </div>

    <button
      type="submit"
      class="
        bg-primary text-primary-foreground
        px-8 h-10 rounded-md text-sm font-semibold
        focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:outline-0 disabled:cursor-not-allowed disabled:opacity-80"
      disabled={$submitting}>
      {$submitting ? "Please wait..." : "Submit"}
    </button>
  </form>
</Section>
