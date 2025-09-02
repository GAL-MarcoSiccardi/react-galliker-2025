import { useRef, useState } from "react";
import { StarwarsCharacter } from "./model";
import { CharacterList } from "./CharacterList";
import { searchCharacters } from "./api";
import { useDebounce } from "react-use";

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<StarwarsCharacter[]>([]);
  const [error, setError] = useState<string | null>(null);
  const previousSearchTerm = useRef("");

  useDebounce(
    async () => {
      try {
        if (searchTerm !== previousSearchTerm.current) {
          const characters = await searchCharacters(searchTerm);
          setCharacters(characters);
          previousSearchTerm.current = searchTerm;
        }
      } catch (e: any) {
        setError(e.message);
      }
    },
    300,
    [searchTerm]
  );

  function changeSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      Search: <br />
      <input type="text" onChange={changeSearchTerm} value={searchTerm} />
      {error === null ? (
        <CharacterList characters={characters} />
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
}
