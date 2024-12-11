import './App.css';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import CodeListing1 from './2.jsx';

function App() {


    return (
      <div>
       
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/code-listing1" element={<CodeListing1/>} />
     </Routes>
     </BrowserRouter>
     </div>

    )  
  }


export default App;
