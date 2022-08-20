import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
