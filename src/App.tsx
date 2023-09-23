import { Fragment, useContext } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { DartContext } from "./store/dart-context";

function App() {
  const DartCtx = useContext(DartContext);
  const winner = DartCtx.players.find((player) => player.totalPoints === 0);

  // console.log(winner)

  return (
    <Fragment>
      {!DartCtx.winner && (
        <Fragment>
          {!DartCtx.isSubmitted && <Form />}
          {DartCtx.isSubmitted && <Table />}
        </Fragment>
      )}
      {DartCtx.winner && (
        <div className="text-5xl font-bold flex justify-center mt-96 text-red-500">
          {/* <button onClick={() => DartCtx.setIsSubmitted(false)}>
            Start again
          </button> */}
          <h1>AAAAAAAAAAND THE WINNER IS - {winner?.name}!</h1>
        </div>
      )}
    </Fragment>
  );
}

export default App;
