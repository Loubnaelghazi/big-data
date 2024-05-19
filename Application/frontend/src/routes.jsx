import { createBrowserRouter } from "react-router-dom";
import Table from "./components/Table"
import Graph from "./components/graph";
import App from "./App";

const routes = createBrowserRouter([
    {
        path:"/",element:<App/>,
        children:[{
            path:"/graph",element:<Graph/>
        },
        {
            path:"/tab",element:<Table/>
        }
    ]
    },
]) 

export {routes}