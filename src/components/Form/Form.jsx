import { useState } from "react";
import toast from "react-hot-toast";

export default function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return toast.error("Input some text");
    onSubmit(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={value} />
      <button type="submit">Search</button>
    </form>
  );
}
