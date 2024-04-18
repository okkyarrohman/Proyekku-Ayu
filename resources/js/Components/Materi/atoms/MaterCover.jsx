export default function MateriCover({ cover }) {
    return (
        <img
            src={`/storage/materi/cover/${cover}`}
            alt="Materi Cover"
            className="rounded-xl w-full h-80 object-cover"
        />
    );
}
