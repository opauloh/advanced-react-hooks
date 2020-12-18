// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, step) {
  return state + step
}

function Counter({initialCount = 0, step = 1}) {
  const [count, changeCounter] = React.useReducer(countReducer, initialCount)

  const increment = () => changeCounter(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter step={3} />
}

export default App
