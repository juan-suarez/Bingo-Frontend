export const PlayersInGame = ({players}) => {
  return (
    <div className="w-full h-full bg-gray-500 text-white p-6">
      <h5 className="text-xl text-center underline mb-4">Usuarios en juego</h5>
      {
        players.map((player) => {
          return(
            <div className="flex items-center gap-2 font-bold">
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <h5> {player.userName}</h5>
            </div>
          )
        })
      }
    </div>
  )
} 