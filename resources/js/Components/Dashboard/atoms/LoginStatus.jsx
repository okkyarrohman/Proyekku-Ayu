export default function LoginStatus({ isLogin }) {
    return (
        <p
            className={`font-semibold ${
                isLogin ? "text-green-600" : "text-red-600"
            }`}
        >
            {isLogin ? "Sedang Login" : "Sedang Offline"}
        </p>
    );
}
