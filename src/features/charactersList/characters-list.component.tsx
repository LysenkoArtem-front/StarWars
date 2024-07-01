import { FC, useMemo, useState } from "react";
import { CharactersCard } from "../card/characterCard";
import { CharacterModel } from "../../models/character-model";
import { CharactersDeepCard } from "../card/characterDeepCard";
import { fetchDeppCharacter } from "../../app/services/charactersDepp-api-service";
import { CharachterSearchForm } from "../searchCharacter/searchCharacter-form";
import uuid from "react-uuid";

const deepCard = {
  display: "flex",
  gap: "20px",
};
const mainList = {
  display: "flex",
  gap: "20px",
};
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
      if (!namesArray.includes(name.trim())) {
        setNamesArray([...namesArray, name]);
      }
    },
    [characters, namesArray]
  );
  const handleClose = () => {
    setDeepCharacter(false);
  };
  const transformedData = useMemo(
    () =>
      Object.entries(deepCharacter).map(([key, value]) => ({
        [key]: value,
      })),
    [deepCharacter]
  );
  const handleSubmit = (name: string) => {
    setSelectedName(name);
    handleClick(name);
  };
  return (
    <div>
      {isDeepCharacter ? (
        transformedData.map((el) => (
          <div style={deepCard}>
            {" "}
            <div>{Object.keys(el)}:</div>
            <CharactersDeepCard
              key={uuid()}
              onClick={() => handleClose()}
              {...el}
            />
          </div>
        ))
      ) : (
        <div style={mainList}>
          <CharachterSearchForm key={uuid()} onSubmit={handleSubmit} />
          {characters.map((el) => (
            <CharactersCard
              key={uuid()}
              {...el}
              onClick={() => handleClick(el.name)}
            />
          ))}
          {selectedName && <p>{namesArray}</p>}
        </div>
      )}
    </div>
  );
};
