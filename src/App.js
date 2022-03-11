import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Theme from './styles/theme'
import Main from './components/Main'
import Login from './components/Login'
import NotFoundPage from './components/NotFoundPage'

const App = () => (
  <Theme>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Theme>
)
export default App
