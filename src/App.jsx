// React import kar rahe hain
import React from "react";

// Redux ke hooks import kar rahe hain
import { useSelector, useDispatch } from "react-redux";

// Actions import kar rahe hain
import { increment, decrement } from "./redux/feature/counter";

const App = () => {

  // Redux store se count value read kar rahe hain
  const count = useSelector((state) => state.counter.value);

  // Dispatch function le rahe hain
  const dispatch = useDispatch();

  return (
    <div>

      {/* Current count display kar rahe hain */}
      <h1>Count: {count}</h1>

      {/* Button click hone par increment action dispatch hoga */}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      {/* Button click hone par decrement action dispatch hoga */}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

    </div>
  );
};

export default App;


//
// User Clicks Button
//         ↓
// dispatch(action)
//         ↓
// Redux Action
//         ↓
// Reducer
//         ↓
// State Update
//         ↓
// Store Update
//         ↓
// useSelector()
//         ↓
// UI Re-render//