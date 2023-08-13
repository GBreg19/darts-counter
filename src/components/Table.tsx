import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { DartContext } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);
  const [isInputActive, setIsInputActive] = useState(false);

  const playerInputHandler = (
    value: number,
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedPlayers = [...DartCtx.players];

    updatedPlayers[index] = {
      ...updatedPlayers[index],
      totalPoints: updatedPlayers[index].totalPoints - value,
    };

    DartCtx.setInputValues(updatedPlayers);
  };

  const playersLength = DartCtx.players.length;

  useEffect(() => {
    if (isInputActive) {
      return;
    } else {
      DartCtx.setPlayers((prevState) => {
        const updatedPlayers = prevState.map((player) => {
          const matchingInput = DartCtx.inputValues.find(
            (inputPlayer) => inputPlayer.name === player.name
          );
          if (matchingInput) {
            return {
              ...player,
              totalPoints: matchingInput.totalPoints,
            };
          }
          return player;
        });

        return updatedPlayers;
      });
    }
  }, [isInputActive]);

  return (
    <div className="w-1/2 m-auto bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-5">
      <div className="relative">
        <h1 className="text-4xl text-center">Let's Play!</h1>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-10 text-xl"
          title="Refresh"
        >
          <LuRefreshCcw />
        </button>
      </div>
      <div
        className={`w-full mt-5 grid grid-cols-${
          playersLength === 1
            ? 1
            : playersLength === 2
            ? 2
            : playersLength === 3
            ? 3
            : 4
        } justify-between px-5`}
      >
        {Array.from({ length: DartCtx.players.length }, (_, index) => (
          <div key={index} className="w-full">
            <div>
              {DartCtx.players.map((player, i) =>
                index === i ? (
                  <Fragment key={i}>
                    <h1 className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center">
                      {player.name} ({player.totalPoints})
                    </h1>
                    {
                      <Input
                        setFunc={setIsInputActive}
                        onChange={(value, event) =>
                          playerInputHandler(value, index, event)
                        }
                      />
                    }
                  </Fragment>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
