export default function TableData({
    align = "text-center",
    nowrap = false,
    children,
}) {
    return (
        <td
            className={`px-6 py-4 ${align} ${
                nowrap ? "whitespace-nowrap" : ""
            }`}
        >
            {children}
        </td>
    );
}
