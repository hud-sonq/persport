import { z } from "zod";

export default z.object({
    city: z.string(),
    description: z.string().optional(),
    owner: z.string().optional(),
})