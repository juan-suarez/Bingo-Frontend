import { useState } from "react";
import { CalledNumbers } from "../components/CalledNumbers"
import { LastResults } from "../components/LastResults"
import { PlayerBoard } from "../components/PlayerBoard";
import { PlayersInGame } from "../components/PlayersInGame";

export const Game = () => {
  const [isTableGenerated, setIsTableGenerated] = useState(false)
  const calledNumbers = [1, 25];
  const timer = '00:55';
  const playerBoard = [
    1, 2, 3, 4, 5,
    16, 17, 18, 19, 20,
    31, 32, 33, 34, 35,
    46, 47, 48, 49, 50,
    61, 62, 63, 64, 65
  ]
  const players = [
    {
      userName: 'juan'
    },
    {
      userName: 'pepito'
    }
  ]

  const handleBingo = () => {
    console.log("bingo!");
  }

  const tableGenerator = () => {
    setIsTableGenerated(true);
  }
  return (
    <div className="w-screen h-screen grid grid-cols-4 gap-4 p-2  bg-gradient-to-r from-indigo-700 to-sky-600">
      {
        isTableGenerated ?
          <div className="col-span-3 grid grid-cols-3">
            <div className="grid grid-rows-4 gap-1 p-1 pt-2">
              <div className=" ">
                <LastResults numbers={calledNumbers} />
              </div>
              <div className="row-span-3 flex items-center">
                <CalledNumbers calledNumbers={calledNumbers} />
              </div>
            </div>
            <div className="col-span-2 grid grid-rows-6 gap-1 p-1">
              <div className="flex flex-col justify-center items-center text-white">
                {
                  timer === '00:00' ?
                    <div>
                      <h5 className="text-3xl font-bold"> Juego en curso! </h5>
                    </div>
                    :
                    <div className="text-center">
                      <h5 className="text-lg">Tiempo para inicar</h5>
                      <h5 className="text-5xl font-bold"> {timer} </h5>
                    </div>
                }
              </div>
              <div className="row-span-4 px-20 py-2">
                <PlayerBoard playerBoard={playerBoard} />
              </div>
              <div className=" flex justify-center items-center">
                
                <button
                  className="bg-green-600 text-lg font-bold rounded-lg py-3 px-8 text-white"
                  onClick={handleBingo}
                >
                  Bingo!
                </button>
              </div>
            </div>
          </div>
          :
          <div className="col-span-3 flex flex-col justify-center items-center">
            <div className="mb-12 flex flex-col justify-center items-center text-white">
                {
                  timer === '00:00' ?
                    <div>
                      <h5 className="text-3xl font-bold"> Juego en curso! </h5>
                    </div>
                    :
                    <div className="text-center">
                      <h5 className="text-lg">Tiempo para inicar</h5>
                      <h5 className="text-5xl font-bold"> {timer} </h5>
                    </div>
                }
              </div>
            <button 
              className="text-white bg-yellow-600 px-6 py-3 rounded-lg"
              onClick={tableGenerator}
            >
                Generar tabla</button>
          </div>
      }

      <div className="grid grid-rows-4 gap-1 p-1">
        <div className=""></div>
        <div className="row-span-2">
          <PlayersInGame players={players} />
        </div>
        <div className="flex justify-center items-center">
          <a href="/">
            <button className="px-8 py-2 bg-yellow-600 rounded font-bold text-white">Salir</button>
          </a>
        </div>
      </div>
    </div>
  )
} 