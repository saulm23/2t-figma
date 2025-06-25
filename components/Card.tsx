import React from 'react'
import AddButton from './AddButton'
interface Props {

    name:string;
    descripcion:string;
    precio:string;
}
const Card = ({name,descripcion,precio}:Props) => {
  return (
    <div>
        <div>
            <h2>{name}</h2>
            <h3>{descripcion}</h3>
            <h3>{precio}</h3>

        </div>
        <AddButton/>
    </div>
  )
}

export default Card