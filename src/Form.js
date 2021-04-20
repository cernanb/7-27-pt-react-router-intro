import React from "react";
import { withRouter } from "react-router-dom";

function Form(props) {
  const submit = (e) => {
    e.preventDefault();
    props.history.push("/");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" />
        <input type="submit" value="Create the Thing" />
      </form>
    </div>
  );
}

export default withRouter(Form);
