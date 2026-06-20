// Redux Toolkit se configureStore import kar rahe hain
import { configureStore } from '@reduxjs/toolkit'

// Counter reducer import kar rahe hain
import counterReducer from "./feature/counter"

// Redux store create kar rahe hain
export default configureStore({

  // Sare reducers yaha register hote hain
  reducer: {

    // State ka naam "counter" hoga
    counter: counterReducer

  }
})