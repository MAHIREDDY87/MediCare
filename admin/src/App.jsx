import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import { useUser } from '@clerk/react';
import { Link } from 'react-router-dom';


function RequireAuth({childern}){
  const {isLoaded, isSingedIn} = useUser();

  if(!isLoaded) return null;
  if(!isSingedIn) return (
<div className="min-h-screen font-mono flex items-center justify-center bg-gradient-to-b 
    from-emerald-50 via-green-50 to-emerald-100 px-4">
      <div className="text-center">

        <p className=" text-emerald-800 font-semibold text-lg sm:text-2xl mb-4 animate-fade-in">
          Please Sign In to view this page
        </p>
        <div className="flex justify-center">
          <Link to= '/' className="px-4 py-2 text-sm rounded-full bg-emerald-600 text-white 
          shadow-sm hover:bg-emerald-700 hover:shadow-md transition-all 
          duration-300 ease-in animate-bounce-subtle">
            HOME
          </Link>
        </div>
      </div>
    </div>
  )
  return childern;
}
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
};

export default App;