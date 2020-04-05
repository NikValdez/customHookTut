import React from 'react'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [text, setText] = useLocalStorage('text', '')
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => setText('')}>Reset</button>
    </div>
  )
}

export default App
