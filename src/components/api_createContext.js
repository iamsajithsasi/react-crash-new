import React, { createContext } from "react";
import { useState } from "react";

import UseContextHook from "./h_useContext";
// import UseHook from './h_use';

export const ThemeContext = createContext(null);

function CreateContextAPI() {
  const [data, setData] = useState({
    theme: "dark",
    color: "#333",
  });
  return (
    <div>
      <ThemeContext.Provider value={{ data, updateData: setData }}>
        <UseContextHook />
        
        {/* <UseHook /> */}

        <hr />
      </ThemeContext.Provider>
    </div>
  );
}

export default CreateContextAPI;
