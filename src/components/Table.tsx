import { useContext } from "react";
import { DartContext } from "../store/dart-context";
import Input from "../layout/Input";

const Table = () => {
  const DartCtx = useContext(DartContext);

  return (
    <div className="w-1/2 m-auto bg-white rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 py-5">
      <h1 className="text-4xl text-center">Let's Play!</h1>
      <div
        className={`w-full mt-5 grid grid-cols-${DartCtx.players.length} justify-between px-5`}
      >
        {Array.from({ length: DartCtx.playerQuantity }, (_, index) => (
          <div key={index} className="w-full">
            <div>
              {Object.values(DartCtx.playerNames).map((name, i) =>
                index === i ? (
                  <h1 key={i} className="text-2xl capitalize font-medium bg-gray-200 p-2 text-center">
                    {name} ({DartCtx.maxScore})
                  </h1>
                ) : null
              )}
            </div>
            <div>
              <Input />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
