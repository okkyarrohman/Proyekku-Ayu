export default function Description({
    desc,
    color = "text-white",
    weight = "font-normal",
    size = "text-xl",
    align = "text-left",
}) {
    return <p className={`${color} ${size} ${weight} ${align}`}>{desc}</p>;
}
