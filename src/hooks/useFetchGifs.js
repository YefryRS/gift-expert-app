// por estandar se recomienda que el hook empieze con "use".
// Recuerda que los hooks son solo funciones

import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

// este custom hook simplemente es una logica el cual nos manda un mensaje de cargando o data cargada dependiendo del estado, eso es lo que hace.

// Los custom hook funcionan como un componente, pero sin ser un componente
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setTimeout(() => {

                    setState({
                        data:imgs,
                        loading:false  
                    })

                });
            })

    }, [])



    return state; //{data:[], loading:true}
}