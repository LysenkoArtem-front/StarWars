import { useSelector } from "react-redux";
import {
  selectCharacters,
  selectError,
  selectDeepCharacter,
} from "./characters/characters.selector";
import { useEffect } from "react";
import { fetchCharacters } from "./services/characters-api.service";

export const useCharacters = () => {
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectError);
  const deepCharacter = useSelector(selectDeepCharacter);

  useEffect(() => {
    fetchCharacters();
  }, []);
  return { characters, error, deepCharacter };
};
