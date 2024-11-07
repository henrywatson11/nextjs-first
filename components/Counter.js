import React, { useState } from 'react';

function Counter({ incrementAmount }) {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount(count + incrementAmount);
    };
  
    return (
      <div style={{ marginBottom: '20px' }}>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>
          Increment by {incrementAmount}
        </button>
      </div>
    );
  }
  
  // TwoCounters component with two instances of Counter
  export default function TwoCounters() {
    return (
      <div>
        <h2>Two Counter Instances with Different Increments</h2>
        <Counter incrementAmount={1} />  {/* Counter increments by 1 */}
        <Counter incrementAmount={5} />  {/* Counter increments by 5 */}
      </div>
    );
  }
  