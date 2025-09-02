import {useEffect, useState} from 'react';
import {LevelOne} from './LevelOne';
import {LevelThree} from './LevelThree';

export function ContextPage() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div style={{background: '#fff5cc', padding: 50}}>
      <h3 style={{margin: 0}}>Page</h3>
      <div>(state is here)</div>

      <LevelOne>
        <LevelThree date={date} />
      </LevelOne>
    </div>
  );
}