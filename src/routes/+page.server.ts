import { fail } from "@sveltejs/kit";
import { contatFormSchema } from "$lib/zod-schema.js";
import { superValidate, setMessage } from "sveltekit-superforms/server";

export const actions = {
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
  }
};
