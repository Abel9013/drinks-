import { z } from "zod"
import { CategoriesAPISchema, DrinkApiResponse, DrinksApiResponse } from "../utilities/recipes-schema"
import { SearchFilterSchema } from "../utilities/recipes-schema"

export type Categories = z.infer<typeof CategoriesAPISchema> 
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>
export type Drink = z.infer<typeof DrinkApiResponse>