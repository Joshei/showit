import './App.css';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import CodeListing1 from './2.jsx';


//code listing link: https://chatgpt.com/c/6758f241-9774-8003-aec4-d90195cc1b3f
function App() {


    return (
      <div>
       
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Code-listing1" element={<CodeListing1/>} />
     </Routes>
     </BrowserRouter>
     </div>

    )  
  }


export default App;
