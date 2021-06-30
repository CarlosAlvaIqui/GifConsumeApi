import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({SetCategorias}) => {
    
    const [inputValue, SetinputValue] = useState('')
    
    const handleInputChange = (e) => {
        console.log(e.target.value)

        SetinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submit hecho')
       if(inputValue.trim().length > 2){
        SetCategorias(cats => [inputValue, ...cats])
        SetinputValue('')
       }
    }
    return (
       <form onSubmit={handleSubmit}>
        <h2>{inputValue}</h2>
        <input type="text"
            value={inputValue}
            onChange={ handleInputChange}
        />
       </form>
    )
}


AddCategory.propTypes = {
    SetCategorias: PropTypes.func.isRequired
}
