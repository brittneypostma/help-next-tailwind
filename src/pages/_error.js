import React from "react"
import { 
    faBan, 
    faDollarSign, 
    faDungeon, 
    faFileCircleQuestion, 
    faHourglassEnd, 
    faHouseCrack, 
    faLock, 
    faMugSaucer, 
    faQuestion, 
    faRotate, 
    faRuler, 
    faScaleUnbalancedFlip} from "@fortawesome/free-solid-svg-icons";

import ErrorPageTemplate from "../components/ErrorPageTemplate/ErrorPageTemplate";


let errorIcons = new Map();
errorIcons.set(400, faQuestion);
errorIcons.set(401, faLock);
errorIcons.set(402, faDollarSign);
errorIcons.set(403, faBan);
errorIcons.set(404, faFileCircleQuestion);
errorIcons.set(405, faBan);
errorIcons.set(406, faBan);
errorIcons.set(407, faLock);
errorIcons.set(408, faHourglassEnd);
errorIcons.set(411, faRuler);
errorIcons.set(413, faScaleUnbalancedFlip);
errorIcons.set(414, faScaleUnbalancedFlip);
errorIcons.set(418, faMugSaucer);
errorIcons.set(423, faLock);
errorIcons.set(500, faHouseCrack);
errorIcons.set(502, faDungeon);
errorIcons.set(504, faHourglassEnd);
errorIcons.set(508, faRotate);



let errorTexts = new Map();
errorTexts.set(400, "Bad Request");
errorTexts.set(401, "Unauthorized");
errorTexts.set(402, "Payment Required");
errorTexts.set(403, "Forbidden");
errorTexts.set(404, "Not Found");
errorTexts.set(405, "Method Not Allowed");
errorTexts.set(406, "Not Acceptable");
errorTexts.set(407, "Proxy Authentication Required");
errorTexts.set(408, "Request Timeout");
errorTexts.set(409, "Conflict");
errorTexts.set(410, "Gone");
errorTexts.set(411, "Length Required");
errorTexts.set(412, "Precondition Failed");
errorTexts.set(413, "Payload Too Large");
errorTexts.set(414, "URI Too Long");
errorTexts.set(415, "Unsupported Media Type");
errorTexts.set(416, "Range Not Satisfiable");
errorTexts.set(417, "Expectation Failed");
errorTexts.set(418, "I'm a teapot");
errorTexts.set(421, "Misdirected Request");
errorTexts.set(422, "Unprocessable Entity");
errorTexts.set(423, "Locked");
errorTexts.set(424, "Failed Dependency");
errorTexts.set(425, "Too Early");
errorTexts.set(426, "Upgrade Required");
errorTexts.set(428, "Precondition Required");
errorTexts.set(429, "Too Many Requests");
errorTexts.set(431, "Request Header Fields Too Large");
errorTexts.set(451, "Unavailable For Legal Reasons");

errorTexts.set(500, "Internal Server Error");
errorTexts.set(501, "Not Implemented");
errorTexts.set(502, "Bad Gateway");
errorTexts.set(503, "Service Unavailable");
errorTexts.set(504, "Gateway Timeout");
errorTexts.set(505, "HTTP Version Not Supported");
errorTexts.set(506, "Variant Also Negotiates");
errorTexts.set(507, "Insufficient Storage");
errorTexts.set(508, "Loop Detected");
errorTexts.set(510, "Not Extended");
errorTexts.set(511, "Network Authentication Required");



function GetErrorIcon(statusCode)
{
    return errorIcons.get(Number(statusCode));
}

function GetErrorText(statusCode)
{
    return errorTexts.get(Number(statusCode));
}



function Error({ statusCode }) {

    let statusCodeString = String(statusCode);
    let errorIcon = GetErrorIcon(statusCode);
    let errorText = GetErrorText(statusCode);

    return (
      <ErrorPageTemplate
        ErrorName={statusCodeString}
        ErrorIcon={errorIcon}
      >
        {
            <>
                <span>
                    {
                        (statusCodeString.startsWith('4') ?
                        'A client error occurred: ' :
                        statusCodeString.startsWith('5') ?
                        'A server error occurred: ' :
                        'An error occurred: ') 
                        + statusCodeString
                    }
                </span>
                <span>
                    { errorText ? errorText : null }
                </span>
            </>
        }
      </ErrorPageTemplate>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error