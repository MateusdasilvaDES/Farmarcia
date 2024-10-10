import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Corpo() {
  return (
    <div className = 'container'>
      <div className = 'conteudo'>
        <h1>Farmacia</h1>
         <p>Os melhores profissionais <br/>se encontram aqui.</p>
         <Link to = '/cadastro' className = 'But_Home'>Comece já</Link>
       </div>
        <div className = 'imagem_corpo'>
           <img src="logo.png" alt="" /> 
           
        </div>
    </div>
  )
}

export default Corpo
