import { useState } from 'react'
import './App.css'
import Home_page from './pages/Home_page'
import Produto from './pages/Produto'


function App() {
  
  const [page,setPage] = useState(<Home_page/>)

  return (
    <>
     <div className = 'navBar'>
       <div className = 'imagem'>
         <img src ="logo.png" alt="" className='Logo_nav'/> 
         </div> 
         <button className='button_nav' onClick = {() => {setPage(<Home_page/>)}}>Inicio</button>
        <button className='button_nav' onClick = {() => {setPage(<Produto/>)}}>Produtos</button> 
       <button className='button_nav'onClick = {''} >Sorteio</button>
      <button className='button_entrar' onClick = {''}>Entrar</button>
    </div>
   {page}
    </>
  )
}

export default App
