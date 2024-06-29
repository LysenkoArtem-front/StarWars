import { FC, memo } from "react";
import { CharacterModel } from "../../models/character-model";

export type CharactersProps = CharacterModel;
const card = {
  display: "flex",
  border: "1px solid red",
  fontWeight: "500",
  justifyContent: "center",
  padding: "50px 0",
  background:
    "center url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png')",
  backgroundSize: "100% 100%",
  color: "white",
  backgroundRepeat: "no-repeat",
};
export const CharactersCard: FC<CharactersProps> = memo(({ name }) => {
  return <div style={card}>{name}</div>;
});
