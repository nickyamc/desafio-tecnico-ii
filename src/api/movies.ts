import axios from "./axios";

const apiGetMovies = async () => {
  const response = await axios.get("/anime?q=one%20piece&type=Movie");
  return response.data.data;
};

const apiGetCharacters = async (mal_id: number) => {
  const response = await axios.get(`/anime/${mal_id}/characters`);
  return response.data.data;
};

const apiGetCharacter = async (character_mal_id: number) => {
  const response = await axios.get(`/characters/${character_mal_id}/full`);
  return response.data;
};

export {
    apiGetMovies,
    apiGetCharacters,
    apiGetCharacter
}