type InpProps = {
  onChange: (val: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  setFunc: React.Dispatch<React.SetStateAction<boolean>>;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
  value: string
};

const Input = ({ onChange, setFunc, setInpVal, value }: InpProps) => {

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const convertedValue = parseInt(value);
    setInpVal(value);
    onChange(convertedValue, event);
  };

  const onFocus = () => setFunc(true);
  const onBlur = () => setFunc(false);

  return (
    <input
      type="number"
      name="scoreInp"
      id="scoreInp"
      value={value}
      placeholder="0"
      className="appearance-none w-full border px-2 py-1 focus:border-dartGreen1 focus:outline-none focus:shadow-outline"
      onChange={onInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
