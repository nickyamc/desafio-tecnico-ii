import React from 'react'
import { Link } from 'react-router-dom'

interface MovieCardProps {
  mal_id: number,
  img: string,
  title: string,
  type: string,
  source: string,
  duration: string,
}

function MovieCard(props: MovieCardProps) {
  return (
    <div className='flex flex-col justify-between items-center px-2 py-4 gap-4 border-2 rounded-lg w-[260px]'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-lg font-semibold'>Titulo: {props.title}</p>
        <p>Tipo: {props.type}</p>
        <p>Fuente: {props.source}</p>
        <p>Duración: {props.duration}</p>
        <img alt={props.title} src={props.img} width={150} />
      </div>
      <div className=''>
        <Link to={`characters/${props.mal_id}`} className='py-1 px-3 bg-blue-500 rounded-md'>Personages</Link>
      </div>
    </div>
  );
}

export default MovieCard;
