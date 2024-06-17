import { create } from "zustand";
import { RecipeSliceType, createRecipesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware" 
export const useAppStore = create<RecipeSliceType>()(devtools((...a)=>({
// export const useAppStore = create((set)=>({
    // Set como en los useState, me permite aca tambien en zustand escribir en el state, al poner(...a) tomo una copia de todos los argumentos todas las funciones de get, set, etc 
    ...createRecipesSlice(...a)
})) )