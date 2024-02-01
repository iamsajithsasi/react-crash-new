### [CreateContext API](src/components/api_createContext.js) / [UseContext Hook](src/components/h_useContext.js)

```javascript
const ThemeContext = createContext({ name: "John" });
const data = useContext(ThemeContext);
<p>{data.name}</p>;
```

### [UseEffect Hook](src/components/h_useEffect.js)

```javascript
useEffect(() => {
  fetchTodos();
  return () => {
    // at exit of component
  };
}, []); // [dependency list to re-render]
```

### [UseState Hook](src/components/h_useState.js)

```javascript
const [userData, setUserData] = useState(data);

// Method 1
setUserData({
  user: "Miley",
  age: 22,
});

// Method 2
setUserData((dt) => ({ ...dt, user: "Miley", age: 22 }));
```

### [UseRef Hook](src/components/h_useRef.js)

```javascript
const countElemRef = useRef(null);
let count = useRef(0);
const [counter, setCounter] = useState(count.current);

// Method 1
let cElem = countElemRef.current.innerHTML;
setCounter((c) => Number(cElem) + 1);

// Method 2
setCounter((c) => c + 1);

<p>
  Count <span ref={countElemRef}>{counter}</span>
</p>;
```

### [UseReducer Hook](src/components/h_useReducer.js)

```javascript
function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

const [data, dispatch] = useReducer(reducer, { age: 42 });

<button
  onClick={() => {
    dispatch({ type: "incremented_age" });
  }}
>
  Increment age
</button>;
```
