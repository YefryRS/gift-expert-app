import React from 'react'

export const GifGridItem = ({title,url}) => {

  //creamos este componente para mostrar las imagenes
  return (
    <div>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
