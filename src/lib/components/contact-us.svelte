<script lang="ts">
  import { Form } from "formsnap";
  import { page } from "$app/stores";

  //   components
  import Section from "./section.svelte";
  import Headline from "./headline.svelte";
  import { contatFormSchema } from "$lib/zod-schema";
</script>

<Section id="contact-us">
  <Headline
    title="Let's get in touch..."
    subtitle="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know 🙂"
    tagline="Contact us" />

  <Form.Root
    schema={contatFormSchema}
    form={$page.data.contactFom}
    method="post"
    action="/?/contactForm"
    class="mx-auto md:mb-12 max-w-xl space-y-4"
    autocomplete="off"
    novalidate
    let:config>
    <div class="md:flex md:space-x-2">
      <div class="w-full">
        <Form.Field {config} name="email">
          <Form.Label>
            <span> Your email address </span>
            <small class=""> (So we can reply to you) </small>
            <sup class="text-destructive font-bold">*</sup>
          </Form.Label>
          <Form.Input type="email" placeholder="hi@gmail.com" required />
          <Form.Validation />
        </Form.Field>
      </div>

      <div class="w-full">
        <Form.Field {config} name="phoneNumber">
          <Form.Label>
            <span>Phone number</span>
            <small> (Optional) </small>
          </Form.Label>
          <Form.Input type="text" maxlength={15} placeholder="(XXX) XXX-XXXX" />

          <Form.Validation />
        </Form.Field>
      </div>
    </div>

    <div>
      <Form.Field {config} name="subject">
        <Form.Label>
          <span>Subject</span>
          <sup class="text-destructive font-bold">*</sup>
        </Form.Label>

        <Form.Input placeholder="eg: To know about (something)" required />

        <Form.Validation />
      </Form.Field>
    </div>

    <div>
      <Form.Field {config} name="description">
        <Form.Label>
          <span>Your description</span>
          <sup class="text-destructive font-bold">*</sup>
        </Form.Label>

        <Form.Textarea rows={3} placeholder="Description of your topic" required />
        <Form.Validation />
      </Form.Field>
    </div>

    <button
      type="submit"
      class="
        bg-primary text-primary-foreground
        px-8 h-10 rounded-md text-sm font-semibold
        focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:outline-0
    ">Submit</button>
  </Form.Root>
</Section>
