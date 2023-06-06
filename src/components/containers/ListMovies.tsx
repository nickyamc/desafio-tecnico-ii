import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import MovieCard from "../Cards/MovieCard";

const ListMovies: React.FC = () => {
  const movies = useAppSelector((state) => state.movie.movieList);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap gap-3">
      {movies?.map((movie) => (
        <MovieCard
          mal_id={movie.mal_id}
          img={movie.images.jpg.image_url}
          title={movie.title}
          type={movie.type}
          source={movie.source}
          duration={movie.duration}
        />
      ))}
    </div>
  );
};

export default ListMovies;
