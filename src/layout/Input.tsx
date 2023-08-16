type InpTypes = {
  [key: string]: string;
};

type InpProps = {
  id: number;
  onChange: (val: number, id: string) => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  // value: InpTypes;
  // index: number;
};

const Input = ({ id, onChange, setIsFocused }: InpProps) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inpValue = event.target.value;
    const inpId = event.target.id
    const convertedValue = parseInt(inpValue);
    const convertedId = inpId.toString()
    onChange(convertedValue, convertedId);
    console.log(event.target)
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <input
      type="number"
      id={id.toString()}
      //   name={`player${index + 1}`}
      //   value={value[`player${index + 1}`]}
      placeholder="0"
      className="appearance-none w-full border px-2 py-1 focus:border-dartGreen1 focus:outline-none focus:shadow-outline"
      onChange={onInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
