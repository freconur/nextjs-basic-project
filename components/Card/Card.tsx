import React from 'react'
import Image from 'next/image'

interface Props {
  item?: Kawaii,
  name?: string,
  id?: string,
  marca?: string,
  image?: string,
  price?: string
}
const Card = ({ name, id, marca, image, price }: Props) => {
  console.log(image)
  return (
    <li className='border-4 border-blue-300 rounded-lg bg-blue-200 overflow-hidden'>
      {image && name &&
        <Image src={image} width={300} height={300} alt={name}/>
      }
      <div className='px-2'>
        <h2>{name}</h2>
        <p>{marca}</p>
        <p>S/ {price}</p>
      </div>
    </li>
  )
}

export default Card