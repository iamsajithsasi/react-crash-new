### CreateContext

```javascript
const ThemeContext = createContext({ name: "John" });
const data = useContext(ThemeContext);
<p>{ data.name }</p>
```

### UseEffectHook

```javascript
useEffect(() => {
  fetchTodos();
  return () => {
    // at exit of component
  };
}, []); // [dependency list to re-render]
```
