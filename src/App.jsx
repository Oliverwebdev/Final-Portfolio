import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Aboutme from './sites/Aboutme';
import Projects from './sites/Projects';
import MyWay from './sites/MyWay';
import Contact from './sites/Contact';
import NavBar from './components/NavBar';
import SkillTree from './sites/SkillTree';
import Achievements from './sites/Achievements';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-way" element={<MyWay />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/skilltree' element={<SkillTree />} />
        <Route path="*" element={<Navigate to="/about-me" />} />
      </Routes>
    </Router>
  );
}

export default App;
