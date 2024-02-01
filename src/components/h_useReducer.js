import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

function UseReducerHook() {
  const [data, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <div>
      <h3>UseReducer Hook</h3>

      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {data.age}.</p>

      <hr />
    </div>
  );
}

export default UseReducerHook;
