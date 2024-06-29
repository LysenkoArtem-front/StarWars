import { useSelector } from "react-redux";
import {
  selectCharacters,
  selectError,
} from "./characters/characters.selector";
import { useEffect } from "react";
import { fetchCharacters } from "./services/characters-api.service";


export const useCharacters = () => {
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectError);
  useEffect(() => {
    fetchCharacters();
  }, []);
  return { characters, error };
};
