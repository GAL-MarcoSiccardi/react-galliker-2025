import {Suspense, useState} from 'react'
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
        loader: async () => {
          return ky('https://swapi.dev/api/people/').json<any>();
      },
        action: async (data: any) => {
          console.log('Action', data);
          return null;
        }
      },
      {
        path: '/about',
        element: <About/>,
        loader: async () => {
          const promise = ky('https://swapi.dev/api/starships/').json<any>();
          return defer({
            vehicles: promise
          });
        }
      },
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
  const data = useLoaderData();
  const submit = useSubmit();
  console.log('Render Home', data);

  function triggerAction() {
    let formData = new FormData();
    formData.append("cheese", "gouda");
    submit(formData, {method: 'POST'})
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={triggerAction}>Submit</button>
      <ul>
        {data?.results.map((item: any) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

function About() {
  const data = useLoaderData();
  console.log('Render About', data);
  return (
    <div>
      <h2>About</h2>
      <Await
        resolve={data.vehicles}
        errorElement={
          <p>Error loading package location!</p>
        }
      >
        {(data) => {
          console.log('Render Home Vehicles', data)
          return (
            <ul>
              {data?.results.map((item: any) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          );
        }}
      </Await>
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
