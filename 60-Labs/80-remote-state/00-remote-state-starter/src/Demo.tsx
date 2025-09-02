import { useEffect, useState } from "react";
import ky from "ky";
import type {SwapiPerson} from './SwapiPerson.tsx';

export function Demo() {
  const [person, setPerson] = useState<SwapiPerson>();

  useEffect(() => {
    async function fetchData() {
      const luke = await ky
        .get(`https://swapi.info/api/people/1`)
        .json<SwapiPerson>();
      console.log("luke: ", luke);
      setPerson(luke);
    }
    fetchData();
  }, []);

  console.log("Render Demo");
  return (
    <div>
      <h2>Demo</h2>
      {person && (
        <div>
          <h3>{person.name}</h3>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
        </div>
      )}
    </div>
  );
}

/* DEMO

Introduce counter / use as effect dependency

----

Custom Hook:

function useSwapiCharacter(id: number) {
  const [person, setPerson] = useState<SwapiPerson>();

  useEffect(() => {
    async function fetchData() {
      const luke = await ky
        .get(`https://swapi.info/api/people/${id}`)
        .json<SwapiPerson>();
      console.log("luke: ", luke);
      setPerson(luke);
    }
    fetchData();
  }, [id]);

  return person;
}

----
----

 npm i @tanstack/react-query
 
 const queryClient = new QueryClient();
 
 <QueryClientProvider client={queryClient}>
 
 async function fetchData(id: number) {
  const luke = await ky
    .get(`https://swapi.info/api/people/${id}`)
    .json<SwapiPerson>();
  console.log("luke: ", luke);
  return luke;
}
 
 const { data } = useQuery({
  queryKey: ["swapiCharacter", id],
  queryFn: () => fetchData(id),
});

----

npm i nuqs

<NuqsAdapter>
  <App />
    
const [id, setId] = useQueryState("id", parseAsInteger.withDefault(1));


----
----

exract 
async function fetchData() {
  const luke = await ky
    .get("https://swapi.info/api/people/1")
    .json<SwapiPerson>();

  return luke;
}

      {
        path: "",
        element: <Demo />,
        loader: fetchData,
      },


-----


 children: [
      {
        path: "/:id",
        element: <Demo />,
        loader: ({ params }) => fetchData(params.id),
        hydrateFallbackElement: <div>Loading ...</div>,
      },
      
      
---

useQueryState
  
 */
