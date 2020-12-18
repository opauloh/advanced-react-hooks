// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action),
// })
const countReducer = (state, action) => {
  if (action.type === 'INCREMENT')
    return {...state, count: state.count + action.step}

  return state
}

function Counter({initialCount = 0, step = 1}) {
  // const [{count}, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  const [{count}, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // const increment = () =>
  // setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter step={3} />
}

export default App
