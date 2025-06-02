import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Main from "./pages/Main";
import TeachersList from "./pages/TeachersList";
import Teacher from "./pages/Teacher";
import MasterClassesList from "./pages/MasterClassesList";
import MasterClass from "./pages/MasterClass";
import News from "./pages/News";
import Article from "./pages/Article";
import Sidebar from "./comps/Sidebar";
import LessonsList from "./pages/LessonsList";
import Lesson from "./pages/Lesson";

export default function App() {
  return (
    <Router>
      <div className="w-[1920px] h-[1080px] fixed top-0 left-0 flex">
        <Sidebar />
        <Routes>
          <Route path="*" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/teachers" element={<TeachersList />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/masterclasses" element={<MasterClassesList />} />
          <Route path="/masterclass" element={<MasterClass />} />
          <Route path="/lessons" element={<LessonsList />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}
