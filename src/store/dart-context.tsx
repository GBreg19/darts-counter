import React, { ReactNode, createContext, useState } from "react";

export type PlayerObj = {
  id: number | null;
  name: string | null;
  totalPoints: number;
};

export type PlayerData = {
  [key: string]: string;
};

type ErrorObj = {
  players: string;
  score: string;
};

type DartContextType = {
  playerQuantity: number;
  setPlayerQuantity: React.Dispatch<React.SetStateAction<number>>;
  maxScore: number;
  setMaxScore: React.Dispatch<React.SetStateAction<number>>;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  players: PlayerObj[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerObj[]>>;
  playerNames: PlayerData;
  setPlayerNames: React.Dispatch<React.SetStateAction<PlayerData>>;
  inputValues: PlayerData;
  setInputValues: React.Dispatch<React.SetStateAction<PlayerData>>;
  winner: boolean;
  setWinner: React.Dispatch<React.SetStateAction<boolean>>;
  errors: ErrorObj;
  setErrors: React.Dispatch<React.SetStateAction<ErrorObj>>;
  startAgain: () => void;
};

export const DartContext = createContext<DartContextType>({
  playerQuantity: 0,
  setPlayerQuantity: () => {},
  maxScore: 0,
  setMaxScore: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
  players: [],
  setPlayers: () => {},
  playerNames: {},
  setPlayerNames: () => {},
  inputValues: {},
  setInputValues: () => {},
  winner: false,
  setWinner: () => {},
  errors: {
    players: "",
    score: "",
  },
  setErrors: () => {},
  startAgain: () => {},
});

type Props = {
  children: ReactNode;
};

const DartContextProvider = (props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [playerQuantity, setPlayerQuantity] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [players, setPlayers] = useState<PlayerObj[]>([]);
  const [playerNames, setPlayerNames] = useState<PlayerData>({});
  const [inputValues, setInputValues] = useState<PlayerData>({});
  const [winner, setWinner] = useState(false);
  const [errors, setErrors] = useState<ErrorObj>({
    players: "",
    score: "",
  });

  const startAgain = () => {
    setMaxScore(0);
    setPlayers([]);
    setPlayerQuantity(0);
    setPlayerNames({});
    setIsSubmitted(false);
    setWinner(false)
  };

  const contextValue: DartContextType = {
    playerQuantity: playerQuantity,
    setPlayerQuantity,
    maxScore: maxScore,
    setMaxScore,
    isSubmitted,
    setIsSubmitted,
    players,
    setPlayers,
    playerNames,
    setPlayerNames,
    inputValues,
    setInputValues,
    winner,
    setWinner,
    errors,
    setErrors,
    startAgain,
  };

  return (
    <DartContext.Provider value={contextValue}>
      {props.children}
    </DartContext.Provider>
  );
};

export default DartContextProvider;
