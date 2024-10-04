import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   
    <div className = 'navBar'>
     <div className = 'imagem'>
      <img src ="logo.png" alt="" className='Logo_nav'/> 
     </div> 
    <Link to = 'home' >Inicio</Link>
    <Link to = 'produtos'>Produtos</Link> 
    <Link to = '/sorteio'>Sorteio</Link>
    <Link to = '/entrar'>Entrar</Link>

    </div>
   
  )
}

export default Navbar
