import axios from "axios";
import { CHARACTERS_URL } from "../../constants/api.constants";
import {
  fetchProductsFailureAction,
  setCharactersAction,
} from "../characters/characters.slice";
import { store } from "../store";
import { CharacterModel } from "../../models/character-model";
import { CharactersModel } from "../../models/characters-model";

export async function fetchCharacters(): Promise<CharactersModel | undefined> {
  try {
    const response = await axios.get<CharactersModel>(CHARACTERS_URL);
    store.dispatch(setCharactersAction(response.data.results));
    console.log(response.data);
    return response.data;
  } catch (error) {
    store.dispatch(
      fetchProductsFailureAction(`Something went wrong! Error: ${error}`)
    );
  }
}
