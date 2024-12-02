import { Result } from "./Result"

export const LastResults = ({numbers}) => {

  return (
    <div className="w-full h-full grid grid-cols-2 p-1 gap-1">
      <div className="p-4">
        <Result number={numbers[0]} size={'4xl'}/>
      </div>
      <div className="grid grid-rows-2 max-h-[150px] justify-center">
        <div className="p-1 w-16 h-16">
          <Result number={numbers[1]} size={'2xl'}/>
        </div>
        <div className="p-1 w-16 h-16">
          <Result number={numbers[2]} size={'2xl'}/>
        </div>
      </div>
    </div>
  )
}