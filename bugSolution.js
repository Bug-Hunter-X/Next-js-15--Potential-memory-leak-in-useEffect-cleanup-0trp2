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
import React, { useState, useEffect, useRef } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log('Component mounted');
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Component Count: {count}</p>
    </div>
  );
}
```