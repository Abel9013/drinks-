import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logo" />
                </div>
                <nav className="flex gap-4">
                    <NavLink
                         to={"/"} 
                         className="font-bold text-white uppercase">Inicio
                    </NavLink> 
                    <NavLink 
                         to={"/favourite"} 
                         className="font-bold text-white uppercase">Favoritos
                    </NavLink> 
                </nav>
            </div>
        </div>
    </header>
  )
}
