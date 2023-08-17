import { Fragment, useContext, useEffect, useState } from "react";
import { DartContext, PlayerScores } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);
  const [isInputActive, setIsInputActive] = useState(false);

  // type InpTypes = {
  //   [key: string]: string | number;
  // };
  // const playerInputValues: InpTypes = {};

  // for (let i = 1; i < DartCtx.playerQuantity + 1; i++) {
  //   playerInputValues[`player${i}`] = "";
  // }

  // const [pointsInputValue, setPointsInputValue] =
  //   useState<InpTypes>(playerInputValues);

  //   DartCtx.setInputValues(updatedPlayers);
  // };

  // const pointsCalcFunc = () => {
  //   if (isInputActive) {
  //     return;
  //   } else {
  //     DartCtx.setPlayers((prevState) => {
  //       const updatedPlayers = prevState.map((player) => {
  //         const matchingInput = DartCtx.inputValues.find(
  //           (inputPlayer) => inputPlayer.name === player.name
  //         );
  //         if (matchingInput) {
  //           return {
  //             ...player,
  //             totalPoints: matchingInput.totalPoints,
  //           };
  //         }
  //         return player;
  //       });

  //       // setPointsInputValue((prevState) => {
  //       //   const updatedInpValues = { ...prevState };

  //       //   Object.keys(updatedInpValues).forEach((key) => {
  //       //     updatedInpValues[key] = "";
  //       //   });

  //       //   return updatedInpValues;
  //       // });

  //       return updatedPlayers;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   pointsCalcFunc();
  // }, [isInputActive]);

  const playerInputHandler = (value: number, id: string) => {
    // console.log(`${id}: ${value}`)
    // console.log(value);
    // const updatedPlayerInputs = { ...pointsInputValue };
    // Object.entries(updatedPlayerInputs).map(([key]) => {
    //   if (`player${index + 1}` === key) {
    //     updatedPlayerInputs[key] = value;
    //   }
    // });
    // setPointsInputValue(updatedPlayerInputs);
    // const updatedPlayers = [...DartCtx.players];
    // updatedPlayers[index] = {
    //   ...updatedPlayers[index],
    //   totalPoints: updatedPlayers[index].totalPoints - value,
  };

  const playerTable = DartCtx.players.map((player, i) => {

    // const scoreValues: PlayerScores = {
    //   [`Player${i + 1}`]: "",
    // };

    // console.log(scoreValues)

    // DartCtx.setInputValues((prevState) => {...prevState, ...scoreValues})

    return (
      <div key={player.id}>
        <h1 className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center">
          {player.name} ({player.totalPoints})
        </h1>
        <Input
          id={player.id as number}
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
