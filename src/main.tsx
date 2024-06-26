import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./styles/global.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root.tsx";
import "./styles/default.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
