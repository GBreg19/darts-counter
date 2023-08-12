import { ReactNode, createContext, useState } from "react";

type PlayerNamesObj = {
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

type PlayerObj = {
  name: string;
  totalPoints: number;
};

type DartContextType = {
  playerQuantity: number;
  setPlayerQuantity: React.Dispatch<React.SetStateAction<number>>;
  maxScore: number;
  setMaxScore: React.Dispatch<React.SetStateAction<number>>;
  playerNames: playerNameObj;
  setPlayerNames: React.Dispatch<React.SetStateAction<PlayerNamesObj>>;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  error: ErrorObj;
  setError: React.Dispatch<React.SetStateAction<ErrorObj>>;
  players: PlayerObj[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerObj[]>>;
  inputValues: PlayerObj[];
  setInputValues: React.Dispatch<React.SetStateAction<PlayerObj[]>>;
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
  players: [],
  setPlayers: () => {},
  inputValues: [],
  setInputValues: () => {},
});

type Props = {
  children: ReactNode;
};

const DartContextProvider = (props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [playerQuantity, setPlayerQuantity] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [inputValues, setInputValues] = useState<PlayerObj[]>([]);

  const [players, setPlayers] = useState<PlayerObj[]>([]);

  const [error, setError] = useState<ErrorObj>({
    playerNum: null,
    score: null,
    player1: null,
    player2: null,
    player3: null,
    player4: null,
  });

  const [playerNames, setPlayerNames] = useState<PlayerNamesObj>({
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
