import {React, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codelist3 from './codelist3.jsx'

const CodeListing3 = ({code}) => {
    return (
    <div>
    <div>
        <h1>Text Editor Project</h1>
        <Link className = "link"  to="/">Go to Home Page</Link>
    </div>
    <div>
        <SyntaxHighlighter language= 'javascript' style={docco}>
          {code}
        </SyntaxHighlighter>
        </div>

    </div>


    );
};
export default CodeListing3;