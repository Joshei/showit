import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeListing1 = () => {
    return (
    <div>
        <h1>On Code List Page 1</h1>
        <Link to="/">Go to Home Page</Link>
    </div>
    );
};
export default CodeListing1;