import React from 'react'

function NavBar() {
  return (
    <div className = 'navBar'>
       <div className = 'imagem'>
         <img src ="logo.png" alt="" /> 
         </div> 
         <button className='button_nav' onClick = {''}>Inicio</button>
        <button className='button_nav' onClick = {''}>Produtos</button> 
       <button className='button_nav'onClick = {''} >Sorteio</button>
      <button className='button_nav' onClick = {''}>Entrar</button>
    </div>
  )
}

export default NavBar
