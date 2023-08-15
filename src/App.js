import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/> ,
    children: [
      {
        index : true,
       element: <Dashboard/>},
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }
])

  return (
<div className="App">
    
  <RouterProvider router={router}/>
    </div>
  );
}

export default App;
