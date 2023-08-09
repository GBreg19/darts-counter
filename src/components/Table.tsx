import { Fragment, useContext } from "react";
import { DartContext } from "../store/dart-context";
import Input from "../layout/Input";
import { LuRefreshCcw } from "react-icons/lu";

const Table = () => {
  const DartCtx = useContext(DartContext);

  return (
    <div className="w-1/2 m-auto bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-5">
      <div className="relative">
        <h1 className="text-4xl text-center">Let's Play!</h1>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-10 text-xl"
          title="Refresh"
          onClick={() => DartCtx.setIsSubmitted(false)}
        >
          <LuRefreshCcw />
        </button>
      </div>
      <div
        className={`w-full mt-5 grid grid-cols-${DartCtx.players.length} justify-between px-5`}
      >
        {Array.from({ length: DartCtx.players.length }, (_, index) => (
          <div key={index} className="w-full">
            <div>
              {DartCtx.players.map((player, i) =>
                index === i ? (
                  <Fragment key={i}>
                    <h1 className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center">
                      {player.name} ({player.score})
                    </h1>
                    <Input id={i} />
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
