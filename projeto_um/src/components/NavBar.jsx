import React from 'react'

function NavBar() {
  return (
    <div className = 'navBar'>
       <div className = 'imagem'>
         <img src ="logo.png" alt="" /> 
         </div> 
         <label>Inicio</label>
        <label>Produtos</label> 
       <label htmlFor="">Contato</label>
      <label htmlFor="">Entrar</label>
    </div>
  )
}

export default NavBar
