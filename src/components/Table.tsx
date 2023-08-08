import { Fragment, useContext } from "react";
import { DartContext } from "../store/dart-context";

const Table = () => {
  const DartCtx = useContext(DartContext);

  return (
    <Fragment>
      <h1 className="text-4xl">ტაბლო</h1>
      <table>
        <thead>
          <tr>
            {Array.from({ length: DartCtx.playerQuantity }, (_, index) => (
              <th
                key={index}
                className="bg-red-400 w-96 h-96 border-2 border-black"
              >
                {Object.values(DartCtx.playerNames).map((name) => (
                  <h1>{name}</h1>
                ))}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default Table;
