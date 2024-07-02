import { FC, memo } from "react";
import { CharactersProps } from "./characterCard";
import styles from "./characterDeep.module.css";

export const CharactersDeepCard: FC<CharactersProps> = memo(
  ({
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
      <div>
        <h1 className={styles.name}> {name}</h1>
        <dl className={styles.details}>
          <dt>{height}</dt>
          <dt>{mass}</dt>
          <dt>{hair_color}</dt>
          <dt>{skin_color}</dt>
          <dt>{eye_color}</dt>
          <dt>{birth_year}</dt>
          <dt>{gender}</dt>
        </dl>
      </div>
    );
  }
);
