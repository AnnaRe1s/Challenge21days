import "./styles.css";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const notification = document.querySelector(".container-border");
    handleContainer(notification);
  });

  const handleContainer = (container) => {
    if (!null) {
      setTimeout(() => {
        container.style.display = "flex";
        container.style.transition = "1s";
        container.style.animationDuration = "4s";
        container.style.animation = "moveup 4s ease-in-out";
      }, 5000);
    }
  };

  return (
    <div className="container-border">
      <div className="container">
        <h1>Opss... </h1>
        <p>We couldn't find the page you're looking for</p>
        <button>Home</button>
      </div>
    </div>
  );
};

export { NotFound };
