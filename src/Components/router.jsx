import { createBrowserRouter } from "react-router-dom";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Root from "./Root";
 
const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
   
    ],
  },
]);


export default RootRouter