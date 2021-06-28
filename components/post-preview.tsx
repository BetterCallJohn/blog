import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
    title: string
    date: string
    slug: string
}

const PostPreview = ({title, date, slug}: Props) => {
    return (
        <div>
            <div className="mb-5 rounded-md bg-gray-100 px-4 py-3 min-w-full ">
                <h6 className="text-lg">
                    <Link as={`/blog/${slug}`} href="/blog/[slug]">
                        <a>
                            {title}
                        </a>
                    </Link>
                </h6>
                <div className="flex justify-between pt-1">
                    <div className="text-md text-dgrey">
                        <DateFormatter dateString={date}/> &nbsp;· &nbsp;
                        <Link as={`/blog/${slug}`} href="/blog/[slug]">
                            <a className="hover:underline">Lire maintenant</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPreview
