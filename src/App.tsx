import { Fragment, useContext } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { DartContext } from "./store/dart-context";
import { GiDart } from "react-icons/gi";

function App() {
  const DartCtx = useContext(DartContext);
  const winner = DartCtx.players.find((player) => player.totalPoints === 0);

  const backgroundImageUrl = "./images/starting-page.jpg";

  return (
    <Fragment>
      {DartCtx.isStartingPage && (
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-screen relative"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute top-1/3 left-1/4">
            <div className="relative">
              <div className="flex ">
                <span className="transform rotate-90 absolute -left-10 top-1/4 -translate-y-1/3">
                  <GiDart className="transform rotate-45 text-3xl text-yellow-600" />
                </span>
                <h1 className="text-4xl font-bold mb-5 font-lobsterReg tracking-wide">Darts Counter!</h1>
                <span className="transform -rotate-90 absolute -right-10 top-1/4 -translate-y-1/3">
                  <GiDart className="transform rotate-45 text-3xl text-yellow-600" />
                </span>
                <span></span>
              </div>
            </div>
            <button
              onClick={() => DartCtx.setIsStartingPage(false)}
              className="bg-gradient-to-r from-dartGreen from-50%  to-dartRed to-50% border-2 border-black border-transparent hover:from-dartRed hover:to-dartGreen hover:border-white text-white font-semibold text-xl py-3 w-48 rounded group"
            >
              <span className="flex justify-around">
                <span className="group-hover:text-black">Start</span>
                <span className="text-black group-hover:text-white">
                  Playing
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
      {!DartCtx.isStartingPage && (
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
      )}
    </Fragment>
  );
}

export default App;
