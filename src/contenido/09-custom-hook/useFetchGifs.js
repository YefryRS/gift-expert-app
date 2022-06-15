// por estandar se recomienda que el hook empieze con "use".
// Recuerda que los hooks son solo funciones

import { useState } from "react"


// este custom hook simplemente es una logica el cual nos manda un mensaje de cargando o data cargada dependiendo del estado, eso es lo que hace.

// Los custom hook funcionan como un componente, pero sin ser un componente
export const useFetchGifs = () => {
    const [state, setState] = useState({
        data:[],
        loading:true
    })

    setTimeout(() => {
        setState({
            data:[1,2,3,4,5,6],
            loading:false
        })
    }, 3000);

    return state; //{data:[], loading:true}
}