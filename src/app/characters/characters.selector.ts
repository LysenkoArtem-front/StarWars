import { CharacterStateModel } from "../../state/characters-state.model";
import { RootState } from "../store";

const selectCharactersState: (state: RootState) => CharacterStateModel = (
  state: RootState
) => state.characters;

export const selectCharacters = (state: RootState) =>
  selectCharactersState(state).characters;
export const selectError = (state: RootState) =>
  selectCharactersState(state).error;
export const selectDeepCharacter = (state: RootState) =>
  selectCharactersState(state).deepCharacter;
