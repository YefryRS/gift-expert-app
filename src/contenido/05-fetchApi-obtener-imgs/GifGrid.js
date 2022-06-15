import React from 'react'

export const GifGrid = ({category}) => {

    // hacemos el proceso para hacer una funcion asincrona que nos traiga unos gifs
    const getGifs = async() => {

        const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=8Fe6GqtWEtE05uFELsMu0NwmdV02dnmV"
        const resp = await fetch (url)
        const {data} = await resp.json() // el json arrojaba el objeto data, y este contenia un data por eso lo desestructuramos. osea data.data === {data}

        //console.log(data)

        // usamos el metodo map, ya que este nos va a recorrer todo el array, y nos permitira crear datos nuevos
        const gifs = data.map( img => {
            return {
                id:img.id,
                title:img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs)
    }

    getGifs()

  return (
    <div>
        <h3>{category}</h3>
    </div>
  )
}


