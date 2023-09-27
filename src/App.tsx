import { Fragment, useContext } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { DartContext } from "./store/dart-context";
import StartingPage from "./components/StartingPage";

function App() {
  const DartCtx = useContext(DartContext);
  const winner = DartCtx.players.find((player) => player.totalPoints === 0);

  return (
    <Fragment>
      {/* {DartCtx.isStartingPage && <StartingPage />} */}
      {/* {!DartCtx.isStartingPage && ( */}
        <>
          {!DartCtx.isSubmitted && <Form />}
          {DartCtx.isSubmitted && <Table />}
          <div
            className={`${
              DartCtx.winner
                ? "absolute top-0 left-0 w-full h-full bg-red-500"
                : "hidden"
            }`}
          >
            <button onClick={DartCtx.startAgain}>Start again</button>
            <h1>AAAAAAAAAAND THE WINNER IS - {winner?.name}!</h1>
          </div>
        </>
      {/* )} */}
    </Fragment>
  );
}

export default App;
