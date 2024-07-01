import { FC } from "react";
interface SearchInputProps {
  onChange: (e: string) => void;
}
export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  return <input onChange={(e) => onChange(e.target.value)} />;
};
