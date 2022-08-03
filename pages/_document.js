import Document, { Html, Head, Main, NextScript } from "next/document"


export default class MyCocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel='preload'
                        href="/public/static/fonts/IRANSansWeb_Medium.ttf"
                        as="font "
                        crossOrigin="anonymous">

                    </link>

                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}
