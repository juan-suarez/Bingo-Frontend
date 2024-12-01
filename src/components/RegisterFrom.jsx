import { useState } from "react"
import { loger } from "../gateway/auth";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [credentials, setCredentials] = useState({areValidCredentials:true});
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password, userName} = credentials;
    try{
      const response = await loger(email,password);
      if( response.status == 200){
        navigate('/');
        return;
      }
      const data = await response.json();
      console.log(data)
      setCredentials({...credentials, areValidCredentials: false, message: data.meessage || data.message});
    }catch(error){
      console.log(error)
      alert("Error en la aplicacion, estamos trabajando...")
    }
  }

  return (
    <div className="rounded-3xl bg-white shadow-xl w-full md:w-1/2 lg:w-2/5 h-3/4 border flex justify-center items-center p-4">
      <form className="w-full lg:w-1/2" id="form" onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl font-serif font-bold">Registro</h1>
        <h5 className="text-sm text-center">crea tu cuenta, ahora!</h5>
        {
          !credentials.areValidCredentials?
          <h1 className="text-center text-red-600">{credentials.message}</h1>:
          null
        }
        <div className="mt-12 mb-4 flex flex-col text-sm">
          <label className="" htmlFor="">usuario</label>
          <input 
            className="w-full border rounded-lg p-2" 
            type="text" 
            placeholder="BingoKing"
            value={credentials.email}
            onChange={(e)=>{setCredentials({...credentials, email: e.target.value})}}
            required
          />
        </div>
        <div className="mb-4 flex flex-col text-sm">
          <label className="" htmlFor="">Correo</label>
          <input 
            className="w-full border rounded-lg p-2" 
            type="email" 
            placeholder="example@bingo.com"
            value={credentials.email}
            onChange={(e)=>{setCredentials({...credentials, email: e.target.value})}}
            required
          />
        </div>
        <div className="mb-12 flex flex-col text-sm">
          <label className="" htmlFor="">Contraseña</label>
          <input 
            className="w-full border rounded-lg p-2" 
            type="password" 
            placeholder="**********"
            value={credentials.password}
            onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}
            required
          />
        </div>
        <button className="bg-sky-500 rounded-lg p-1 mb-12 w-full text-center text-white" type="submit">Crear cuenta</button>
      </form>
    </div>
  )
} 