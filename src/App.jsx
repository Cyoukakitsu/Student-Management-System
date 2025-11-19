import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ScoreList from "./features/score/ScoreList";
import StudentList from "./features/student/StudentList";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";

import Applayout from "./ui/Applayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route path="" element={<Navigate to="/score" />} />
          <Route path="/score" element={<ScoreList />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
