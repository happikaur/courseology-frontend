import './App.css';
import CourseHome from './containers/CourseHome/CourseHome';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Courses from './components/Courses/Courses';


function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<CourseHome />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/add-course" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
