import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Movies from './components/pages/Movies';
import Event from './components/pages/Event';
import Sports from './components/pages/Sports';
import Pages from './components/pages/Pages';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Navbar from './components/navbar/Navbar';
import UserTable from './components/pages/UserTable';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/movies' element={<Movies />}/>
                    <Route path='/events' element={<Event />}/>
                    <Route path='/sports' element={<Sports />}/>
                    <Route path='/pages' element={<Pages />}/>
                    <Route path='/blog' element={<Blog />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/users' element={<UserTable />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
