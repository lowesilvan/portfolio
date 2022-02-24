import Profile from './Components/Home/Profile';
import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Navbar />
        <div className="content">
          <Profile />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
