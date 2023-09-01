import { useEffect, useState } from "react";
import Heading from "./Heading";
import CreateHabit from "./CreateHabit";
import { Navigate, Link } from "react-router-dom";
import WeekView from "./WeekView";
const DetailView = (props) => {
  const [heading] = useState("DetailView");

  const { handleNewHabit, habits } = props;
  const [isCreatable, setCreatable] = useState(false);
  // const redirect = () => {
  //   <Link to="/weekView" replace={true} />;
  // };
  return (
    <div className="detailView">
      <Heading heading={heading} />
      {/* list down the created habit  */}
      {habits &&
        habits.map((habit) => (
          <Link to={`/weekView/${habit}`}>
            <div>{habit}</div>
          </Link>

          // <div onClick={()=><Navigate to={<WeekView />} />}>{habit}</div>
        ))}
      {/* {console.log("habits :", habits)} */}
      {isCreatable ? (
        <CreateHabit
          handleNewHabit={handleNewHabit}
          setCreatable={setCreatable}
        />
      ) : (
        <button onClick={() => setCreatable(true)}>New Habit</button>
      )}
    </div>
  );
};
export default DetailView;
