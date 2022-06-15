import React /* { Fragment, useEffect, useState } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category)
    console.log(loading)

  return (
      <>
        <h3>{category}</h3>

        {loading && <p>Loading</p>}
        
        {<div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        title={img.title}
                        url={img.url}
                    />
                ))
            }
        </div>    }
      </>
    
  )
}


// Los custom hook es forma en la que nosotros podemos extraer logica de un componente y reutilizarla