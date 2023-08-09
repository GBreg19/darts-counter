import { useContext } from "react";
import { DartContext } from "../store/dart-context";

type InpProps = {
  id: number;
};

const Input = ({ id }: InpProps) => {
  const DartCtx = useContext(DartContext);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  };

  return (
    <input
      type="number"
      name="scoreInp"
      id="scoreInp"
      placeholder="0"
      className="appearance-none w-full border px-2 py-1 focus:border-dartGreen1 focus:outline-none focus:shadow-outline"
      onChange={onInputChange}
    />
  );
};

export default Input;
