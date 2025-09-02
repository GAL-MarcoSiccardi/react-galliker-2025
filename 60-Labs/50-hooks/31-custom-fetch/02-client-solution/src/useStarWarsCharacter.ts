import {useEffect, useState} from 'react';
import {StarwarsCharacter} from './model';
import axios from 'axios';

export function useStarWarsCharacter(characterNumber: string | null){
  const [characterData, setCharacterData] = useState<StarwarsCharacter | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {

    async function fetchData() {
      try {
        if (characterNumber) {
          setLoading(true);
          setCharacterData(null);
          setError(null);
          const response = await axios.get<StarwarsCharacter>(`http://localhost:3456/swapi/people/${characterNumber}`);
          setCharacterData(response.data);
        }
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [characterNumber]);
  
  return {characterData, loading, error};
}


function useUsers(){

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadData(){
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const resJson = await res.json();
        if (!cancelled) setData(resJson);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadData();
    return () => { cancelled = true }
  }, [])

  return {loading, data, error};
}