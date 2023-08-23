import { Fragment, useContext, useEffect, useState } from "react";
import { DartContext, PlayerObj, PlayerScores } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);
  const [isInputActive, setIsInputActive] = useState(false);


  const playerInputHandler = (value: number, id: string, name: string) => {
    const updatedPlayer = DartCtx.players.map((player) => {
      if (player.id?.toString() === id) {
        const newTotal = player.totalPoints - value;
        return {
          ...player,
          totalPoints: newTotal,
          currentPoint: value,
        };
      }
      return player;
    });
    DartCtx.setPlayers(updatedPlayer);
  };

  // useEffect(() => {
  // }, [isInputActive]);

  const playerTable = DartCtx.players.map((player, i) => {
    return (
      <div key={player.id}>
        <h1 className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center">
          {player.name} ({player.totalPoints})
        </h1>
        <Input
          id={player.id as number}
          name={player.name}
          value={player.currentPoint}
          onChange={playerInputHandler}
          setIsFocused={setIsInputActive}
        />
      </div>
    );
  });

  return (
    <div className=" m-auto bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-5">
      <div className="relative">
        <h1 className="text-4xl text-center">Let's Play!</h1>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-10 text-xl"
          title="Refresh"
        >
          <LuRefreshCcw />
        </button>
      </div>
      <div className={`w-full mt-5 grid grid-cols-4 justify-between px-5`}>
        {playerTable}
      </div>
    </div>
  );
};

export default Table;
