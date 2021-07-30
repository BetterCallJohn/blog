import {AppProps} from 'next/app'
import '../styles/index.css'
import { useRouter } from 'next/router'
import {useEffect} from 'react'

export default function MyApp({Component, pageProps}: AppProps) {

    const pageview = (url) => {
        window.gtag('config', 'G-DDBVWW55J7', {
            page_path: url,
        })
    }

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} />
}
