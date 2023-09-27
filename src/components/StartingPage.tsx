import { useContext } from "react";
import { GiDart } from "react-icons/gi";
import { DartContext } from "../store/dart-context";

const StartingPage = () => {
  const DartCtx = useContext(DartContext);
  const backgroundImageUrl = "./images/starting-page.jpg";

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full h-screen relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute top-1/3 left-1/4">
        <div className="relative">
          <div className="flex cursor-pointer group">
            <span className="transform rotate-90 absolute -left-10 top-1/4 -translate-y-1/3">
              <GiDart className="transform rotate-45 text-3xl text-yellow-600 group-hover:text-yellow-500" />
            </span>
            <h1 className="text-4xl font-bold mb-5 font-lobsterReg tracking-wide text-red-700 group-hover:text-red-600">
              Darts Counter
            </h1>
            <span className="transform -rotate-90 absolute -right-10 top-1/4 -translate-y-1/3">
              <GiDart className="transform rotate-45 text-3xl text-yellow-600 group-hover:text-yellow-500" />
            </span>
            <span></span>
          </div>
        </div>
        <button
          onClick={() => DartCtx.setIsStartingPage(false)}
          title="Click to Play!"
          className="bg-gradient-to-r from-dartGreen from-50%  to-dartRed to-50% border-2 border-transparent hover:from-dartRed hover:to-dartGreen text-white font-semibold text-xl py-3 w-48 rounded group"
        >
          <span className="flex justify-around">
            <span className="group-hover:text-black w-20">Start</span>
            <span className="text-black group-hover:text-white w-20">
              Playing
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default StartingPage;
