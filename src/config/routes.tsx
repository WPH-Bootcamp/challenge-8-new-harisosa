import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import App from "../App";
import { MovieDetailPage } from "../pages/MovieDetailPage";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:movieId", element: <MovieDetailPage /> },
    ],
  },
]);
