import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Convite() {
  return (
    <div className = 'Convite_div'>
      <div>
        <img src="Cartoes.png" alt="" className = 'imagem_convite' />
      </div>
      <div>
         <h1 className = 'texto_conv'>Venha conhecer nossa nova loja <br/>com a direção da querida Marcia.</h1>
         <Link to = '/cadastro' className = 'But_Home'>Comece já</Link>
         
      </div>
    </div>
  )
}

export default Convite
