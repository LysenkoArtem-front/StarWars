import axios from "axios";
import { CHARACTERS_URL } from "../../constants/api.constants";
import { CharacterModel } from "../../models/character-model";
import { setDeepCharacterAction, fetchProductsFailureAction } from "../characters/characters.slice";
import { store } from "../store";

export async function fetchDeppCharacter(
  index: number
): Promise<CharacterModel[] | undefined> {
  try {
    const response = await axios.get<CharacterModel[]>(
      `${CHARACTERS_URL}/${index + 1}`
    );
    store.dispatch(setDeepCharacterAction(response.data));
    console.log(response.data);
    return response.data;
  } catch (err) {
    store.dispatch(
      fetchProductsFailureAction(`Something went wrong! Error: ${err}`)
    );
  }
}
