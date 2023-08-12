type InpProps = {
  onChange: (val: number) => void;
};

const Input = ({ onChange }: InpProps) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const convertedValue = parseInt(value);
    onChange(convertedValue);
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
