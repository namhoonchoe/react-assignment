import { createBrowserRouter } from "react-router-dom";
import Accomodation from "../Pages/Accomodation";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Matzip from "../Pages/Matzip";
import Place from "../Pages/Place";
import Root from "./Root";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          { path: "", element: <Place /> },
          { path: "foods", element: <Matzip /> },
          { path: "accomodation", element: <Accomodation /> },
        ],
      },
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
]);

export default RootRouter;
