import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
    title: string
    coverImage: string
    date: string
}

const PostHeader = ({title, coverImage, date}: Props) => {
    return (
        <div className="mt-4">
            <PostTitle>{title}</PostTitle>

            <div className="mb-8 md:mb-16 sm:mx-0">
                <div className="text-dgrey text-md mb-8 text-center">
                    <DateFormatter dateString={date}/>
                </div>
                <CoverImage title={title} src={coverImage}/>
            </div>
        </div>
    )
}

export default PostHeader
