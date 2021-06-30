
import React,{useState} from 'react';

import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp  = () => {



    const [categorias,SetCategorias] = useState(['goku'])

    const handleadd = () => {
        console.log(categorias)
        SetCategorias([...categorias,'juana la cubana'])
        console.log(categorias)

    }


    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory SetCategorias={SetCategorias}/>
        <hr/>


        <button onClick={handleadd}>Agregar</button>
        <ol>
         {
            categorias.map( (caracter) => (
                <GifGrid key={caracter} category={caracter}/>

            )   
              )
            }
         </ol>
        
        </>
    )

}

