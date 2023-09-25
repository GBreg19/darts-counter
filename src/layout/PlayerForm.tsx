type PlayerFormProps = {
  playerN: string;
  playerId: number;
  playerVal: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlayerForm = ({
  playerN,
  playerId,
  playerVal,
  onChange,
}: PlayerFormProps) => {
  const convertedId = playerId.toString();

  const inputName: string = playerN ? playerN : "";

  return (
    <div className="flex gap-5 my-3 items-center">
      <label htmlFor={convertedId} className="text-lg basis-2/12">
        {playerN}
      </label>
      <input
        type="text"
        name={inputName}
        id={convertedId}
        value={playerVal}
        placeholder="Type name"
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full basis-10/12"
        onChange={onChange}
      />
    </div>
  );
};

export default PlayerForm;
