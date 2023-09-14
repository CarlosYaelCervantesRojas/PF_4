import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import EditPersonUser from './pages/EditPersonUser'
import List from './pages/List'
import NewUser from './pages/NewUser'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard/:id" element={<Dashboard/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/edit/user/:id" element={<EditPersonUser/>} />
          <Route path="/list/users/:id" element={<List/>} />
          <Route path="/new/user/:id" element={<NewUser/>} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
