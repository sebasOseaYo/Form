import { Route, Routes } from 'react-router-dom'
import forms from './pages/Forms/forms'

function App() {

  return (
    <Routes>
      <Route Component={forms} path="/" />
    </Routes>
  )
}

export default App
