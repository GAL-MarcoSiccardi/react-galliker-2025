import {useEffect, useRef, useState} from 'react';
import {StarwarsCharacter} from './model';
import axios from 'axios';
import {CharacterDisplay} from './CharacterDisplay';
import { CircularProgress } from '@mui/material';


function starWarsCharacter(characterNumber: string | null) {

  const [characterData, setCharacterData] = useState<StarwarsCharacter | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {

    async function fetchData() {
      try {
        if (characterNumber) {
          setIsLoading(true);
          setCharacterData(null);
          setError(null);
          // const response = await axios.get<StarwarsCharacter>(`https://swapi.dev/api/people/${characterNumber}`);
          const response = await axios.get<StarwarsCharacter>(`http://localhost:3457/swapi/people/${characterNumber}`);
          setCharacterData(response.data);
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

  }, [characterNumber]);

  return {characterData, isLoading, error};
}

export function FetchScreen() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [characterNumber, setCharacterNumber] = useState<string | null>(null);

  const {characterData, isLoading, error} = starWarsCharacter(characterNumber);
  

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
      {isLoading && <div style={{padding: 30}}><CircularProgress/></div>}
      {error && <div>Error: {error}</div>}
      {characterData && <CharacterDisplay character={characterData}/>}
    </div>
  );
}