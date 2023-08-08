import { Fragment, useContext } from "react";
import { DartContext } from "../store/dart-context";

const Table = () => {
  const DartCtx = useContext(DartContext);

  return (
    <div className="w-1/2 m-auto bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-5">
      <h1 className="text-4xl text-center">Let's Play!</h1>
      <div className="w-full border-2 border-red-300 mt-5 flex justify-between">
        {Array.from({ length: DartCtx.playerQuantity }, (_, index) => (
          <div className="border border-black">
            <div key={index} >
              {Object.values(DartCtx.playerNames).map((name, i) =>
                index === i ? <h1 key={i}>{name} ({DartCtx.maxScore})</h1> : null
              )}
            </div>
            <div>
              <h1>ragaca</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
