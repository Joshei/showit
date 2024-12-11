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

        <div className = "lists">
        <Link className = "top-list" to="/Code-listing1">Go to Code 1 Listing</Link>
        <Link className = "list" to="/Code-listing2">Go to Code 2 Listing</Link>
        <Link className = "list" to="/Code-listing3">Go to Code 3 Listing</Link>
        </div>
    </div>
    );
};
export default Home;