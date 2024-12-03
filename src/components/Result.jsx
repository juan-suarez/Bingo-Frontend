import { getColumnInfo } from "../utils/identifyResult"

export const Result = ({number, size}) => {
  const { column, color} = getColumnInfo(number);

  return (
    <div className={`bg-${color}-500 w-full h-full rounded-full  flex items-center justify-center p-2 shadow-lg`}>
      <div className={`bg-${color}-200 w-full h-full rounded-full flex items-center justify-center p-1`}>
        <div className={`bg-${color}-500 w-full h-full rounded-full  flex items-center justify-center`}>
          <div className="flex flex-col text-white">
            <h5 className={`text-lg text-center font-bold`}>{column}</h5>
            <h5 className={`text-${size} font-bold`}>{number}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}