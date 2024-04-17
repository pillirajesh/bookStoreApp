import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default App;
