import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Produto() {

    const[resultado_um,setResultado_um] = useState()
    const[resultado_dois, setResultado_dois] = useState()
    const[resultado_tres, setResultado_tres] = useState()
    const[resultado_quatro, setResultado_quatro] = useState()
    const[resultado_cinco, setResultado_cinco] = useState()
    const[resultado_seis, setResultado_seis] = useState()

   function button_um(){
     
       setResultado_um('Compra realizada!')
       setResultado_dois('')
       setResultado_tres('')
       setResultado_quatro('')
       setResultado_cinco('')
       setResultado_seis('')
   }

   function button_dois(){

       setResultado_um('')
       setResultado_dois('Compra realizada!')
       setResultado_tres('')
       setResultado_quatro('')
       setResultado_cinco('')
       setResultado_seis('')
   }

   function button_tres(){

      setResultado_um('')
      setResultado_dois('')
      setResultado_tres('Compra realizada!')
      setResultado_quatro('')
      setResultado_cinco('')
      setResultado_seis('')
  }

  function button_quatro(){

   setResultado_um('')
   setResultado_dois('')
   setResultado_tres('')
   setResultado_quatro('Compra realizada!')
   setResultado_cinco('')
   setResultado_seis('')
}

function button_cinco(){

   setResultado_um('')
   setResultado_dois('')
   setResultado_tres('')
   setResultado_quatro('')
   setResultado_cinco('Compra realizada!')
   setResultado_seis('')
}

function button_seis(){

   setResultado_um('')
   setResultado_dois('')
   setResultado_tres('')
   setResultado_quatro('')
   setResultado_cinco('')
   setResultado_seis('Compra realizada!')
}

  return (
    
    <div>
      <Navbar/>
      <div className ='Fileira_padrao'>
       <div className ='divs_padrao'>
          <div >
             <img src="fralda.png" alt="" /><br /><br />
             {resultado_um}
          </div>
          <div>
             <p1 htmlFor="">Preço:</p1><br/><br/>
             <p1 htmlFor="">R$ 19,99</p1><br/><br/>
             <button  className='But_comprar' onClick={button_um}>Comprar</button>
          </div>
       </div>

       <div className='divs_padrao'>
        <div>
        <img src = "sabonete.png" alt="" className='padrao_img_div'/><br />
        {resultado_dois}
        </div>
        <div>
        <p1>Preço:</p1><br/><br/>
         <p1>R$ 4,50</p1><br/><br />
         <button onClick = {button_dois} className='But_comprar'>Comprar</button>
        
        </div>
       </div>

       <div className='divs_padrao'>
         <div>
            <img src="Shampo.png" alt="" className='F1_imgem_tres'/><br />
            {resultado_tres}
         </div>
         <div>
            <p1>Preço:</p1><br/><br/>
             <p1>R$ 14,99</p1><br/><br/>
             <button onClick = {button_tres} className='But_comprar'>Comprar</button>
         </div>
       </div>

      </div>

      <div className = 'Fileira_padrao'>
      <div className ='divs_padrao'>
          <div >
             <img src="Barra_chocolate.png" alt=""  className='padrao_img_div'/><br />
             {resultado_quatro}
          </div>
          <div>
             <p1 htmlFor="">Preço:</p1><br/><br/>
             <p1 htmlFor="">R$ 10,00</p1><br/><br/>
             <button onClick = {button_quatro} className='But_comprar'>Comprar</button>
          </div>
       </div>

       <div className='divs_padrao'>
        <div>
        <img src="Trident.png" alt="" className='padrao_img_div'/><br />
        {resultado_cinco}
        </div>
        <div>
        <p1>Preço:</p1><br/><br/>
         <p1>R$ 2,50</p1><br/><br />
         <button onClick = {button_cinco} className='But_comprar'>Comprar</button>
         
        </div>
       </div>

       <div className='divs_padrao'>
         <div>
            <img src="Barrinha.png" alt="" className='padrao_img_div'/><br />
            {resultado_seis}
         </div>
         <div>
            <p1>Preço:</p1><br/><br/>
             <p1>R$ 12,99</p1><br/><br/>
             <button onClick = {button_seis} className='But_comprar'>Comprar</button>
             
         </div>
       </div>
      </div>
    </div>
  )
}

export default Produto
