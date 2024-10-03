import React, { useState } from 'react'

function Produto() {
    const[resultado_um,setResultado_um] = useState()
    const[resultado_dois, setResultado_dois] = useState()
    const[resultado_tres, setResultado_tres] = useState()
    const[resultado_quatro, setResultado_quatro] = useState()
    const[resultado_cinco, setResultado_cinco] = useState()
    const[resultado_seis, setResultado_seis] = useState()


    function comprar_but_um(){
      
      setResultado_um('Compra feita!')
      setResultado_dois('')
      setResultado_tres('')
      setResultado_quatro('')
      setResultado_cinco('')
      setResultado_seis('')
    }

  return (
    <div>
      <div className ='Fileira_padrao'>
       <div className ='divs_padrao'>
          <div >
             <img src="fralda.png" alt="" /><br /><br />
             {resultado_um}
          </div>
          <div>
             <p1 htmlFor="">Preço:</p1><br/><br/>
             <p1 htmlFor="">R$ 19,99</p1><br/><br/>
             <button onClick = {comprar_but_um} className='But_comprar'>Comprar</button>
          </div>
       </div>

       <div className='divs_padrao'>
        <div>
        <img src = "sabonete.png" alt="" className='padrao_img_div'/><br />
       
        </div>
        <div>
        <p1>Preço:</p1><br/><br/>
         <p1>R$ 4,50</p1><br/><br />
         <button onClick = {''} className='But_comprar'>Comprar</button>
        
        </div>
       </div>

       <div className='divs_padrao'>
         <div>
            <img src="Shampo.png" alt="" className='F1_imgem_tres'/><br />
           
         </div>
         <div>
            <p1>Preço:</p1><br/><br/>
             <p1>R$ 14,99</p1><br/><br/>
             <button onClick = {''} className='But_comprar'>Comprar</button>
         </div>
       </div>

      </div>

      <div className = 'Fileira_padrao'>
      <div className ='divs_padrao'>
          <div >
             <img src="Barra_chocolate.png" alt=""  className='padrao_img_div'/><br />
             
          </div>
          <div>
             <p1 htmlFor="">Preço:</p1><br/><br/>
             <p1 htmlFor="">R$ 10,00</p1><br/><br/>
             <button onClick = {''} className='But_comprar'>Comprar</button>
          </div>
       </div>

       <div className='divs_padrao'>
        <div>
        <img src="Trident.png" alt="" className='padrao_img_div'/><br />
        
        </div>
        <div>
        <p1>Preço:</p1><br/><br/>
         <p1>R$ 2,50</p1><br/><br />
         <button onClick = {''} className='But_comprar'>Comprar</button>
         
        </div>
       </div>

       <div className='divs_padrao'>
         <div>
            <img src="Barrinha.png" alt="" className='padrao_img_div'/><br />
            
         </div>
         <div>
            <p1>Preço:</p1><br/><br/>
             <p1>R$ 12,99</p1><br/><br/>
             <button onClick = {''} className='But_comprar'>Comprar</button>
             
         </div>
       </div>
      </div>
    </div>
  )
}

export default Produto
