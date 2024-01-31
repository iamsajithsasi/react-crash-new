### [CreateContext](src/components/api_createContext.js) / [UseContext](src/components/h_useContext.js)

```javascript
const ThemeContext = createContext({ name: "John" });
const data = useContext(ThemeContext);
<p>{ data.name }</p>
```

### [UseEffectHook](src/components/h_useEffect.js)

```javascript
useEffect(() => {
  fetchTodos();
  return () => {
    // at exit of component
  };
}, []); // [dependency list to re-render]
```
