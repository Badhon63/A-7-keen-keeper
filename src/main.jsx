import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TimelineProvider } from "./context/TimelineContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </TimelineProvider>
  </React.StrictMode>
);