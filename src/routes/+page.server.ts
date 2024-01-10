import { fail, error } from "@sveltejs/kit";
import { contatFormSchema } from "$lib/zod-schema.js";
import { superValidate, setMessage } from "sveltekit-superforms/server";

export const actions = {
  /**
   * POST request for contact form submission
   * @param event
   */
  async contactForm(event) {
    const contactForm = await superValidate(event, contatFormSchema);
    if (!contactForm.valid) return fail(400, { contactForm });

    /** TODO: Handles the form data
     * the submitted form data is at form.data
     * use setMessage to set error message which is then shown in UI
     * eg: setMessage(contactForm, "Oops, Something went wrong.", {
     *  status: 500
     * });
     **/

    // assuming all goes right till now, setting up success message
    setMessage(contactForm, "Your request has been processed successfully.");
  },

  /**
   * POST request for subscription form
   * @param event
   */
  async subscribe(event) {
    try {
      /** since no empty data can be sent from frontend and is always email
       * so no validation required, just handle api call here to add to subscription
       **/
      const formData = await event.request.formData();
      const _email = formData.get("email");

      // TOOD: SEND API request to zippybox
      return { message: "You're now subscribed to our newsletter." };
    } catch {
      error(500, { message: "Oops! Something went wrong while trying to subscribe you." });
    }
  }
};
