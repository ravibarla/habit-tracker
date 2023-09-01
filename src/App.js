import "./App.css";
import { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate,
  Link,
} from "react-router-dom";
import DetailView from "./comonents/DetailView";
// import Heading from "./comonents/Heading";
import WeekView from "./comonents/WeekView";

function App() {
  const [habits, setHabit] = useState([]);
  const removeHabit = (selectedHabit) => {
    setHabit(habits.filter((habit) => habit !== selectedHabit));
  };
  const addHabit = (habit) => {
    // console.log(habits.length);
    // const id = habits.length;
    // console.log(habits);
    // console.log(habit);
    setHabit([...habits, habit]);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<DetailView handleNewHabit={addHabit} habits={habits} />}
          />
          <Route
            path="weekView/:habit"
            element={<WeekView handleRemove={removeHabit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
