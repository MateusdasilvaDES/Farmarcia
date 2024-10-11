import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Corpo() {
  return (
    <div className = 'container'>
      <div className = 'conteudo'>
        <h1 className='h1_farmacia'>Farmacia</h1>
         <p className='subtitulo_home'>Os melhores profissionais <br/>se encontram aqui.</p>
         <Link to = '/cadastro' className = 'But_comece_ja'>Comece já</Link>
       </div>
        <div className = 'imagem_corpo'>
           <img src="logo.png" alt="" /> 
           
        </div>
    </div>
  )
}

export default Corpo
