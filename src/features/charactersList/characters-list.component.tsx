import { FC } from "react";
import { CharactersCard } from "../card/characterCard";
import { CharacterModel } from "../../models/character-model";

interface CharacterListProps {
  characters: CharacterModel[];
}
export const CharactersList: FC<CharacterListProps> = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      {characters.map((el) => (
        <CharactersCard key={el.height} {...el} />
      ))}
    </div>
  );
};
