import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import DataView from './components/DataView/DataView';

const App = () => {
    return (
        <Router>
            <div className="App">
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/table" element={<DataView />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
