import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useParams } from "react-router-dom";
import { getCharacter } from "../store/slice/Movies/actions";

const DetailCharacter = () => {
  const character = useAppSelector((state) => state.movie.character);
  const dispatch = useAppDispatch();
  const { character_mal_id } = useParams();

  useEffect(() => {
    dispatch(getCharacter(parseInt(character_mal_id)));
  }, [dispatch]);

  return (
    <div className="flex flex-nowrap gap-5">
      <div className="flex flex-col gap-4">
        <p>{character?.name}</p>
        <p>Otros Nombres:</p>
        <div>
          {character?.nickname?.map((value: string) => (
            <p>{value}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p>Descripción:</p>
          <p>{character?.about}</p>
        </div>
      </div>
      <img alt={character?.name} src={character?.images?.jpg?.image_url} />
    </div>
  )
}

export default DetailCharacter
