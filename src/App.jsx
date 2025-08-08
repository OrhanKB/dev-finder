import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from "./pages/Home/Home"
import { homepageLoader } from './pages/Home/homeLoader.js';
import { trendsLoader } from './pages/Trends/trendsLoader.js';
import Saved from "./pages/Saved"
import Trends from './pages/Trends/Trends.jsx';

console.log('GITHUB TOKEN:', import.meta.env.VITE_GITHUB_TOKEN);


  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />} >,
    <Route index element={<Home />} loader={homepageLoader}/>,
    <Route path="/trends" element={<Trends />} loader={trendsLoader} />,
    <Route path="/saved" element={<Saved />} />
    </Route>
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
