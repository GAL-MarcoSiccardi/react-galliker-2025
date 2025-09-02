import { Suspense, useEffect, useState } from "react";
import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  NavLink,
  useLoaderData,
  defer,
  Await,
  useSubmit,
} from "react-router-dom";
import ky from "ky";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function AppContent() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}

function Home() {
  const { data, isLoading, error } = useQuery({
    queryFn: () => ky.get("https://swapi.dev/api/people/").json<any>(),
    queryKey: ["characters"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Render Home", data);
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {data?.results.map((character: any) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  console.log("Render About");
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Demo</h1>
      <div className="card">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
