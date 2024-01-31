import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTodos();
    return () => {
      // at exit of component
    };
  }, []); // [dependency list to re-render]

  function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }

  return (
    <div>
      <h3>useEffect Hook</h3>
      <p>useEffect is a React Hook that lets you synchronize a component with an external system.</p>
      <p> {isLoading ? "please wait..." : "Content are loaded from API"} </p>
      {!isLoading && <> {JSON.stringify(data, 2)} </>}

      <hr />
    </div>
  );
}

export default UseEffectHook;
