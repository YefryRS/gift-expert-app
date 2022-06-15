import React, { useEffect, useState } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0)

    // con este useEffect evitamos que cada ves que suceda un evento el getGifs vuelva a dispararse. Pues el useEffect solo se dispara una sola vez
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

        console.log(gifs)
    }

  return (
    <div>
        <h3>{category}</h3>
        {/* Esta informacion de abajo es solo para probar el useEffect */}
        <h3>{count}</h3>
        <button onClick={() => {setCount(count + 1)}}></button>
    </div>
  )
}


