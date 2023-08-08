import { Fragment, useContext } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { DartContext } from "./store/dart-context";

function App() {
  const DartCtx = useContext(DartContext);
  return (
    <Fragment>
      {!DartCtx.isSubmitted && <Form />}
      {DartCtx.isSubmitted && <Table />}
    </Fragment>
  );
}

export default App;
