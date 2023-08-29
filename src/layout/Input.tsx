import { useContext } from "react";
import { DartContext } from "../store/dart-context";

type InpProps = {
  name: string | null;
  value: number | null;
  onChange: (name: string, val: number) => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input = ({ onChange, setIsFocused, name, value }: InpProps) => {
  const DartCtx = useContext(DartContext);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inpValue = event.target.value;
    const name = event.target.name;
    const convertedValue = parseInt(inpValue);
    onChange(name, convertedValue);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedPlayer = [...DartCtx.players];
    const updatingPlayer = updatedPlayer.find((player) => player.name === name);
    if (updatingPlayer!.totalPoints !== 0) {
      updatingPlayer!.totalPoints =
        updatingPlayer!.totalPoints - parseInt(value);
    }
    DartCtx.setPlayers(updatedPlayer);
  };

  return (
    <input
      type="number"
      name={name || undefined}
      value={value || ""}
      placeholder="0"
      className="appearance-none w-full border px-2 py-1 focus:border-dartGreen1 focus:outline-none focus:shadow-outline"
      onChange={onInputChange}
      onFocus={() => setIsFocused(true)}
      onBlur={onBlurHandler}
    />
  );
};

export default Input;
