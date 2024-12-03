import { Result } from "./Result"

export const LastResults = ({numbers}) => {
  return (
    <div className="w-full h-full grid grid-cols-2 p-1 gap-1">
      <div className="p-1 w-40 h-40">
        <Result number={numbers[numbers.length-1]} size={'4xl'}/>
      </div>
      <div className="grid grid-rows-2 max-h-[150px] justify-center">
        <div className="p-1 w-20 h-20">
          <Result number={numbers[numbers.length-2]} size={'2xl'}/>
        </div>
        <div className="p-1 w-20 h-20">
          <Result number={numbers[numbers.length-3]} size={'2xl'}/>
        </div>
      </div>
    </div>
  )
}