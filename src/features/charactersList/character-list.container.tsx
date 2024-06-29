import { useCharacters } from "../../app/hooks";
import { CharactersList } from "./characters-list.component";
export const CharactersListContainer = () => {
  const { characters, error } = useCharacters();
  if (error) return <>{error}</>;
  console.log(characters);

  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  );
};
