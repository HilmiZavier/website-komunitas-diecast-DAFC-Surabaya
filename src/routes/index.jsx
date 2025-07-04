import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/navbar"
import Home from "../pages/home";
import Galleri from "../pages/galeri";
import Tricks from "../pages/tricks";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/galeri",
                element: <Galleri/>
            },
            {
                path: "/Edukasi",
                element: <Tricks/>
            },
            
        ],
    },
]);
export default route;
