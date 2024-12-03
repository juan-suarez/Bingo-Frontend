import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate();

  const redirectToGame = () => {
    navigate('/bingo')
  } 
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button 
        className="bg-sky-500 rounded-lg p-1 w-20 text-white"
        onClick={redirectToGame}
      > 
      Jugar 
      </button>
    </div>
  )
}