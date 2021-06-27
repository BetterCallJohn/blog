import Document, {Html, Head, Main, NextScript} from 'next/document'

import {config, dom} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            <Head>
                <style>{dom.css()}</style>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        )
    }
}
