type InpProps = {
  onChange: (val: number, event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InpProps) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const convertedValue = parseInt(value);
    onChange(convertedValue, event);
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
