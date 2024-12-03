import { useEffect, useRef, useState } from "react";
import { convertNumberToTimer } from "../utils/time";
import { useNavigate } from "react-router-dom";

export const useGame = (socket) => {
  const [timeToStart, setTimeToStart] = useState('00:00');
  const [players, setPlayers] = useState([]);
  const [playerBoard, setPlayerBoard] = useState([]);
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate();
  const removePlayer = () => {
    socket.emit('remove-player');
    navigate('/')
  }


  const hasEmittedAddPlayer = useRef(false);

  useEffect(() => {
    console.log()
    if (!hasEmittedAddPlayer.current) {
      socket.emit('add-player');
      hasEmittedAddPlayer.current = true;
    }

    return () => {
    };
  }, []);

  useEffect(() => {
    const handleConnectedUsers = (message) => {
      setPlayers(message);
      console.log(message);
    };


    const handleTimeToStart = (message) => {
      setTimeToStart(convertNumberToTimer(message));
    };

    const handleGenerateTable = (message) => {
      if (!playerBoard.length) {
        setPlayerBoard(message);
      }
    };

    const handleStartedGame = (message) => {
      if (!message && !gameStarted) {
        setGameStarted(true);
        socket.emit('start-game');
      }
    };

    const handleCalledNumbers = (message) => {
      console.log(message);
      setCalledNumbers(message);
    };

    socket.on("connected-users", handleConnectedUsers);
    socket.on("time-to-start", handleTimeToStart);
    socket.on("generate-table", handleGenerateTable);
    socket.on("started-game", handleStartedGame);
    socket.on("called-numbers", handleCalledNumbers);

    return () => {
      socket.off("connected-users", handleConnectedUsers);
      socket.off("time-to-start", handleTimeToStart);
      socket.off("generate-table", handleGenerateTable);
      socket.off("started-game", handleStartedGame);
      socket.off("called-numbers", handleCalledNumbers);
    }

  }, [socket ,playerBoard, timeToStart, gameStarted]);

  return {
    timeToStart,
    players,
    playerBoard,
    calledNumbers,
    removePlayer
  };
};
