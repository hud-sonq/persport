import { z } from "zod";

export default z.object({
    name: z.string().max(50),
    company: z.string().max(50).optional(),
    contact: z.string().max(50),
    message: z.string().max(1000),
})