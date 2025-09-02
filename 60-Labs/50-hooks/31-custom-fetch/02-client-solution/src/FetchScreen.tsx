import {useRef, useState} from 'react';
import {CharacterDisplay} from './CharacterDisplay';
import { CircularProgress } from '@mui/material';
import {useStarWarsCharacter} from './useStarWarsCharacter';
import useAxios from 'axios-hooks';

export function FetchScreen() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [characterNumber, setCharacterNumber] = useState<string | null>(null);

  const {characterData: lukeData, loading, error} = useStarWarsCharacter(characterNumber);
  // using axios-hooks:
  // const [{ data: lukeData, loading, error }] = useAxios(`https://swapi.dev/api/people/${characterNumber}`);
  
  function setCharacter() {
    const input = inputRef.current?.value;
    if (input) {
      setCharacterNumber(input);
    }
  }

  return (
    <div>
      <div>Number to fetch:</div>
      <div>
        <input type="text" ref={inputRef}/>
      </div>
      <button onClick={setCharacter}>Fetch!</button>
      {loading && <div style={{padding: 30}}><CircularProgress/></div>}
      {error && <div>Error: {error.message}</div>}
      {lukeData && <CharacterDisplay character={lukeData}/>}
    </div>
  );
}