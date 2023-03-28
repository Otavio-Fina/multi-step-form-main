import { useState } from 'react'
import Background from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Background></Background>
    </div>
  )
}

export default App
