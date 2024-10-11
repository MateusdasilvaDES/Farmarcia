import Navbar from "../components/Navbar";
import '../App.css'

export default function Cadastro() {
  return (
    <div>
      <Navbar/>
      <div className = "container_cadastro">
        <h1>Cadastro</h1>
        <div className="mini_container_direito">
         <label>Nome de usuario</label>
         <input type="text" placeholder="joao_007" />
         <label>Email</label>
         <input type="text" placeholder="joao_007@gmail.com" />
        </div>
        <div className="mini_container_esquerdo">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}
