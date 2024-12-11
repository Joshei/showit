import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codelist1 from './codelist1.jsx'
import "./listing-styles.css";

const CodeListing1 = () => {
    return (
    <div>
        <h1>On Code List Page 1</h1>
        <Link className = "link"  to="/">Go to Home Page</Link>
    </div>
    );
};
export default CodeListing1;