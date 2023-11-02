import { useState } from "react";
import "./movie-add-form.css";

const MovieAddForm = ({ addFrom }) => {
  const [state, setState] = useState({ name: "", views: "" });

  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.views === "") return;
    const data = { name: state.name, viewers: state.views };
    addFrom(data);
    setState({ name: "", viewers: "" });
  };

  return (
    <div className="movie-add-form">
      <h3>Yangi kino qoshish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          onChange={changeHandlerInput}
          name="name"
          value={state.name}
        />
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Nechi marotaba korilgan?"
          onChange={changeHandlerInput}
          name="views"
          value={state.views}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qoshish
        </button>
      </form>
    </div>
  );
};
export default MovieAddForm;
