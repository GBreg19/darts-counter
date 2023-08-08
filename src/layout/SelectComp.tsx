import { Ref, forwardRef } from "react";

type Props = {
  title: string;
  id: string;
  defaultValue: string;
  options: number[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectComp = forwardRef<HTMLSelectElement, Props>(
  (
    { title, id, defaultValue, options, onChange }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <div className="flex gap-3 items-center">
        <label htmlFor={id} className="text-lg">{title}</label>
        <select
          name={id}
          id={id}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
          className="appearance-none bg-white border border-gray-400 focus:border-gray-600 hover:border-gray-500 px-5 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
  }
);

export default SelectComp;
