import axios from "axios";
import { CHARACTERS_URL } from "../../constants/api.constants";
import {
  fetchProductsFailureAction,
  setCharactersAction,
} from "../characters/characters.slice";
import { store } from "../store";
import { CharactersModel } from "../../models/characters-model";

export async function fetchCharacters(): Promise<CharactersModel | undefined> {
  try {
    const response = await axios.get<CharactersModel>(CHARACTERS_URL);
    store.dispatch(setCharactersAction(response.data.results));
    return response.data;
  } catch (error) {
    store.dispatch(
      fetchProductsFailureAction(`Something went wrong! Error: ${error}`)
    );
  }
}
