import { ReactNode, createContext, useState } from "react";

type PlayerObj = {
  id: number | null;
  name: string | null;
  totalPoints: number | null;
};

export type PlayerScores = {
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
  };

  return (
    <DartContext.Provider value={contextValue}>
      {props.children}
    </DartContext.Provider>
  );
};

export default DartContextProvider;
