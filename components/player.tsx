type Props = {
    url: string
}

const Player = ({url}: Props) => {
    return (
        <div className="max-w-2xl mx-auto">
            <iframe
                src={url}
                width="100%" frameBorder="no" scrolling="no"></iframe>

        </div>
    )
}

export default Player
