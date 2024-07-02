import { useCharacters } from "../../app/hooks";
import { CharactersList } from "./characters-list.component";
import styles from "./error.module.css";
export const CharactersListContainer = () => {
  const { characters, error, deepCharacter } = useCharacters();
  if (error) return <div className={styles.errorMessage}>{error}</div>;
  return (
    <div>
      <CharactersList deepCharacter={deepCharacter} characters={characters} />
    </div>
  );
};
