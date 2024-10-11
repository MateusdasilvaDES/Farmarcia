import { createBrowserRouter } from "react-router-dom"; 
import Cadastro from "../pages/Cadastro";
import Home_page from "../pages/Home_page";

import Produto from "../pages/Produto";
import Sorteio from "../pages/Sorteio";

const router = createBrowserRouter([
    {path: "/", element: <Home_page/>},
    {path: "/produto", element: <Produto/>},
    {path: "/cadastro", element: <Cadastro/>},
    {path: "/sorteio", element: <Sorteio/>},
    
    
])

export default router;