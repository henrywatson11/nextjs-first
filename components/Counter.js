import { useState } from 'react';

// Counter component that accepts props for incrementAmount and buttonColor
function Counter({ incrementAmount, buttonColor }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count + incrementAmount > 10) {
      setCount(0);  // Reset to 0 if the count exceeds 10
    } else {
      setCount(count + incrementAmount);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Count: {count}</p>
      <button
        onClick={handleIncrement}
        style={{
          padding: '10px 20px',
          backgroundColor: buttonColor,
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Increment by {incrementAmount}
      </button>
    </div>
  );
}

// Component that renders two instances of Counter with different props
export default function CounterWithReset() {
  return (
    <div>
      <h2>Two Counter Instances with Different Increments</h2>
      {/* First counter: Increment by 1 and button color is blue */}
      <Counter incrementAmount={1} buttonColor="blue" />
      {/* Second counter: Increment by 2 and button color is green */}
      <Counter incrementAmount={2} buttonColor="green" />
    </div>
  );
}
