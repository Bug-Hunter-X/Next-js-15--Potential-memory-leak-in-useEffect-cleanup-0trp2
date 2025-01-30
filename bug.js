```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a sample paragraph.</p>
      <MyComponent/>
    </div>
  );
}


// components/MyComponent.js

export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Component mounted');
    // Simulate an API call
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>Component Count: {count}</p>
    </div>
  );
}
```