import HomePage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blog/:topic" element={<BlogPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
