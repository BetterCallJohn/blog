import Head from 'next/head'

const Meta = () => {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>
            <meta
                name="description"
                content={`Retours d'expériences sur la vie d'entrepreneur, directeur technique, manager et père de famille.`}
            />

            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-DDBVWW55J7`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DDBVWW55J7', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
    )
}

export default Meta
