import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import User from "@/pages/Users";
import RouteWrapper from "./route-wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteWrapper titlePage="" placeHolderFilter="" element={<Login />} />
    ),
  },
  {
    path: "/users",
    element: (
      <RouteWrapper
        titlePage="Gerenciar usuários"
        placeHolderFilter="Buscar por usuário"
        element={<User />}
      />
    ),
  },
]);
