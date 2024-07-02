import { FC, useMemo, useState } from "react";
import { CharactersCard } from "../card/characterCard";
import { CharacterModel } from "../../models/character-model";
import { fetchDeppCharacter } from "../../app/services/charactersDepp-api-service";
import { CharachterSearchForm } from "../searchCharacter/searchCharacter-form";
import uuid from "react-uuid";
import { History } from "../history/history";
import { CharacterDeepContainer } from "../card/characterDeep-container";
import styles from "./character-list.module.css";

interface CharacterListProps {
  characters: CharacterModel[];
  deepCharacter: CharacterModel[];
}
export const CharactersList: FC<CharacterListProps> = ({
  characters,
  deepCharacter,
}) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [namesArray, setNamesArray] = useState<string[]>([]);
  const [isDeepCharacter, setDeepCharacter] = useState<boolean>(false);

  const handleClick = useMemo(
    () => (name: string) => {
      setDeepCharacter(true);
      const index = characters.findIndex((el) => el.name === name.trim());
      fetchDeppCharacter(index);
      setSelectedName(name);
      if (!namesArray.includes(name)) setNamesArray([...namesArray, name]);
    },
    [characters, namesArray]
  );
  const handleClose = () => {
    setDeepCharacter(false);
  };
  const transformedData = useMemo(() => {
    const noKeys = [
      "homeworld",
      "films",
      "species",
      "vehicles",
      "starships",
      "created",
      "edited",
      "url",
    ];
    const filteredEntries = Object.entries(deepCharacter).filter(
      ([key]) => !noKeys.includes(key)
    );
    return filteredEntries.map(([key, value]) => ({
      [key]: value,
    }));
  }, [deepCharacter]);

  const handleSubmit = (name: string) => {
    setSelectedName(name);
    handleClick(name);
  };
  return (
    <div>
      {isDeepCharacter ? (
        <CharacterDeepContainer
          onClick={() => handleClose()}
          deepCharacter={transformedData}
        />
      ) : (
        <div className={styles.main}>
          <div className={styles.mainList}>
            <CharachterSearchForm key={uuid()} onSubmit={handleSubmit} />
            {characters.map((el) => (
              <CharactersCard
                key={uuid()}
                {...el}
                onClick={() => handleClick(el.name)}
              />
            ))}
          </div>
          <div className={styles.container}>
            <div className={styles.list}>
              {selectedName &&
                namesArray.map((el) => (
                  <History
                    onClick={() => handleSubmit(el)}
                    key={uuid()}
                    name={el}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
