import "bootstrap/dist/css/bootstrap.css";

interface Props {
  text: string;
  clickHandler: () => void;
}

const Button = ({ text, clickHandler }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
};

export default Button;
