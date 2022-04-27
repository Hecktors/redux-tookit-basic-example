import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})

export default store

// Before toolkit

// import { createStore } from 'redux'

// const initialState = {
//   counter: 0,
//   showCounter: false,
// }

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, counter: state.counter + 1 }
//     case 'decrement':
//       return { ...state, counter: state.counter - 1 }
//     case 'toggle':
//       return { ...state, isDisplayed: !state.isDisplayed }
//     default:
//       return state
//   }
// }

// const store = createStore(counterReducer)

// export default store
