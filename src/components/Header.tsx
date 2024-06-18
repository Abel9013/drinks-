import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useStoreApp"

export default function Header() {
    const [searchFilter, setSearchFilter] = useState({
        ingredient:"",
        category:""
    })
    const {pathname} = useLocation()
    const isHome = useMemo(()=>pathname==="/",[pathname])
    const fetchCategories = useAppStore((state)=>state.fetchCategories)
    const searchRecipes = useAppStore((state)=>state.searchRecipes)
    const categories = useAppStore((state)=>state.categories)
    const {drinks} = categories
    
    
    useEffect(()=>{
        fetchCategories()
    },[])    

    const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
        setSearchFilter({
            ...searchFilter,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(searchFilter).includes("")){
            console.log("All fields are mandatory");
            return
        }
        // Validar Recetas
        searchRecipes(searchFilter)
    }
  return (
    <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logo" />
                </div>
                <nav className="flex gap-4">
                    <NavLink
                         to={"/"}
                         className={({isActive})=>
                         isActive ? "font-bold text-orange-500 uppercase" :"font-bold text-white uppercase"   
                        } 
                        //  className="font-bold text-white uppercase"
                    >Inicio
                    </NavLink> 
                    <NavLink 
                         to={"/favourite"} 
                         className={({isActive})=>
                            isActive ? "font-bold text-orange-500 uppercase" :"font-bold text-white uppercase"   
                         } 
                    >Favoritos
                    </NavLink> 
                </nav>
            </div>
            {isHome && (
                <form 
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-g shadow space-y-6"
                    onSubmit={handleSubmit}
                >
                    {/* space-y-6 le agrega a cada uno de los hijos del formulario el espacio en y */}
                    <div className="space-y-4">
                        <label htmlFor="ingredient"
                         className="block text-white uppercase font-extrabold text-lg"
                        >Name or Ingredient</label>
                        <input type="text"
                               id="ingredient"
                               name="ingredient"
                               className="p-3 w-full rounded-lg focus:outline-none"
                               placeholder="Name or Ingredient: vodka, tequila, coffee"
                               onChange={handleChange}
                               value={searchFilter.ingredient}
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="category"
                         className="block text-white uppercase font-extrabold text-lg"
                        >category</label>
                        <select
                               id="category"
                               name="category"
                               className="p-3 w-full rounded-lg focus:outline-none"
                               onChange={handleChange}
                               value={searchFilter.category}
                               
                        >
                            <option value="">--Choose--</option>
                            {drinks.map(category=>(
                                            <option value={category.strCategory} key={category.strCategory}>
                                                {category.strCategory}
                                            </option>
                                        ))
                            }
                        </select>
                    </div>
                    <input type="submit" value={"Recipe Search"}
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white 
                        font-extrabold w-full p-2 rounded-lg uppercase"
                        
                    />
                </form>
            )}
        </div>
    </header>
  )
}
