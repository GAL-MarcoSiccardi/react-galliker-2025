import { StarwarsCharacter } from "./model";

interface CharacterListProps {
  characters: StarwarsCharacter[];
}

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
}
