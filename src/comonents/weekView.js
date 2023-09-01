import { useState } from "react";
import Heading from "./Heading";
const WeekView = () => {
  const [heading] = useState("weekView");
  return <Heading heading={heading} />;
};
export default WeekView;
