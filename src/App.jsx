import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ecosystem from './pages/Ecosystem'
import Info from './pages/Info'
import Team from './pages/Team'
import Partner from './pages/Partner'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/info" element={<Info />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App