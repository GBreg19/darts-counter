import { useContext, useRef } from "react";
import PlayerForm from "../layout/PlayerForm";
import { DartContext } from "../store/dart-context";
import SelectComp from "../layout/SelectComp";
import { GiDart } from "react-icons/gi";

const errorObj = {
  playerNum: "",
  score: "",
  player1: "",
  player2: "",
  player3: "",
  player4: "",
};

const Form = () => {
  const DartCtx = useContext(DartContext);

  const player1Ref = useRef<HTMLInputElement>(null);
  const player2Ref = useRef<HTMLInputElement>(null);
  const player3Ref = useRef<HTMLInputElement>(null);
  const player4Ref = useRef<HTMLInputElement>(null);

  const playerNumHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: number = parseInt(event.target.value, 10);
    DartCtx.setPlayerQuantity(selectedValue);
  };

  const maxScoreRef = useRef<HTMLSelectElement | null>(null);

  const playerInp =
    DartCtx.playerQuantity === 1 ? (
      <div>
        <PlayerForm playerN="Player 1" playerId="p1" ref={player1Ref} />
      </div>
    ) : DartCtx.playerQuantity === 2 ? (
      <div>
        <PlayerForm playerN="Player 1" playerId="p1" ref={player1Ref} />
        <PlayerForm playerN="Player 2" playerId="p2" ref={player2Ref} />
      </div>
    ) : DartCtx.playerQuantity === 3 ? (
      <div>
        <PlayerForm playerN="Player 1" playerId="p1" ref={player1Ref} />
        <PlayerForm playerN="Player 2" playerId="p2" ref={player2Ref} />
        <PlayerForm playerN="Player 3" playerId="p3" ref={player3Ref} />
      </div>
    ) : DartCtx.playerQuantity === 4 ? (
      <div>
        <PlayerForm playerN="Player 1" playerId="p1" ref={player1Ref} />
        <PlayerForm playerN="Player 2" playerId="p2" ref={player2Ref} />
        <PlayerForm playerN="Player 3" playerId="p3" ref={player3Ref} />
        <PlayerForm playerN="Player 4" playerId="p4" ref={player4Ref} />
      </div>
    ) : (
      ""
    );

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredMaxScore: number = parseInt(maxScoreRef.current!.value);

    DartCtx.setMaxScore(enteredMaxScore);

    const playerNameObj =
      DartCtx.playerQuantity === 1
        ? {
            player1: player1Ref.current?.value || null,
          }
        : DartCtx.playerQuantity === 2
        ? {
            player1: player1Ref.current?.value || null,
            player2: player2Ref.current?.value || null,
          }
        : DartCtx.playerQuantity === 3
        ? {
            player1: player1Ref.current?.value || null,
            player2: player2Ref.current?.value || null,
            player3: player3Ref.current?.value || null,
          }
        : DartCtx.playerQuantity === 4
        ? {
            player1: player1Ref.current?.value || null,
            player2: player2Ref.current?.value || null,
            player3: player3Ref.current?.value || null,
            player4: player4Ref.current?.value || null,
          }
        : "";

    Object.values(playerNameObj).map((name) => {
      DartCtx.setPlayers((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          name: name || "",
          totalPoints: enteredMaxScore,
          pointsPerFrame: null,
        },
      ]);
    });

    DartCtx.setPlayerNames((prevState) => ({ ...prevState, ...playerNameObj }));

    // if (DartCtx.playerQuantity !== 0 && enteredMaxScore !== 0) {
    DartCtx.setIsSubmitted(true);
    // } else if (DartCtx.playerQuantity === 0) {
    //   errorObj.playerNum = "You should choose 1 or more players to play";
    // } else if (enteredMaxScore === 0) {
    //   errorObj.score = "You should choose a valid score";
    // }
  };

  // console.log(errorObj);

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
        <div className="flex justify-between pt-3">
          <div>
            <SelectComp
              title="Number of players"
              id="playerNum"
              defaultValue="0"
              options={[1, 2, 3, 4]}
              onChange={playerNumHandler}
            />
            {errorObj.playerNum && (
              <p className="text-red-700">{errorObj.playerNum}</p>
            )}
          </div>
          <SelectComp
            title="Choose a score"
            id="score"
            defaultValue="0"
            options={[150, 200, 250, 300]}
            ref={maxScoreRef}
          />
          {errorObj.score && <p className="text-red-700">{errorObj.score}</p>}
        </div>
        <div>{playerInp}</div>
        <button className="mt-5 text-white text-md bg-dartGreen1 hover:bg-dartGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-4/12">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
