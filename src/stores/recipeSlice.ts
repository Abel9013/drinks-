import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeServices"
import type { Categories, Drink, Drinks, SearchFilter } from "../types"


export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink["idDrink"]) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set)=>({
    categories:{
        drinks:[]   
    },
    drinks:{
        drinks:[]
    },
    fetchCategories: async () => {
        const categories= await getCategories()
        set({
            categories
        })
        
    },   
    searchRecipes: async (filter) => {
        const drinks = await getRecipes(filter);
        set(
            {drinks}
        )
        
    },
    selectRecipe: async (id) => {
        await getRecipesById(id)
                
    }
})