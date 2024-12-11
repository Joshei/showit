import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codelist2 from './codelist2.jsx'


const CodeListing2 = () => {
    return (
    <div>
        <h1>On Code List Page 2</h1>
        <Link className = "link"  to="/">Go to Home Page</Link>
    </div>
    );
};
export default CodeListing2;