import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import Player from '../../components/player'
import DateFormatter from '../../components/date-formatter'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import {getPostBySlug, getAllPosts, getAllPodcast, getPodcastBySlug} from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import {CMS_NAME} from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import PodcastType from '../../types/podcast'
import Link from 'next/link'

type Props = {
    podcast: PodcastType
    morePosts: PodcastType[]
    preview?: boolean
}

const Podcast = ({podcast, morePosts, preview}: Props) => {
    const router = useRouter()
    if (!router.isFallback && !podcast?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header/>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32 mt-6">
                            <Head>
                                <title>
                                    {podcast.title} | Podcast BetterCallJohn
                                </title>
                            </Head>
                            <PostTitle>{podcast.title}</PostTitle>
                            <div className="max-w-2xl mx-auto">
                                <div className="mb-6 text-md text-dgrey text-center">
                                    <DateFormatter dateString={podcast.date}/>
                                </div>
                            </div>
                            <PostBody content={podcast.content}/>
                            <Player url={podcast.iframe}/>

                            <div className="max-w-2xl mx-auto mt-6">
                                <Link as={`/podcast`} href="/podcast">
                                    <a className="underline">← Tous les épisodes</a>
                                </Link>
                            </div>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Podcast

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({params}: Params) {
    const podcast = getPodcastBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'iframe',
    ])
    const content = await markdownToHtml(podcast.content || '')

    return {
        props: {
            podcast: {
                ...podcast,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const podcasts = getAllPodcast(['slug'])

    return {
        paths: podcasts.map((podcast) => {
            return {
                params: {
                    slug: podcast.slug,
                },
            }
        }),
        fallback: false,
    }
}
