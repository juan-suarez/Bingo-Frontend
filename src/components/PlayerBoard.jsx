import { useState } from "react";
import { transformPLayerBoardToMatrix } from "../utils/numbers";

export const PlayerBoard = ({ playerBoard }) => {
  const matrixPlayerBoard = transformPLayerBoardToMatrix(playerBoard);
  const [markedNumbers, setMarkedNumbers] = useState({});

  const toggleMarkedNumber = (number) => {
    setMarkedNumbers((prevState) => ({
      ...prevState,
      [number]: !prevState[number],
    }));
  };

  return (
    <div className="bg-white rounded-lg w-full h-full flex flex-col gap-0.5">
      <div className="h-12 grid grid-cols-5 text-white font-bold">
        <div className="bg-red-500 rounded-tl-lg flex items-center justify-center">
          B
        </div>
        <div className="bg-orange-500 flex items-center justify-center">
          I
        </div>
        <div className="bg-yellow-500 flex items-center justify-center">
          N
        </div>
        <div className="bg-green-500 flex items-center justify-center">
          G
        </div>
        <div className="rounded-tr-lg bg-blue-500 flex items-center justify-center">
          O
        </div>
      </div>

      <div className="grid grid-cols-5 text-center font-bold h-full gap-0.5 p-0.5">
        {matrixPlayerBoard.map((column, columnIndex) => (
          <div className="flex flex-col gap-0.5" key={columnIndex}>
            {column.map((number, numberIndex) => (
              <button
                key={number}
                className="w-full h-full bg-orange-200 rounded-lg px-4 py-1"
                onClick={() => toggleMarkedNumber(number)}
              >
                <div
                  className={
                    markedNumbers[number] ? "rounded-full bg-blue-400 w-full h-full flex justify-center items-center" : ""
                  }
                >
                  {
                    (columnIndex===2 && numberIndex===2)? 'Free':number
                  }
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
