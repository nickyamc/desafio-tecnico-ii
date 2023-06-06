import React from 'react'
import { Link } from 'react-router-dom'

interface CharacterCardProps {
  mal_id: number,
  img: string,
  name: string,
  role: string,
}

function CharacterCard(props: CharacterCardProps) {
  return (
    <div className='flex flex-col justify-between items-center px-2 py-4 gap-4 border-2 rounded-lg w-[260px]'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-lg font-semibold'>Nombre: {props.name}</p>
        <p>Rol: {props.role}</p>
        <img alt={props.name} src={props.img} width={150} />
      </div>
      <div className=''>
        <Link to={`/characters/${props.mal_id}/full`} className='py-1 px-3 bg-blue-500 rounded-md'>Detalles</Link>
      </div>
    </div>
  );
}

export default CharacterCard;
