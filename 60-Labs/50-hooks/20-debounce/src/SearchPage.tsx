import { useEffect, useState } from "react";
import { StarwarsCharacter } from "./model";
import { CharacterList } from "./CharacterList";
import { searchCharacters } from "./api";

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<StarwarsCharacter[]>([]);

  useEffect(() => {
    async function search() {
      const characters = await searchCharacters(searchTerm);
      setCharacters(characters);
    }
    search();
  }, [searchTerm]);

  function changeSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      Search: <br />
      <input type="text" onChange={changeSearchTerm} />
      <CharacterList characters={characters} />
    </div>
  );
}
