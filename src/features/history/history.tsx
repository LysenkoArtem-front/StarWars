import { FC } from "react";
import { CharactersProps } from "../card/characterCard";

export const History: FC<CharactersProps> = ({ onClick, name }) => {
  return <li onClick={onClick}>{name}</li>;
};
