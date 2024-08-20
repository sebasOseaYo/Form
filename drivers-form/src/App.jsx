import { Route, Routes } from 'react-router-dom'
import form from './components/Form/form'


function App() {

  return (
    <Routes>
      <Route Component={form} path="/" />
    </Routes>
  )
}

export default App
