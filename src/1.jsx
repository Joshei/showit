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
        <h1>Sample 
            Page One</h1>
        <Link className = "link"  to="/">Go to Home Page</Link>
        </div>
       
        /////
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
