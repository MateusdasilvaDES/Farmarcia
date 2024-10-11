import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
   
    <div className = 'navBar'>
     <div className = 'imagem'>
      <img src ="logo.png" alt="" className='Logo_nav'/> 
     </div> 
    <Link to = '/' className='button_nav'>Inicio</Link>
    <Link to = '/produto' className='button_nav'>Produtos</Link> 
    <Link to = '/sorteio' className='button_nav'>Sorteio</Link>
    <Link to = '/entrar' className ='button_entrar'>Entrar</Link>
    
    </div>
   
  )
}

export default Navbar
