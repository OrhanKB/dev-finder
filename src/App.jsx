import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from "./pages/Home/Home"
import { homepageLoader } from './pages/Home/homeLoader.js';
import { trendsLoader } from './pages/Trends/trendsLoader.js';
import Saved from "./pages/Saved"
import Trends from './pages/Trends/Trends.jsx';
import DetailPage from './pages/DetailsPage/DetailPage.jsx';
import { SearchIdProvider } from './contexts/context.jsx';


  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />} >,
    <Route index element={<Home />} loader={homepageLoader}/>,
    <Route path="/trends" element={<Trends />} loader={trendsLoader} />,
    <Route path="/saved" element={<Saved />} />
    <Route path='/developer/:username' element={<DetailPage />}/>
    <Route path='/repository/:name' element={<DetailPage />} />
    </Route>
    </>
  )
);

function App() {

  return(
      <>
      <SearchIdProvider>
      <RouterProvider router={router}/>
      </SearchIdProvider>
      </>
  );
  }

export default App
