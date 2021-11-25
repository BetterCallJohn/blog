import Container from '../components/container'
import Intro from '../components/intro'
import Social from '../components/social'
import Layout from '../components/layout'
import Header from '../components/header'
import LastContent from '../components/last-content'
import {getAllPodcast, getAllPosts} from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Podcast from '../types/podcast'

type Props = {
    allPosts: Post[]
    allPodcasts: Podcast[]
}

const Index = ({allPosts, allPodcasts}: Props) => {

    const lastPost = allPosts[0]
    const lastPodcast = allPodcasts[0]

    return (
        <>
            <Layout>
                <Head>
                  <title>Bienvenue sur le blog & podcast de BetterCallJohn</title>
                </Head>
                <Container>
                    <Header/>

                    <section className="flex-col flex items-center justify-center  h-home">
                        <Intro/>
                        <Social/>
                        <LastContent post={lastPost} podcast={lastPodcast}/>
                    </section>
                </Container>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'status',
    ])

    const allPodcasts = getAllPodcast([
        'title',
        'date',
        'slug',
    ])

    return {
        props: {allPosts, allPodcasts},
    }
}
