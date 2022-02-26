import { ChangeEvent } from "react";

type TypeInput = "email";

interface InputPropsInterface {
  type?: TypeInput;
  placeholder?: string;
  errorText?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputPropsInterface) => {
  return (
    <div>
      <input
        className="w-full p-18 rounded-full"
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
