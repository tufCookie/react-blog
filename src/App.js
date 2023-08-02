import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Create from './Create';



function App() {
  const title = 'Welcome to the new blog';
  
  return (
    <Router>
        <div className="App">
          <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/create' element={<Create/>}/>
          </Routes>
        </div>
        </div>
      </Router>
  );
}

export default App;
