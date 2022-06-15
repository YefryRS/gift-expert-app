import React /* { Fragment, useEffect, useState } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem' */

export const GifGrid = ({category}) => {
    
    //const [images, setImages] = useState([])
    
    // simplemente mandamos a llamar esa funcion
/*     useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [category]) */

    const {loading} = useFetchGifs()
    console.log(loading)

  return (
      <>
        <h3>{category}</h3>
        {loading ? "Cargando..." : "Data cargada"}
        {/* <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        title={img.title}
                        url={img.url}
                    />
                ))
            }
        </div>     */}
      </>
    
  )
}


// Los custom hook es forma en la que nosotros podemos extraer logica de un componente y reutilizarla