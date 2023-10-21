import { ReactNode, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  children: ReactNode;
  setAlertVisibility: React.Dispatch<boolean>;
}

const Alert = ({ children, setAlertVisibility }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setAlertVisibility(false);
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
