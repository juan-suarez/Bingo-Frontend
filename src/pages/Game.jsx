import { CalledNumbers } from "../components/CalledNumbers"
import { LastResults } from "../components/LastResults"

export const Game = () => {
  const calledNumbers = [1,25];
  const counter = '00:55'
  return (
    <div className="w-screen h-screen grid grid-cols-4 gap-4 p-2  bg-gradient-to-r from-indigo-700 to-sky-600">
      <div className="grid grid-rows-4 gap-1 p-1 pt-2">
        <div className=" ">
          <LastResults numbers={calledNumbers}/>
        </div>
        <div className="row-span-3 flex items-center">
          <CalledNumbers calledNumbers={calledNumbers}/>
        </div>
      </div>
      <div className="col-span-2 border-2 border-black grid grid-rows-6 gap-1 p-1">
        <div className="flex flex-col justify-center items-center text-white">
          {
            counter === '00:00'?
            <div>
              <h5 className="text-3xl font-bold"> Juego en curso! </h5>
            </div>
            :
            <div className="text-center">
              <h5 className="text-lg">Tiempo para inicar</h5>
              <h5 className="text-5xl font-bold"> {counter} </h5>
            </div>
          }
        </div>
        <div className="border-2 border-black row-span-4">
          player board
        </div>
        <div className="border-2 border-black ">
          bingo button
        </div>
      </div>
      <div className="border-2 border-black grid grid-rows-4 gap-1 p-1">
        <div className="border-2 border-black ">
          bingo logo
        </div>
        <div className="border-2 border-black row-span-2">
          players in game
        </div>
        <div className="border-2 border-black ">
          return  buttons
        </div>
      </div>
    </div>
  )
} 