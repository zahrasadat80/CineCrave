import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Movies, Tv, People } from "./pages";
import Navigation from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet /> {/* Renders the matched child route */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />, // Use Layout as the base route
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "/people",
        element: <People />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
