import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState("")

  // este es para poder acceder al valor del input
  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }

  
  //Este es para que se actualize el valor del input
  const handleSubmit = (e) => {
    // con esto evitamos que la pagina se refresque cuando le demos enter
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(items => [...items, inputValue])
      setinputValue("") //esto lo colocamos para que despues de darle enter, por defecto el valor del input quede en blanco
    }
  }

  return (
    // este es un evento que usamos para el momento en que la damos enter a algo               
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange}
      />
      
    </form>
  )
}

AddCategory.propTypes   = {
  setCategories: PropTypes.func.isRequired
}

export {AddCategory}