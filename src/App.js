import './App.css';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import CodeListing1 from './1.jsx';
import CodeListing2 from './2.jsx';
import CodeListing3 from './3.jsx';


//code listing link: https://chatgpt.com/c/6758f241-9774-8003-aec4-d90195cc1b3f
function App() {


    return (
      <div>
       
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Code-listing1" element={<CodeListing1/>} />
         <Route path="/Code-listing2" element={<CodeListing2/>} />
         <Route path="/Code-listing3" element={<CodeListing3/>} />
     </Routes>
     </BrowserRouter>
     </div>

    )  
  }


export default App;
