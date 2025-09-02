import {Suspense, useEffect, useState} from 'react'
import './App.css'
import {Outlet, RouterProvider, createBrowserRouter, NavLink, useLoaderData, defer, Await, useSubmit} from 'react-router-dom';
import ky from 'ky';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContent/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      }
    ],
  }
]);

function AppContent() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}

function Home() {
  
  console.log('Render Home');
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  console.log('Render About');
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}


function App() {

  return (
    <>
      <h1>Demo</h1>
      <div className="card">
        <RouterProvider router={router}/>
      </div>

    </>
  )
}

export default App
