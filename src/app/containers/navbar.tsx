'use client'

import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Navbar: React.FC = () => {
    const location = useLocation();
    return (
        <div className='nav flex flex-row items-center h-16'>
            <span className="navbar-logo flex flex-row items-center gap-2 pl-8">
                <img src="techno.svg" alt="" />
                <a href="/">Technoclass</a>
            </span>
            <ul className="navbar-as flex flex-row justify-center gap-11 w-full">
                <li>
                    <a className={location.pathname === '/' ? 'active-link' : ''} href="/">Home</a>
                </li>
                <li>
                    <a href="/sks">Technodisplay</a>
                </li>
                <li>
                    <a href="/">Technocamera</a>
                </li>
                <li>
                    <a href="/">Some Product</a>
                </li>
                <li>
                    <a href="/">Some Product</a>
                </li>
                <li>
                    <a href="/">Some Product</a>
                </li>
                <li>
                    <a href="/">Some Product</a>
                </li>
                <li>
                    <a href="">
                        <IconSearch/>
                    </a>
                </li>
            </ul>
            <div className="mobile">
                <img src="navmenu.svg" alt="" />
            </div>
        </div>
    );
};
const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="/" element={<div>Technodisplay</div>} />
                <Route path="/" element={<div>Technocamera</div>} />
                <Route path="/" element={<div>Some Product</div>} />
            </Routes>
        </Router>
    );
};
export default App;