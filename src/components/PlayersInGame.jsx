export const PlayersInGame = ({players}) => {
  return (
    <div className="w-full h-full bg-gray-500 text-white p-6">
      <h5 className="text-xl text-center underline mb-4 font-bold">Usuarios en juego</h5>
      {
        players.map((player) => {
          return(
            <div key={player} className="flex items-center gap-2 ">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <h5> {player}</h5>
            </div>
          )
        })
      }
    </div>
  )
} 