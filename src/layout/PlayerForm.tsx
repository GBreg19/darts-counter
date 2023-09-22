import { Ref, forwardRef } from "react";

type PlayerFormProps = {
  playerN: string;
  playerId: string;
};

const PlayerForm = forwardRef<HTMLInputElement, PlayerFormProps>(
  ({ playerN, playerId }: PlayerFormProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="flex gap-5 my-3 items-center">
        <label htmlFor={playerId} className="text-lg basis-2/12">
          {playerN}
        </label>
        <input
          type="text"
          name={playerId}
          id={playerId}
          placeholder="Type name"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full basis-10/12"
          ref={ref}
        />
      </div>
    );
  }
);

export default PlayerForm;
