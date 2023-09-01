import { useState } from "react";
import Heading from "./Heading";
const DetailView = (props) => {
  const [heading] = useState("DetailView");
  return <Heading heading={heading}/>;
}
export default DetailView;
