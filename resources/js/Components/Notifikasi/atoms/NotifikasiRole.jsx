export default function NotifikasiRole({ role }) {
    return (
        <p
            className={`flex items-center gap-1 capitalize ${
                role == "guru" ? "text-yellow-500" : "text-green-600"
            }`}
        >
            <div
                className={`size-3 rounded-full ${
                    role == "guru" ? "bg-yellow-500" : "bg-green-600"
                }`}
            ></div>
            {role}
        </p>
    );
}
