import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
    path: "/projects",
    element: <ProjectPage/>,
  },


  {
    path: "/projects/:id",
    element: <ProjectDetail/>,
  },
  ],
    {
      basename: "/My-Portfolio-Website",
    }
)

  return (
    <RouterProvider router={router}/>
  )

}
export default App;
