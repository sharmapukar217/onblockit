import { env } from "$env/dynamic/private";
import { fail, error } from "@sveltejs/kit";
import { contatFormSchema } from "$lib/zod-schema.js";
import { superValidate, setMessage } from "sveltekit-superforms/server";

const ZIPPYBOX_API_URL = "https://zippybox.hyperce.io/api/v1/subscribers";

export const actions = {
  /**
   * POST request for contact form submission
   * @param event
   */
  async contactForm(event) {
    const contactForm = await superValidate(event, contatFormSchema);
    if (!contactForm.valid) return fail(400, { contactForm });

    const response = await fetch("https://admin.hyperce.io/shop-api", {
      headers: {
        "content-type": "application/json"
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        operationName: "addContact",
        variables: { ...contactForm.data },
        query:
          "mutation addContact($fullName: String!, $email: String!, $phone: String, $company: String, $message: String, $country: String) {\n  addContact(input: {fullName: $fullName, email: $email, phone: $phone, company: $company, message: $message, country: $country}) {\n    id\n    fullName\n    email\n    createdAt\n    updatedAt\n  }\n}\n"
      }),
      mode: "cors",
      method: "POST",
      credentials: "omit"
    });

    if (response.ok) {
      return setMessage(contactForm, "Your request has been processed successfully.");
    } else {
      return setMessage(contactForm, "Oops, Something went wrong.", {
        status: 500
      });
    }
  },

  /**
   * POST request for subscription form
   * @param event
   */
  async subscribe({ request, fetch }) {
    try {
      /** since no empty data can be sent from frontend and is always email
       * so no validation required, just handle api call here to add to subscription
       **/
      const formData = await request.formData();

      // NOTE: tag id: 11 means onblockit tag
      const response = await fetch(ZIPPYBOX_API_URL, {
        method: "post",
        body: JSON.stringify({
          tags: [11],
          email: formData.get("email")
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.ZIPPYBOX_API_TOKEN}`
        }
      });

      if (response.ok) {
        return { message: "You're now subscribed to our newsletter." };
      } else {
        return error(500, { message: "Oops! Something went wrong while trying to subscribe you." });
      }
    } catch {
      error(500, { message: "Oops! Something went wrong while trying to subscribe you." });
    }
  }
};
