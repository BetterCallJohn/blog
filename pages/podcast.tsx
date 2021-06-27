import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import PodcastPreview from '../components/podcast-preview'
import {getAllPodcast} from '../lib/api'
import Head from 'next/head'
import Podcast from '../types/podcast'

type Props = {
    podcasts: Podcast[]
}

const Index = ({podcasts}: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Streetcast BetterCallJohn — Retours d'expériences sur la vie d'entrepreneur, directeur technique, manager et père de famille</title>
                </Head>
                <Container>
                    <Header/>

                    <section className="flex-col flex md:w-1/2 m-auto mt-6">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left">Podcast</h1>

                        {podcasts.map((podcast) => (
                            <PodcastPreview
                                key={podcast.slug}
                                title={podcast.title}
                                date={podcast.date}
                                slug={podcast.slug}
                                duration={podcast.duration}
                            />
                        ))}
                    </section>
                </Container>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    const podcasts = getAllPodcast([
        'title',
        'date',
        'slug',
        'duration',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: {podcasts},
    }
}
