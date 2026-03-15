import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout.jsx";
import Apps from "./Components/Apps.jsx";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          const res = await axios.get("./appData.json");
          return res.data;
        },
      },
      {
        path: "/apps",
        Component: Apps,
        loader: async () => {
          const res = await axios.get("./appData.json");
          return res.data;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
