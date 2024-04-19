import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './Pages/HomePage/HomePage.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
    </Router>
  );
}