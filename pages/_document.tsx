import Document, {Html, Head, Main, NextScript} from 'next/document'

import {config, dom} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            <Head>
                <style>{dom.css()}</style>
                <script id="mcjs" dangerouslySetInnerHTML={{__html: '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b10bf3265527eb5ac53cb777f/bc347c85910ae2f36add11af2.js");'}}></script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        )
    }
}
