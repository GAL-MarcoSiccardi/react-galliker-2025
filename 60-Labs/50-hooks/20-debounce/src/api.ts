import axios from "axios";
import { SearchResults } from "./model";

export async function searchCharacters(searchTerm: string) {
  const response = await axios.get<SearchResults>(
    `https://swapi.dev/api/people/?search=${searchTerm}`
  );
  return response.data.results;
}
