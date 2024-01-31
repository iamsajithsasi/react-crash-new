import React, { use } from "react";
import { ThemeContext } from "./api_createContext";

// supported in 18.3 similar to useContext
function UseHook() {
  const { data, updateData } = use(ThemeContext);
  return (
    <div>
      <h3>Use Hook</h3>
      <p>use is a React Hook that lets you read the value of a resource like a Promise or context.</p>

      {console.log(data)}
    </div>
  );
}

export default UseHook;
