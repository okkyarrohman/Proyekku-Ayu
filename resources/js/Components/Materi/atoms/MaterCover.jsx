export default function MateriCover({ cover }) {
    return (
        <img
            src={cover}
            alt="Materi Cover"
            className="rounded-xl w-full h-80 object-cover"
        />
    );
}
