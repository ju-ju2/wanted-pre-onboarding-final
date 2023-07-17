import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sick from "./pages/sick";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="sick" element={<Sick />} />
      </Routes>
    </Router>
  );
}

export default App;
