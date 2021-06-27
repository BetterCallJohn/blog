import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import DateFormatter from './date-formatter'
import Podcast from "../types/podcast";
import Post from "../types/post";

type Props = {
    post: Post
    podcast: Podcast
}

const LastContent = ({post, podcast}: Props) => {
    return (
        <section className="flex-col flex items-center justify-center lg:w-1/3 md:w-1/2">
            <div className="mt-14 rounded-md bg-gray-100 px-4 py-3 min-w-full ">
                <h6>
                    <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                        <a>
                            {post.title}
                        </a>
                    </Link>
                </h6>
                <div className="flex justify-between pt-1">
                    <div className="text-xs text-dgrey">
                        <DateFormatter dateString={post.date} /> &nbsp;· &nbsp;
                        <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                            <a className="hover:underline">Lire maintenant</a>
                        </Link>
                    </div>
                    <div className="text-xs text-dgrey">
                        <Link as={`/blog`} href="/blog">
                            <a className="hover:underline">Tous les articles</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-4 rounded-md bg-gray-100 px-4 py-3 min-w-full ">
                <h6>
                    <Link as={`/podcast/${podcast.slug}`} href="/podcast/[slug]">
                        <a>
                            {podcast.title}
                        </a>
                    </Link>
                </h6>
                <div className="flex justify-between pt-1">
                    <div className="text-xs text-dgrey">
                        <DateFormatter dateString={podcast.date} /> &nbsp;· &nbsp;
                        <Link as={`/podcast/${podcast.slug}`} href="/podcast/[podcast.slug]">
                            <a className="hover:underline">Écouter maintenant</a>
                        </Link>
                    </div>
                    <div className="text-xs text-dgrey">
                        <Link as={`/podcast`} href="/podcast">
                            <a className="hover:underline">Tous les épisodes</a>
                        </Link>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default LastContent
