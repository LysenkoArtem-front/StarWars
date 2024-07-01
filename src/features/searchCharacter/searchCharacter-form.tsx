import { FC, FormEvent, memo, useCallback, useState } from "react";
import { SearchInput } from "./searchCharacter-input";
type CharacterSearchFormProps = {
  onSubmit: (name: string) => void;
};

export const CharachterSearchForm: FC<CharacterSearchFormProps> = memo(
  ({ onSubmit }) => {
    const [value, setValue] = useState<string>("");
    const handleSubmit = useCallback(
      (e: FormEvent) => {
        e.preventDefault();
        if (value.length > 0) {
          onSubmit(value);
        }

        setValue("");
      },
      [onSubmit, value]
    );
    return (
      <form onSubmit={handleSubmit}>
        <SearchInput onChange={setValue} />
        <button type="submit">Search</button>
      </form>
    );
  }
);
