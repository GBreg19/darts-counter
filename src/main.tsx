import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DartContextProvider from "./store/dart-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DartContextProvider>
    <App />
  </DartContextProvider>
);
