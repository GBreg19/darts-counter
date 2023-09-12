import React, { ReactNode, createContext, useRef, useState } from "react";

export type PlayerObj = {
  id: number | null;
  name: string | null;
  totalPoints: number;
};

type PlayerScores = {
  [key: string]: string;
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
  inputValues: PlayerScores;
  setInputValues: React.Dispatch<React.SetStateAction<PlayerScores>>;
  maxScoreRef: React.RefObject<HTMLSelectElement>;
  winner: boolean;
  setWinner: React.Dispatch<React.SetStateAction<boolean>>;
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
  inputValues: {},
  setInputValues: () => {},
  maxScoreRef: React.createRef<HTMLSelectElement>(),
  winner: false,
  setWinner: () => {},
});

type Props = {
  children: ReactNode;
};

const DartContextProvider = (props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [playerQuantity, setPlayerQuantity] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [players, setPlayers] = useState<PlayerObj[]>([]);
  const [inputValues, setInputValues] = useState<PlayerScores>({});
  const [winner, setWinner] = useState(false);

  const maxScoreRef = useRef<HTMLSelectElement>(null);

  const contextValue: DartContextType = {
    playerQuantity: playerQuantity,
    setPlayerQuantity,
    maxScore: maxScore,
    setMaxScore,
    isSubmitted,
    setIsSubmitted,
    players,
    setPlayers,
    inputValues,
    setInputValues,
    maxScoreRef,
    winner,
    setWinner,
  };

  return (
    <DartContext.Provider value={contextValue}>
      {props.children}
    </DartContext.Provider>
  );
};

export default DartContextProvider;
