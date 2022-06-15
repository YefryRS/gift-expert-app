import React, { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([])
    
    // simplemente mandamos a llamar esa funcion
    // Lo hicimos con el fin de que este componente quedara mucho mas corto.
    useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [category])


  return (
      <Fragment>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        title={img.title}
                        url={img.url}
                    />
                ))
            }
        </div>    
      </Fragment>
    
  )
}


