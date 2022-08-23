import { useState } from "react";
import "./Style.css";

const ContadorDePalavras = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const howManyWords = () => {
    const word = text.split(" ");
    return word.filter((words) => words !== "");
  };
  const howManyLetters = () => {
    const word = text.split(" ");
    const filter = word.filter((words) => words !== "");

    let counter = 0;
    for (let i = 0; i < filter.length; i++) {
      counter += filter[i].length;
    }

    return counter;
  };

  return (
    <div className="contador-container">
      <div className="container-glassmorphism">
        <div className="input-container">
          <textarea
            type="text"
            id="text"
            className="text-input"
            autoComplete="off"
            placeholder="Describe your text "
            onChange={handleChange}
          />
          <label className="label" for="username">
            Text
          </label>
        </div>
        <div className="contador-text">
          <h2>
            Seu texto tem <span>{howManyWords().length} </span> palavras
          </h2>
          <h2>
            Seu texto tem <span>{howManyLetters()}</span> Letras
          </h2>
        </div>
      </div>
    </div>
  );
};

export { ContadorDePalavras };
