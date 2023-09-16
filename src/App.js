import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import List from './pages/List/List'
function App() {
    return (
        <div className='app'>
            <Router>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/table' element={<List />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
