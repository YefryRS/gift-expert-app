import React, { Fragment, useState } from 'react'

// este componente lo creamos para que las personas puedan escribir algo y se añada a la lista que ya tenemos

const AddCategory = () => {

  const [inputValue, setinputValue] = useState("")

  const handleInputChange = (e) => {
    // Aqui estoy accediendo al valor del input
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // con esto evitamos que la pagina se refresque cuando le demos enter
    e.preventDefault()
  }

  return (              
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange} // este es un evento que usamos para el momento en que la damos enter el valor del input se modifique 
      />  
    </form>
  )
}

export {AddCategory}