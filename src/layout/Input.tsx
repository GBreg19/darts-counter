type InpTypes = {
  [key: string]: string;
};

type InpProps = {
  onChange: (val: number) => void;
  setFunc: React.Dispatch<React.SetStateAction<boolean>>;
  value: InpTypes;
  index: number;
};

const Input = ({ onChange, setFunc, value, index }: InpProps) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inpValue = event.target.value;
    const convertedValue = parseInt(inpValue);
    onChange(convertedValue);
  };

  const onFocus = () => setFunc(true);
  const onBlur = () => setFunc(false);

  return (
    <input
      type="number"
      id="scoreInp"
      name={`player${index + 1}`}
      value={value[`player${index + 1}`]}
      placeholder="0"
      className="appearance-none w-full border px-2 py-1 focus:border-dartGreen1 focus:outline-none focus:shadow-outline"
      onChange={onInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
