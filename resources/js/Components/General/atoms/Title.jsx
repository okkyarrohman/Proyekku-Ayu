export default function Title({
    title,
    size = "text-4xl",
    weight = "font-extrabold",
    color = "text-white",
    align = "text-left",
}) {
    return <h1 className={`${size} ${color} ${weight} ${align}`}>{title}</h1>;
}
