import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(2, "Content must be at least of 2 characters")
    .max(300, "Content must be no longer then 300 characters"),
});
