export default function TableContainer({ children }) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full">{children}</table>
        </div>
    );
}
