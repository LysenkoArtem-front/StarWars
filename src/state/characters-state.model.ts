import { CharacterModel } from "../models/character-model";

export interface CharacterStateModel {
  characters: CharacterModel[];
  error: string;
  deepCharacter: CharacterModel[];
}
