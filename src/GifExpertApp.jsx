import { Fragment, useState } from "react";
import { AddCategory, GifGrid } from "./components"; // por defecto leera el archivo index, por lo cual todos los componentes que necesitemos exportar, podemos colocarlos en un archivo index


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One punch"])

    return ( 
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
               {
                    categories.map(category => 
                       <GifGrid
                            key={category} 
                            category={category}
                        />
                    )
                }
            </ol>

        </Fragment>
     );
}
 
export {GifExpertApp};

//npm run build => usamos este comando para crear una carpeta que contenga los archivos para subir a produccion