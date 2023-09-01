import { useState } from "react";
import Heading from "./Heading";
import { useParams, useNavigate } from "react-router-dom";
const WeekView = (props) => {
  const { handleRemove } = props;
  const { habit } = useParams();
  const history = useNavigate();
  // console.log("history :", history);
  const [heading] = useState("weekView");
  const back = () => {
    history(-1);
  };
  return (
    <>
      <Heading heading={heading} />
      <button onClick={back}>back</button>
      <button onClick={() => handleRemove(habit)}>Delete</button>
      <div>{habit}</div>
    </>
  );
};
export default WeekView;
