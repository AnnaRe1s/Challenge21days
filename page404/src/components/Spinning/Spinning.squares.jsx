import "./style.css";
import { useEffect } from "react";

const SpinnerSquares = () => {
  useEffect(() => {
    const teste = document.querySelector(".spinner-search");
    handleSpinner(teste);
  });

  const handleSpinner = (spinner) => {
    setTimeout(() => {
      spinner.style.display = "none";
    }, 5000);
  };

  return (
    <div className="spinner-search">
      <h2 className="spinner-text"> Search page</h2>
      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div>
      </div>
    </div>
  );
};

export { SpinnerSquares };
