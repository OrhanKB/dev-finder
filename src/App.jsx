import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from "./pages/Home"
import Saved from "./pages/Saved"
import Trends from "./pages/Trends"

  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />} />,
    <Route index element={<Home />} />,
    <Route path="/trends" element={<Saved />} />,
    <Route path="/saved" element={<Trends />} />
    </>
  )
);


function App() {

  return(
      <>
      <RouterProvider router={router}/>
      </>
  );
  }

export default App
