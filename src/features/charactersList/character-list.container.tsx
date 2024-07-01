import { useCharacters } from "../../app/hooks";
import { CharactersList } from "./characters-list.component";
export const CharactersListContainer = () => {
  const { characters, error, deepCharacter } = useCharacters();
  if (error) return <>{error}</>;
  return (
    <div>
      <CharactersList deepCharacter={deepCharacter} characters={characters} />
    </div>
  );
};
