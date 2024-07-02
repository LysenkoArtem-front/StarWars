import { FC, memo } from "react";
import { CharacterModel } from "../../models/character-model";
import styles from "./character.module.css";

export interface CharactersCardProps {
  onClick: () => void;
}
export type CharactersProps = Partial<CharacterModel & CharactersCardProps>;
export const CharactersCard: FC<CharactersProps> = memo(
  ({ onClick, name, image }) => {
    switch (name) {
      case "Luke Skywalker":
        image = "/characters/luk.webp";
        break;
      case "C-3PO":
        image = "/characters/c3po.webp";
        break;
      case "R2-D2":
        image = "/characters/r2d2.webp";
        break;
      case "Darth Vader":
        image = "/characters/dart.webp";
        break;
      case "Leia Organa":
        image = "/characters/leia.webp";
        break;
      case "Owen Lars":
        image = "/characters/owen.webp";
        break;
      case "Beru Whitesun lars":
        image = "/characters/beru.webp";
        break;
      case "R5-D4":
        image = "/characters/r5d4.webp";
        break;
      case "Biggs Darklighter":
        image = "/characters/bigs.webp";
        break;
      case "Obi-Wan Kenobi":
        image = "/characters/obi.webp";
        break;
    }
    return (
      <div>
        <div onClick={onClick} className={styles.card}>
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    );
  }
);
