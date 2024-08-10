import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
export default (req) => {
    // we should add location because staticRouter can not check the url for location
    const content = renderToString(
       <StaticRouter location={req.url} context={{}}>
            <Routes />
       </StaticRouter>
    );

    return `
    <html>
        <head>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/bundle.js"></script>
        </body>
    </html>
    `
}