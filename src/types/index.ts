import { z } from "zod"
import { CategoriesAPISchema } from "../utilities/recipes-schema"

export type Categories = z.infer<typeof CategoriesAPISchema> 
