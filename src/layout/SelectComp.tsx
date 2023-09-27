import { useContext } from "react";
import { DartContext } from "../store/dart-context";

type Props = {
  title: string;
  id: string;
  defaultValue: string;
  options: number[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectComp = ({ title, id, defaultValue, options, onChange }: Props) => {
  const DartCtx = useContext(DartContext);

  return (
    <div className="flex gap-3 items-center">
      <label htmlFor={id} className="text-lg">
        {title}
      </label>
      <select
        name={id}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`appearance-none bg-white border px-5 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${
          DartCtx.errors[id]
            ? "border-red-400 focus:border-red-600 hover:border-red-500"
            : "border-gray-400 focus:border-gray-600 hover:border-gray-500"
        }`}
      >
        <option disabled value={defaultValue}>
          {defaultValue}
        </option>
        <option>{options[0]}</option>
        <option>{options[1]}</option>
        <option>{options[2]}</option>
        <option>{options[3]}</option>
      </select>
    </div>
  );
};

export default SelectComp;
