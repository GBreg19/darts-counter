import { Fragment, useContext, useEffect, useState } from "react";
import { DartContext } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);
  const [isInputActive, setIsInputActive] = useState(false);

  type inpTypes = {
    [key: string]: string;
  };
  const playerInputValues: inpTypes = {};

  for (let i = 1; i < DartCtx.playerQuantity + 1; i++) {
    playerInputValues[`player${i}`] = "";
  }

  const [pointsInputValue, setPointsInputValue] =
    useState<inpTypes>(playerInputValues);

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

  const pointsCalcFunc = () => {
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

        // setInputValue("");
        return updatedPlayers;
      });
    }
  };

  useEffect(() => {
    pointsCalcFunc();
  }, [isInputActive]);

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
                        value={pointsInputValue}
                        index={index}
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
