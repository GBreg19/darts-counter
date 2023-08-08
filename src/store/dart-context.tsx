import { ReactNode, createContext, useState } from "react";

type PlayerObj = {
  player1: string | null;
  player2: string | null;
  player3: string | null;
  player4: string | null;
};

type ErrorObj = {
  playerNum: string | null;
  score: string | null;
  player1: string | null;
  player2: string | null;
  player3: string | null;
  player4: string | null;
};

type playerNameObj = {
  player1: string | null;
  player2: string | null;
  player3: string | null;
  player4: string | null;
};

type DartContextType = {
  playerQuantity: number;
  setPlayerQuantity: React.Dispatch<React.SetStateAction<number>>;
  maxScore: number;
  setMaxScore: React.Dispatch<React.SetStateAction<number>>;
  playerNames: playerNameObj;
  setPlayerNames: React.Dispatch<React.SetStateAction<PlayerObj>>;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  error: ErrorObj;
  setError: React.Dispatch<React.SetStateAction<ErrorObj>>;
};

export const DartContext = createContext<DartContextType>({
  playerQuantity: 0,
  setPlayerQuantity: () => {},
  maxScore: 0,
  setMaxScore: () => {},
  playerNames: {
    player1: null,
    player2: null,
    player3: null,
    player4: null,
  },
  setPlayerNames: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
  error: {
    playerNum: null,
    score: null,
    player1: null,
    player2: null,
    player3: null,
    player4: null,
  },
  setError: () => {},
});

type Props = {
  children: ReactNode;
};

const DartContextProvider = (props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [playerQuantity, setPlayerQuantity] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const [error, setError] = useState<ErrorObj>({
    playerNum: null,
    score: null,
    player1: null,
    player2: null,
    player3: null,
    player4: null,
  });

  const [playerNames, setPlayerNames] = useState<PlayerObj>({
    player1: null,
    player2: null,
    player3: null,
    player4: null,
  });

  const contextValue: DartContextType = {
    playerQuantity: playerQuantity,
    setPlayerQuantity,
    maxScore: maxScore,
    setMaxScore,
    playerNames,
    setPlayerNames,
    isSubmitted,
    setIsSubmitted,
    error,
    setError,
  };

  return (
    <DartContext.Provider value={contextValue}>
      {props.children}
    </DartContext.Provider>
  );
};

export default DartContextProvider;
