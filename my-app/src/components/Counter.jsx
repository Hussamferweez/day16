import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  // Run once when mounted
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount'); // cleanup
    };
  }, []);

  // Run when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h4>{showText ? 'Text is shown' : 'Text is hidden'}</h4>
      <button onClick={() => setShowText(!showText)}>Toggle Text</button>
    </div>
  );
}