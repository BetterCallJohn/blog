import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import {getPostBySlug, getAllPosts} from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import Link from 'next/link'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

const Post = ({post, morePosts, preview}: Props) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
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
                                    {post.title} | Blog BetterCallJohn
                                </title>
                            </Head>
                            <PostHeader
                                title={post.title}
                                date={post.date}
                                coverImage={post.coverImage}
                            />
                            <PostBody content={post.content}/>

                            <div className="max-w-2xl mx-auto mt-6">
                                <Link as={`/blog`} href="/blog">
                                    <a className="underline">← Tous les articles</a>
                                </Link>
                            </div>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Post

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({params}: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}
