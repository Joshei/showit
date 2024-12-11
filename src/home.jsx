import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
//import codelist1 from './codelist1.jsx';
import "./home-styles.css";
import MainDisplay from "./card.jsx"


const Home = () => {
    return (
    <div>
        
        <h1>Completed Projects</h1>
        <div>
        <MainDisplay/>
        </div>

        
    </div>
    );
};
export default Home;