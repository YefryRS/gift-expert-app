import { Fragment, useState } from "react";
import { AddCategory } from "./AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

/*     const handleAdd = () => {
        setcategories([...categories, 23])

        esta es otra manera
        //setcategories(cats => [...cats, 23])
    } */

    return ( 
        <Fragment>
            <h2>GifExpertApp</h2>
            {/* Necesitamos conectar el componente AddCategory para poder agregar elementos a la lista */}
            <AddCategory setCategories={setCategories}/> {/* Lo llamamos y le pasamos la propiedad, que para que nos funcione le pasaremos el setcategories, para que cambien los elementos del categories */}
            <hr/>

            <ol>
               {
                    categories.map(element => {
                       return <li key={element}>{element}</li>
                    })
                }
            </ol>

        </Fragment>
     );
}
 
export {GifExpertApp};