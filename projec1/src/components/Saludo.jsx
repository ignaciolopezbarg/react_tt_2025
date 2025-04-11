import React from 'react';

function Saludo() {
  const nombre = prompt(`Ingrese su nombre`)
  alert(`Bienvenido ${nombre}`)
    return( 
        
    <div className="bg-blue-800 text-white p-4 text-3xl">
    Hola desde Saludo!
  </div>
  
    )
}

export default Saludo;
