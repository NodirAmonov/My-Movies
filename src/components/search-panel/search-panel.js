import { useState } from "react";
import "./search-panel.css";

const SearchPanel = (props) => {
  const [term, setTerm] = useState("");

  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    updateTermHandler(term);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolar qidirish"
      onChange={updateTermHandler}
      value={term}
    />
  );
};

export default SearchPanel;
