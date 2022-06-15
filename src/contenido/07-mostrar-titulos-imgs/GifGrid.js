import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([])
    
    useEffect(() => {
        getGifs()
    }, [])
    
    
    const getGifs = async() => {

        const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=8Fe6GqtWEtE05uFELsMu0NwmdV02dnmV"
        const resp = await fetch (url)
        const {data} = await resp.json()

        const gifs = data.map( img => {
            return {
                id:img.id,
                title:img.title,
                url: img.images.downsized_medium.url
            }
        })

        setImages(gifs)
    }


  return (
    <div>
        <h3>{category}</h3>
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
  )
}


