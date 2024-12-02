import { CalledNumbers } from "../components/CalledNumbers"
import { LastResults } from "../components/LastResults"

export const Game = () => {
  const calledNumbers = [1,25]
  return (
    <div className="w-screen h-screen grid grid-cols-4 gap-4 p-2">
      <div className="grid grid-rows-4 gap-1 p-1 pt-2">
        <div className=" ">
          <LastResults numbers={calledNumbers}/>
        </div>
        <div className="row-span-3 flex items-center">
          <CalledNumbers calledNumbers={calledNumbers}/>
        </div>
      </div>
      <div className="col-span-2 border-2 border-black grid grid-rows-6 gap-1 p-1">
        <div className="border-2 border-black ">
          counter
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