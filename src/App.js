import Home from './Routes/Home/Home';
import Project from './Routes/Project/Project';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>

      <Route element={<Home></Home>} path='/'></Route>
      <Route element={<Project></Project>} path='/project'></Route>
      <Route element={<About></About>} path='/about'></Route>
      <Route element={<Contact></Contact>} path='/contact'></Route>

    </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
