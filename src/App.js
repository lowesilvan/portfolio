import Profile from './Components/Home/Profile';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Components/ContactMe/Contact';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import NotFound from './Components/ErrorPages/NotFound';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile/>} />
            <Route path="/Portfolio" element={<Profile />} />
            <Route>
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
