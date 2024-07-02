import { FC } from "react";
import { CharactersDeepCard } from "./characterDeepCard";
import uuid from "react-uuid";
import { CharactersCardProps } from "./characterCard";
import styles from "./characterDeep.module.css";

interface CharacterContainerProps {
  deepCharacter: object[];
}
type CharacterDeepContainerProps = Partial<
  CharacterContainerProps & CharactersCardProps
>;

export const CharacterDeepContainer: FC<CharacterDeepContainerProps> = ({
  deepCharacter,
  onClick,
}) => {
  return (
    <div>
      {deepCharacter ? (
        <div className={styles.card}>
          <div>
            {deepCharacter.map((el) => (
              <div className={styles.profile} key={uuid()}>
                <div>{Object.keys(el)}</div>
                <CharactersDeepCard {...el} />
              </div>
            ))}
          </div>
          <button className={styles.button} onClick={onClick}>
            Main page
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
