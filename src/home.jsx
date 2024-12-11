import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
//import codelist1 from './codelist1.jsx';
import "./home-styles.css";


const Home = () => {
    return (
    <div>
        <h1>On Home Page</h1>
        <div className = "lists">
        <Link className = "top-list" to="/Code-listing1">Go to Code 1 Listing</Link>
        <Link className = "list" to="/Code-listing2">Go to Code 2 Listing</Link>
        <Link className = "list" to="/Code-listing3">Go to Code 3 Listing</Link>
        </div>
    </div>
    );
};
export default Home;