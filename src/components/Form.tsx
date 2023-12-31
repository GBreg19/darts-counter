import React, { useContext, useEffect } from "react";
import { DartContext, PlayerData } from "../store/dart-context";
import PlayerForm from "../layout/PlayerForm";
import SelectComp from "../layout/SelectComp";
import { GiDart } from "react-icons/gi";

const Form = () => {
  const DartCtx = useContext(DartContext);
  const errorObj: PlayerData = {};

  const playerQuantityHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue: number = parseInt(event.target.value, 10);

    DartCtx.setPlayerQuantity(selectedValue);
  };

  const maxScoreHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: number = parseInt(event.target.value, 10);
    DartCtx.setMaxScore(selectedValue);
  };

  const onPlayerInputsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    DartCtx.setPlayerNames((prevState) => ({ ...prevState, [name]: value }));

    if (value) {
      DartCtx.setErrors((prevState) => {
        const { [name]: omit, ...restErrors } = prevState;
        return restErrors;
      });
    }
  };

  const inputFields = Object.values(DartCtx.playerNames).map((val, i) => {
    return (
      <PlayerForm
        key={i}
        playerN={`Player${i + 1}`}
        playerId={i}
        playerVal={val}
        onChange={onPlayerInputsHandler}
      />
    );
  });

  useEffect(() => {
    const newPlayerNames: PlayerData = {};

    for (let i = 0; i < DartCtx.playerQuantity; i++) {
      newPlayerNames[`Player${i + 1}`] =
        DartCtx.playerNames[`Player${i + 1}`] || "";
    }

    DartCtx.setPlayerNames(newPlayerNames);
  }, [DartCtx.playerQuantity]);

  useEffect(() => {
    if (DartCtx.playerQuantity !== 0) {
      DartCtx.setErrors((prevState) => {
        const { players, ...restErrors } = prevState;
        return restErrors;
      });
    }
    if (DartCtx.maxScore !== 0) {
      DartCtx.setErrors((prevState) => {
        const { score, ...restErrors } = prevState;
        return restErrors;
      });
    }
  }, [DartCtx.maxScore, DartCtx.playerQuantity]);

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (DartCtx.playerQuantity === 0) {
      errorObj.players = "Select at least 1 player";
    }

    if (DartCtx.maxScore === 0) {
      errorObj.score = "Select a score";
    }

    if (DartCtx.playerNames) {
      Object.entries(DartCtx.playerNames).map((entries) => {
        const [key, value] = entries;
        if (!value) {
          errorObj[key] = "Please enter a name";
        }
      });
    }

    DartCtx.setErrors((prevState) => ({ ...prevState, ...errorObj }));

    const newObj = Object.values(DartCtx.playerNames).map((val) => {
      const id = Math.floor(Math.random() * 100000);
      const obj = {
        id: id,
        name: val as string | null,
        totalPoints: DartCtx.maxScore,
      };
      return obj;
    });

    const valuesAreValid = Object.values(DartCtx.playerNames).every(
      (val) => val.length !== 0
    );

    if (
      DartCtx.maxScore !== 0 &&
      DartCtx.playerQuantity !== 0 &&
      valuesAreValid
    ) {
      DartCtx.setPlayers((prevState) => [...prevState, ...newObj]);
      DartCtx.setIsSubmitted(true);
    }
  };

  const backgroundImageUrl = "./images/form-bg.jpg";

  return (
    <div className="w-screen h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          filter: "blur(8px)",
        }}
      ></div>
      <form
        onSubmit={formSubmit}
        className="m-auto w-1/4 flex flex-col justify-between max-h-[500px] bg-white bg-opacity-80 rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
      >
        <div className="py-1 rounded-t-md bg-dartGreen">
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
                id="players"
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
                onChange={maxScoreHandler}
              />

              {DartCtx.errors.score && (
                <p className="text-red-600">{DartCtx.errors.score}</p>
              )}
            </div>
          </div>
          <button className="mt-5 text-white text-md bg-dartGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
