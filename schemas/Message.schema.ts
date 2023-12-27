import { z } from "zod";

export default z.object({
    name: z.string().min(2).max(50),
    company: z.string().min(2).max(50),
    contact: z.string().min(2).max(50),
    message: z.string().min(2).max(500),
})