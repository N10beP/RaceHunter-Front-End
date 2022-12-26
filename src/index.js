import React from "react";
import {
    createBrowserRouter, 
    RouterProvider, 
} from "react-router-dom"
import ErrorPage from "./Marathon's_Page/error-page";
import ReactDOM from "react-dom/client";
import App from "./Marathon's_Page/App";
import Contact from "./Contact"; 
import Mars from "./Marathon's_Page/Mars";

//creating BrowserRouter
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {// να σημειωθεί ότι μια σελίδα για να προστεθεί σε Link πρέπρει πρώτα να προστεθεί εδώ το path της 
      path: "/contact", 
      element: <Contact /> 
    },
    {// να σημειωθεί ότι μια σελίδα για να προστεθεί σε Link πρέπρει πρώτα να προστεθεί εδώ το path της 
      path: "/src/Marathon's_Page/Mars", 
      element: <Mars /> 
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
  