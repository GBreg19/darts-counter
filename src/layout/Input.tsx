import { useContext, useEffect } from "react";
import { DartContext } from "../store/dart-context";

type InpProps = {
  id: number;
  onChange: (val: number, id: string, name: string) => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  name: string | null;
  value: number | null;
};

const Input = ({ id, onChange, setIsFocused, name, value }: InpProps) => {
  const DartCtx = useContext(DartContext);

  useEffect(() => {
    if (name !== null) {
      DartCtx.setInputValues((prevState) => ({ ...prevState, [name]: "" }));
    }
  }, [name, value]);

  const key = Object.keys(DartCtx.inputValues)
  console.log(key.map((x) => x));

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inpValue = event.target.value;
    const inpId = event.target.id;
    const name = event.target.name;
    const convertedValue = parseInt(inpValue);
    const convertedId = inpId.toString();
    onChange(convertedValue, convertedId, name);
  };

  return (
    <input
      type="number"
      id={id.toString()}
      // name={keys}
      value={value !== null ? value.toString() : ""}
      placeholder="0"
      className="appearance-none w-full border px-2 py-1 focus:border-dartGreen1 focus:outline-none focus:shadow-outline"
      onChange={onInputChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Input;
