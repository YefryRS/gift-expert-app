import { Fragment, useState } from "react";


const GifExpertApp = () => {

    // Esto no es funcionar, ya que si deseamos modificar este array, de esta forma no lo vamos a poder hacer, por lo cual sera necesario usar los useState
    //const categories = ["One Puch","Samurai x", "Dragon ball"];
    const [categories, setcategories] = useState(["One Puch","Samurai x", "Dragon ball"])

    // Esta es una forma en la que podemos agregar elementos, ya que recordemos que el setCategories cambia por completo el estado inicial
    const handleAdd = () => {
        setcategories([...categories, 23])

        // Esta es otra manera
        //setcategories(cats => [...cats, 23])
    }


    return ( 
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr/>
            {/* aqui el ciclo for no nos sirve, ya que necesito una expresion que retorne algo, y el ciclo for por defecto no regresa nada, por lo cual debemos de usar los metodos del array */}

            <ol>
               {
                    categories.map(element => {
                       return <li key={element}>{element}</li>
                    })
                }
            </ol>

            <button onClick={handleAdd}>Agregar</button>
        </Fragment>
     );
}
 
export {GifExpertApp};