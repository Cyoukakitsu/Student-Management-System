import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ScoreList from "./features/score/ScoreList";
import StudentList from "./features/student/StudentList";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Profile from "./features/user/Profile";
import ScoreEdit from "./features/score/ScoreEdit";
import StudentEdit from "./features/student/StudentEdit";
import ScoreUpload from "./features/score/ScoreUpload";
import StudentCreate from "./features/student/StudentCreate";

import AppLayout from "./ui/Applayout";
import Home from "./pages/home";

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
              <Route path="upload" element={<ScoreUpload />} />
            </Route>
            <Route path="student">
              <Route path="" element={<StudentList />} />
              <Route path=":id" element={<StudentEdit />} />
              <Route path="create" element={<StudentCreate />} />
            </Route>
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
