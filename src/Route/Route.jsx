import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";




const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        }
    ]
    
  },
]);
export default Route;