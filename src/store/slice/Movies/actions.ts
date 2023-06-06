import { setMovies, setCharacters, setCharacter } from ".";
import { AppDispatch } from "../..";
import {
  apiGetMovies,
  apiGetCharacters,
  apiGetCharacter,
} from "../../../api/movies";

export const getMovies = () => async (dispatch: AppDispatch) => {
  const data = await apiGetMovies();
  dispatch(setMovies(data));
};

export const getCharacters =
  (mal_id: number) => async (dispatch: AppDispatch) => {
    const data = await apiGetCharacters(mal_id);
    dispatch(setCharacters(data));
  };

export const getCharacter =
  (character_mal_id: number) => async (dispatch: AppDispatch) => {
    const data = await apiGetCharacter(character_mal_id);
    dispatch(setCharacter(data));
  };
