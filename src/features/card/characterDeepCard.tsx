import { FC, memo } from "react";
import { CharactersProps } from "./characterCard";
const card = {
  display: "flex",
  color: "black",
  cursor: "pointer",
};

export const CharactersDeepCard: FC<CharactersProps> = memo(
  ({
    onClick,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  }) => {
    return (
      <div style={card} onClick={onClick}>
        {name}
        {height}
        {mass}
        {hair_color}
        {skin_color}
        {eye_color}
        {birth_year}
        {gender}
      </div>
    );
  }
);
