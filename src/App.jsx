import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "./ui/Applayout";
import ScoreList from "./features/score/ScoreList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<ScoreList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
