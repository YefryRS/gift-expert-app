// lo colocamos en una carpeta helpers, la cual contiene funciones que retornan algo

const getGifs = async(category) => {

    // el encodeURI remplazara los espacios que pueda haber
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=8Fe6GqtWEtE05uFELsMu0NwmdV02dnmV`
    const resp = await fetch (url)
    const {data} = await resp.json()

    const gifs = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    })

    //console.log(gifs)
    return gifs;
}

export {getGifs}