export interface StarwarsCharacter {
  url: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

export interface SearchResults {
  count: number;
  next: string;
  previous: string;
  results: StarwarsCharacter[];
}
