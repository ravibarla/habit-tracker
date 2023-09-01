import { useState } from "react";

const CreateHabit = (props) => {
  const [newHabit, setNewHabit] = useState("");
  const { handleNewHabit, setCreatable } = props;
  const handleForm = (e) => {
    e.preventDefault();
    handleNewHabit(newHabit);
    setCreatable(false);
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input
        placeholder="enter the habit"
        onChange={(e) => setNewHabit(e.target.value)}
      />
      <button>Add </button>
    </form>
  );
};
export default CreateHabit;
