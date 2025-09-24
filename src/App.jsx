import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from "./pages/Home/Home"
import { homepageLoader } from './pages/Home/homeLoader.js';
import { trendsLoader } from './pages/Trends/trendsLoader.js';
import Trends from './pages/Trends/Trends.jsx';
import DetailPage from './pages/DetailsPage/DetailPage.jsx';
import { SearchIdProvider } from './contexts/context.jsx';
import { useState, useEffect } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />} >
    <Route index element={<Home />} loader={homepageLoader}/>
    <Route path="/trends" element={<Trends />} loader={trendsLoader} />
    <Route path='/developer/:username' element={<DetailPage />}/>
    <Route path='/repository/:name' element={<DetailPage />} />
    </Route>
    </>
  )
);

function AppLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-xl text-gray-700 font-mono">Loading Dev Finder...</p>
        <div className="mt-2 text-sm text-gray-500">Fetching GitHub data...</div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <AppLoader />;

  return (
    <SearchIdProvider>
      <RouterProvider router={router}/>
    </SearchIdProvider>
  );
}

export default App