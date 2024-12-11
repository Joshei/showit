import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import CodeListing1 from './1.jsx';


const Home = () => {
    return (
    <div>
        <h1>On Home Page</h1>
        <Link to="/Code-listing1">Go to Code Listing</Link>
    </div>
    );
};
export default Home;