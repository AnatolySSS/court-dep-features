import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { PercentagePage, UploadPage, ErrorPage, DoneByPeriodPage, InWorkPage } from "@/02-pages";

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
        path: "/percentage",
        element: <PercentagePage />,
      },
      {
        path: "/done-by-period",
        element: <DoneByPeriodPage />,
      },
      {
        path: "/in-work",
        element: <InWorkPage />,
      },
      {
        path: "/",
        element: <UploadPage />,
      },
    ],
  },
]);
