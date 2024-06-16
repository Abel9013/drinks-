import { BrowserRouter,Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import Layout from "./layouts/Layout"
import FavouritesPage from "./pages/FavouritesPage"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route path="/" element={<IndexPage />} index /> 
                    {/* Index para indicar que es la pagina principal */}
                <Route path="/favourite" element={<FavouritesPage />} />

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
