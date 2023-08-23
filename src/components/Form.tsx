import { useContext, useRef } from "react";
import PlayerForm from "../layout/PlayerForm";
import { DartContext } from "../store/dart-context";
import SelectComp from "../layout/SelectComp";
import { GiDart } from "react-icons/gi";

const Form = () => {
  const DartCtx = useContext(DartContext);
  const playerRefs = useRef<(HTMLInputElement | null)[]>([]);
  const maxScoreRef = useRef<HTMLSelectElement | null>(null);

  const playerQuantityHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue: number = parseInt(event.target.value, 10);
    DartCtx.setPlayerQuantity(selectedValue);
  };

  const inputFields = Array.from({ length: DartCtx.playerQuantity }, (_, i) => (
    <PlayerForm
      key={i}
      playerN={`Player ${i + 1}`}
      playerId={`p${i}`}
      ref={(el) => (playerRefs.current[i] = el)}
    />
  ));

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredMaxScore: number = parseInt(maxScoreRef.current!.value);

    DartCtx.setMaxScore(enteredMaxScore);

    const inputValues = playerRefs.current.map((inputRef) => inputRef?.value);

    const newObj = inputValues.map((val) => {
      const id = Math.floor(Math.random() * 100000);
      const obj = {
        id: id,
        name: val as string | null,
        totalPoints: enteredMaxScore,
        currentPoint: null,
      };
      return obj;
    });

    DartCtx.setPlayers((prevState) => [...prevState, ...newObj]);
    DartCtx.setIsSubmitted(true);
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
        <div className="flex justify-between pt-3">
          <div>
            <SelectComp
              title="Number of players"
              id="playerNum"
              defaultValue="0"
              options={[1, 2, 3, 4]}
              onChange={playerQuantityHandler}
            />
          </div>
          <SelectComp
            title="Choose a score"
            id="score"
            defaultValue="0"
            options={[150, 200, 250, 300]}
            ref={maxScoreRef}
          />
        </div>
        <div>{inputFields}</div>
        <button className="mt-5 text-white text-md bg-dartGreen1 hover:bg-dartGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center w-4/12">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
