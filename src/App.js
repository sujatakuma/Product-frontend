//import logo from './logo.svg';
import './App.css';
import Create from './Create';
import AllUsers from './AllUsers';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path='/add' element={<Create/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
