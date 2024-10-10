import { createBrowserRouter } from "react-router-dom"; 
import Cadastro from "../pages/Cadastro";
import Home_page from "../pages/Home_page";
import Produto from "../pages/Produto";

const router = createBrowserRouter([
    {path: "/", element: <Home_page/>},
    {path: "/produto", element: <Produto/>},
    {path: "/cadastro", element: <Cadastro/>}
])

export default router;