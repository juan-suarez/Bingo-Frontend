import { getAllNumbers } from "../utils/numbers"

export const CalledNumbers = ({calledNumbers}) => {
  const allNumbers = getAllNumbers();

  return(
    <div className="bg-gray-500 rounded-lg w-full h-auto flex flex-col gap-2">
      <div className="border-black  h-8 grid grid-cols-5 text-white font-bold p-0">
        <div className="bg-red-600 rounded-tl-lg flex items-center justify-center">
          B
        </div>
        <div className="bg-orange-600 flex items-center justify-center">
          I
        </div>
        <div className="bg-yellow-600 flex items-center justify-center">
          N
        </div>
        <div className="bg-green-600 flex items-center justify-center">
          G
        </div>
        <div className="rounded-tr-lg bg-blue-600 flex items-center justify-center">
          O
        </div>
      </div>
      <div className=" grid grid-cols-5 text-center font-bold">
        {
          allNumbers.map((column)=>{
            return (
              <div className="flex flex-col">
                {
                  column.map((number)=>{
                    return (
                      <h1 className={calledNumbers.some(calledNumber =>calledNumber === number) ? "text-white": "text-slate-400" }>{number}</h1>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>

    </div>
  )
}