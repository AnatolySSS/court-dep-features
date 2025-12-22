import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { StatsPage, UploadPage, ErrorPage } from "@/02-pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/stats",
        element: <StatsPage />,
      },
      // Можно добавить другие страницы здесь
    ],
  },
]);
