import { Fragment, useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One punch"])

    return ( 
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
            {/*Aqui decidimos crear un componente para que muestre las imagenes*/}
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