export default function MateriEmbedVideo({ link }) {
    return (
        <iframe
            className="rounded-xl w-full h-80"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    );
}
