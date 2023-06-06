import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../index";

interface movieState {
  movieList: any[];
  characterList: any[];
  character: any;
}

const initialState: movieState = {
  movieList: [],
  characterList: [],
  character: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<any[]>) => {
      state.movieList = action.payload;
    },
    setCharacters: (state, action: PayloadAction<any[]>) => {
        state.characterList = action.payload;
    },
    setCharacter: (state, action: PayloadAction<any[]>) => {
        state.character = action.payload;
    },
  },
});

export const { setMovies, setCharacters, setCharacter } = movieSlice.actions;

export const selectMovieList = (state: RootState) => state.movie.movieList;
export const selectCharacterList = (state: RootState) => state.movie.characterList;
export const selectCharacter = (state: RootState) => state.movie.character;

export default movieSlice.reducer;
