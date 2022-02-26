interface ButtonPropsInterface {
  label?: string;
  onClick?: () => void;
}

const Button = (props: ButtonPropsInterface) => {
  return (
    <button
      onClick={props.onClick}
      className="p-16 bg-gradient-cyan-blue rounded-full w-275 cursor-pointer border-none hover-active-opacity-button"
    >
      <p className="font-700-raleway white">{props.label}</p>
    </button>
  );
};

export default Button;
