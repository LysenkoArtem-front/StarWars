import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterStateModel } from "../../state/characters-state.model";
import { CharacterModel } from "../../models/character-model";

const initialState: CharacterStateModel = {
  characters: [],
  error: "",
};
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharactersAction: (state, action: PayloadAction<CharacterModel[]>) => {
      state.characters = action.payload;
      state.error = "";
    },
    fetchProductsFailureAction: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});
export const { setCharactersAction, fetchProductsFailureAction } =
  charactersSlice.actions;
export default charactersSlice.reducer;
