import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/ProfilePage'
import Login from './pages/LoginPage'

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login/>} />
              {/* <Route path="/signup" element={<SignupPage/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
