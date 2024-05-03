import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/bag.jsx";
import HomeLand from "./Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import FrontPage from "./components/frontPage.jsx";
import WishlistContainer from "./components/wishListContainer.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <FrontPage /> },
      { path: "/home", element: <HomeLand /> },
    ],
  },
  {
    path: "/bag",
    element: <Bag />,
  },
  {
    path: "/wishlist",
    element: <WishlistContainer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
