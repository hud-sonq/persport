import { z } from "zod";

export default z.object({
    city: z.string(),
    temperature: z.number(),
    description: z.string(),
})