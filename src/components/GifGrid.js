import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems'

export const GifGrid = ({category}) => {

    // const [images,setImages] = useState([])

    // useEffect( () => {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs))
    // },[category]) 

    const {data,loading} = useFetchGifs(category);
    return (
       <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                
                    {
                    data.map( (img) => 
                        
                    <GifGridItems 
                    key={img.id }     
                        {...img}/>
                    
                    )
                    }
                    
            </div>
        </>
    )
}
