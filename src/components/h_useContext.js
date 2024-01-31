import React, { useContext } from "react";
import { ThemeContext } from "./api_createContext";

export default function UseContextHook() {
  const { data, updateData } = useContext(ThemeContext);

  function updateData_helper() {
    updateData({ ...data, theme: "light", color: "#fff" });
  }

  return (
    <div>
      <h3>UseContext Hook</h3>
      <p>use is a React Hook that lets you read the value of a resource like a Promise or context.</p>

      <p>Current Theme: {JSON.stringify(data, 2)}</p>

      <button onClick={updateData_helper}>Update Context</button>
    </div>
  );
}
