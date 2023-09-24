import React, { useContext, useEffect, useState } from "react";
import PlayerForm from "../layout/PlayerForm";
import { DartContext } from "../store/dart-context";
import SelectComp from "../layout/SelectComp";
import { GiDart } from "react-icons/gi";

export interface PlayerData {
  [key: string]: string;
}

const Form = () => {
  const [playerNames, setPlayerNames] = useState<PlayerData>({});
  const DartCtx = useContext(DartContext);

  const playerQuantityHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue: number = parseInt(event.target.value, 10);

    DartCtx.setPlayerQuantity(selectedValue);
  };

  // let inputValuesObj: PlayerData = {};

  // const playerDataArray: PlayerData[] = [];

  const onPlayerInputsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;
    console.log(value, name);

    console.log(playerNames);

    // setPlayerNames((prevState) => {
    //   const newState = { ...prevState, [name]: value };
    //   console.log("New State:", newState);
    //   return newState;
    // });
    // console.log(playerNames)

    // const obj: PlayerData = {};
    // obj[name] = value;

    // playerDataArray.push(obj);

    // inputValuesObj = Object.assign({}, ...playerDataArray);
  };

  const inputFields = Object.keys(playerNames).map((key, i) => {
    return (
      <PlayerForm
        key={i}
        playerN={`Player${i + 1}`}
        playerId={i}
        playerVal={key}
        state={playerNames}
        onChange={onPlayerInputsHandler}
      />
    );
  });

  // const inputFields = Array.from({ length: DartCtx.playerQuantity }, (_, i) => {
  //   const val = playerNames[`Player ${i + 1}`];
  //   return (
  //     <PlayerForm
  //       key={i}
  //       playerN={`Player ${i + 1}`}
  //       playerId={i}
  //       playerVal={val}
  //       onChange={onPlayerInputsHandler}
  //     />
  //   );
  // });

  useEffect(() => {
    const newPlayerNames: PlayerData = {};

    for (let i = 0; i < DartCtx.playerQuantity; i++) {
      newPlayerNames[`Player${i + 1}`] = playerNames[`Player${i + 1}`] || "";
    }

    setPlayerNames(newPlayerNames);

    // inputValuesObj = {};
  }, [DartCtx.playerQuantity]);

  // useEffect(() => {
  //   if (DartCtx.playerQuantity !== 0) {
  //     DartCtx.setErrors((prevState) => ({ ...prevState, players: "" }));
  //   }
  //   // console.log(DartCtx.maxScoreRef.current?.value)
  //   // if (parseInt(DartCtx.maxScoreRef.current!.value) !== 0) {
  //   //   DartCtx.setErrors((prevState) => ({ ...prevState, score: "" }));
  //   // }
  // }, [DartCtx.maxScoreRef.current?.value, DartCtx.playerQuantity]);

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredMaxScore: number = parseInt(
      DartCtx.maxScoreRef.current!.value
    );

    DartCtx.setMaxScore(enteredMaxScore);

    const errorObj = {
      players: "",
      score: "",
    };

    if (DartCtx.playerQuantity === 0) {
      errorObj.players = "You need to select minimum of 2 players";
    }

    if (enteredMaxScore === 0) {
      errorObj.score = "You have to select score";
    }

    DartCtx.setErrors((prevState) => ({ ...prevState, ...errorObj }));

    const newObj = Object.values(playerNames).map((val) => {
      const id = Math.floor(Math.random() * 100000);
      const obj = {
        id: id,
        name: val as string | null,
        totalPoints: DartCtx.maxScore,
      };
      return obj;
    });

    console.log(enteredMaxScore);

    if (DartCtx.playerQuantity !== 0 && enteredMaxScore !== 0) {
      DartCtx.setPlayers((prevState) => [...prevState, ...newObj]);
      DartCtx.setIsSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={formSubmit}
      className="m-auto w-1/4 flex flex-col justify-between max-h-[500px] bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
    >
      <div className="py-1 rounded-t-md bg-dartGreen1">
        <div className="w-1/3 m-auto flex flex-col items-center">
          <GiDart className="rounded-full w-10 h-10 px-1 text-white" />
          <h1 className="text-white text-lg font-medium">Play Darts</h1>
        </div>
      </div>
      <div className="m-auto w-full p-5 flex flex-col gap-1">
        <div className="flex justify-between flex-col gap-5 pt-3">
          <div>
            <SelectComp
              title="Number of players"
              id="playerNum"
              defaultValue="0"
              options={[1, 2, 3, 4]}
              onChange={playerQuantityHandler}
            />
            {DartCtx.errors.players && (
              <p className="text-red-600">{DartCtx.errors.players}</p>
            )}

            <div>{inputFields}</div>
          </div>
          <div>
            <SelectComp
              title="Choose a score"
              id="score"
              defaultValue="0"
              options={[150, 200, 250, 300]}
            />

            {DartCtx.errors.score && (
              <p className="text-red-600">{DartCtx.errors.score}</p>
            )}
          </div>
        </div>
        <button className="mt-5 text-white text-md bg-dartGreen1 hover:bg-dartGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
