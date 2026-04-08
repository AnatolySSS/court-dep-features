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
        path: "/doneByPeriod",
        element: <DoneByPeriodPage />,
      },
      {
        path: "/inWork",
        element: <InWorkPage />,
      },
      {
        path: "/",
        element: <UploadPage />,
      },
    ],
  },
]);
