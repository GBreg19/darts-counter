import { useContext, useEffect, useState } from "react";
import { DartContext } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);
  const [isInputActive, setIsInputActive] = useState(false);

  const playerInputHandler = (name: string, value: number) => {
    DartCtx.setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    // ფრევსთეითი უნდა დავმაპო შიგნით ინფუთველოის დავმაპო და სახელებით შევადარო და იმის მიხედვით გამოვაკლო ტოტალს ქარენთი
    if (!isInputActive) {
      // DartCtx.setPlayers((prevState) => {
      //   return prevState.map((player) => console.log(player));
      // });
    }
  }, []);

  useEffect(() => {
    DartCtx.players.map((player) => {
      const name = player.name;

      if (name !== null) {
        const newObj = {
          [name]: null,
        };
        DartCtx.setInputValues((prevState) => ({ ...prevState, ...newObj }));
      }
    });
  }, [DartCtx.players]);

  const playerTable = DartCtx.players.map((player) => {
    return (
      <div key={player.id} className="inline-flex">
        <h1 className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center w-56">
          {player.name} ({player.totalPoints})
        </h1>
      </div>
    );
  });

  const playerPointsInputs = Object.keys(DartCtx.inputValues).map((key) => {
    return (
      <div key={key} className="inline-flex">
        <Input
          name={key}
          value={DartCtx.inputValues[key]}
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
      <div className={`w-full mt-5 justify-between px-5`}>
        {playerTable}
        {playerPointsInputs}
      </div>
    </div>
  );
};

export default Table;
