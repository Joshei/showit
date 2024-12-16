import {React} from "react";
import {Link} from 'react-router-dom';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codelist1 from './codelist1.jsx'
import "./listing-styles.css";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';





//language =  'javascript'
const CodeListing1 = ({ code}) => {

    return (
        <div>
        <div>
        <h1>Gallery Image Project</h1>
        <div className = "link">
        <a href="/">Go to Home Page</a>
        </div>
        </div>
        <div>
        <SyntaxHighlighter language= 'javascript' style={docco}>
          {code}
        </SyntaxHighlighter>
        </div>
        </div>
      );
    }
    ;


    export default CodeListing1;
