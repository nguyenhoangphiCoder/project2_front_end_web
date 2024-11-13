import PageHome from "@/pages";
import LoginPage from "@/pages/auth/login";
import CategoriesPage from "@/pages/dashboard/categories";
import FranchisesPage from "@/pages/dashboard/franchieses";
import OrdersPage from "@/pages/dashboard/orders";
import ProductsPage from "@/pages/dashboard/products";
import UsersPage from "@/pages/dashboard/users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    children: [
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/franchises",
        element: <FranchisesPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
