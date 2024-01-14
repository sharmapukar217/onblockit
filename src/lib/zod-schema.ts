import { z } from "zod";

const NAME_REQUIRED_MESSAGE = "Please enter your full name.";

const EMAIL_REQUIRED_MESSAGE = "Please enter your email addess.";
const EMAIL_INVALID_MESSAGE = "Please enter a valid email address.";

const SUBJECT_REQUIRED_MESSAGE = "Please ente a subject.";

const MESSAGE_REQUIRED_MESSAGE = "Please provide a message.";

export const contatFormSchema = z.object({
  fullName: z
    .string({
      required_error: NAME_REQUIRED_MESSAGE
    })
    .min(1, NAME_REQUIRED_MESSAGE),
  email: z
    .string({ required_error: EMAIL_REQUIRED_MESSAGE })
    .email({ message: EMAIL_INVALID_MESSAGE })
    .min(1, EMAIL_REQUIRED_MESSAGE),
  phone: z.string().optional(),
  subject: z
    .string({ required_error: SUBJECT_REQUIRED_MESSAGE })
    .trim()
    .min(1, SUBJECT_REQUIRED_MESSAGE),
  message: z
    .string({ required_error: MESSAGE_REQUIRED_MESSAGE })
    .trim()
    .min(1, MESSAGE_REQUIRED_MESSAGE)
});
