import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import PostPreview from "../components/post-preview";

type Props = {
    allPosts: Post[]
}

const Index = ({allPosts}: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Blog BetterCallJohn — Retours d'expériences sur la vie d'entrepreneur, directeur technique,
                        manager et père de famille</title>
                </Head>
                <Container>
                    <Header/>

                    <section className="flex-col flex md:w-1/2 m-auto mt-6">
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left">Blog</h1>

                        {allPosts.map((post) => (
                            <PostPreview
                                key={post.slug}
                                title={post.title}
                                date={post.date}
                                slug={post.slug}
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
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: {allPosts},
    }
}
