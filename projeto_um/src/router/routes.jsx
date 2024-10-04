import { createBrowserRouter } from "react-router-dom"; 
import Home_page from "../pages/Home_page";
import Produto from "../pages/Produto";

const router = createBrowserRouter([
    {path: "/", element: <Home_page/>},
    {path: "/produto", element: <Produto/>},
])

export default router;