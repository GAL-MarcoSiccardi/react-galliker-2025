import {StarwarsCharacter} from './model';

export function CharacterDisplay(props: { character: StarwarsCharacter }) {
  return (
    <div style={{border: '1px solid silver', margin: 20}}>
      <div>Name: {props.character.name}</div>
      <div>Height: {props.character.height}</div>
      <div>Mass: {props.character.mass}</div>
      <div>Hair Color: {props.character.hair_color}</div>
    </div>
  );
}