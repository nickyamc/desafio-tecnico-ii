import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useParams } from "react-router-dom";
import { getCharacters } from "../../store/slice/Movies/actions";
import CharacterCard from "../Cards/CharacterCard";

const ListCharacters: React.FC = () => {
  const characters = useAppSelector((state) => state.movie.characterList);
  const dispatch = useAppDispatch();
  const { mal_id } = useParams();

  useEffect(() => {
    dispatch(getCharacters(parseInt(mal_id)));
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-3">
      {characters?.map((value) => (
        <CharacterCard
          mal_id={value.character.mal_id}
          img={value.character.images.jpg.image_url}
          name={value.character.name}
          role={value.role}
        />
      ))}
    </div>
  );
};

export default ListCharacters;
