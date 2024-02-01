import React from "react";
import CreateContextAPI from "./components/api_createContext";
import UseEffectHook from "./components/h_useEffect";
import UseStateHook from "./components/h_useState";
import UseRefHook from "./components/h_useRef";
import UseReducerHook from "./components/h_useReducer";

// highlight
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// hljs.registerLanguage("javascript", javascript);

function App() {
  return (
    <>
      <CreateContextAPI />
      <UseEffectHook />
      <UseStateHook />
      <UseRefHook />
      <UseReducerHook />
    </>
  );
}

export default App;
