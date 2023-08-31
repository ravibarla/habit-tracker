import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import DetailView from "./comonents/DetailView";
// import Heading from "./comonents/Heading";
import WeekView from "./comonents/weekView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="detailView" element={<DetailView />} />
          <Route path="weekView" element={<WeekView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
