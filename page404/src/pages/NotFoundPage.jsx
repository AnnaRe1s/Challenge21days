import { NotFound } from "../components/NotFound/NotFound";
import { SpinnerSquares } from "../components/Spinning/Spinning.squares";

const NotFoundPage = () => {
  return (
    <div>
      <SpinnerSquares />
      <NotFound />
    </div>
  );
};

export { NotFoundPage };
