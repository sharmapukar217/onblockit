import { z } from "zod";

const EMAIL_REQUIRED_MESSAGE = "Please enter your email addess.";
const EMAIL_INVALID_MESSAGE = "Please enter a valid email address.";

const SUBJECT_REQUIRED_MESSAGE = "Please ente a subject.";

const DESCRIPTION_REQUIRED_MESSAGE = "Please provide a description.";

export const contatFormSchema = z.object({
  email: z
    .string({ required_error: EMAIL_REQUIRED_MESSAGE })
    .email({ message: EMAIL_INVALID_MESSAGE })
    .min(1, EMAIL_REQUIRED_MESSAGE),
  phoneNumber: z.string().optional(),
  subject: z
    .string({ required_error: SUBJECT_REQUIRED_MESSAGE })
    .trim()
    .min(1, SUBJECT_REQUIRED_MESSAGE),
  description: z
    .string({ required_error: DESCRIPTION_REQUIRED_MESSAGE })
    .trim()
    .min(1, DESCRIPTION_REQUIRED_MESSAGE)
});
