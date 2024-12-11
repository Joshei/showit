import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codelist3 from './codelist3.jsx'

const CodeListing3 = () => {
    return (
    <div>
        <h1>On Code List Page 3</h1>
        <Link className = "link" to="/">Go to Home Page</Link>
    </div>
    );
};
export default CodeListing3;