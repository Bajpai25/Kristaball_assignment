import {Routes , Route } from "react-router-dom"
import Login from "./pages/Login"

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/"/>
      </Routes>
    </>
  )
}

export default App
