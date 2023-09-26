import { useContext, useEffect, useState } from "react";
import { DartContext } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);
  const [isInputActive, setIsInputActive] = useState(false);

  const playerInputHandler = (name: string, value: string) => {
    DartCtx.setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    DartCtx.players.map((player) => {
      const name = player.name;

      if (name !== null) {
        const newObj = {
          [name]: "",
        };
        DartCtx.setInputValues((prevState) => ({ ...prevState, ...newObj }));
      }
    });
  }, [DartCtx.players]);

  useEffect(() => {
    const totals = DartCtx.players.map((player) => player.totalPoints);
    for (const score of totals) {
      if (score === 0) {
        DartCtx.setWinner(true);
        DartCtx.setMaxScore(0);
      }
    }
  }, [DartCtx.players]);

  const playerTable = DartCtx.players.map((player) => {
    return (
      <h1
        key={player.id}
        className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center w-full"
      >
        {player.name} ({player.totalPoints})
      </h1>
    );
  });

  const playerPointsInputs = DartCtx.players.map((player, i) => {
    return (
      <Input
        key={i}
        name={player.name}
        value={DartCtx.inputValues[player.name!]}
        onChange={playerInputHandler}
        setIsFocused={setIsInputActive}
      />
    );
  });

  return (
    <div className="m-auto bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-5">
      <div className="relative">
        <h1 className="text-4xl text-center">Let's Play!</h1>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-10 text-xl"
          title="Refresh"
          onClick={DartCtx.startAgain}
        >
          <LuRefreshCcw />
        </button>
      </div>
      <div className={`w-full mt-5 justify-between px-5`}>
        <div className="flex">{playerTable}</div>
        <div className="flex">{playerPointsInputs}</div>
      </div>
    </div>
  );
};

export default Table;
