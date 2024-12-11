import {React, useEffect} from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
    <div>
        <h1>On Home Page</h1>
        <Link to="/code-listing1">Go to Code Listing</Link>
    </div>
    );
};
export default Home;