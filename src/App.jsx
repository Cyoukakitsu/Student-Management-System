import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./ui/Applayout";
import ScoreList from "./features/score/ScoreList";
import StudentList from "./features/student/StudentList";

import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Home from "./pages/home";
import Profile from "./features/user/Profile";
import ScoreEdit from "./features/score/ScoreEdit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Navigate to="/home/score" />} />
          <Route path="home" element={<Home />}>
            <Route path="score">
              <Route path="" element={<ScoreList />} />
              <Route path=":id" element={<ScoreEdit />} />
            </Route>
            <Route path="student" element={<StudentList />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
