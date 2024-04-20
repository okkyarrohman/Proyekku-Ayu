export default function FilterLabel({ label }) {
    return (
        <p className="py-1 px-2 bg-primary-200 text-white font-medium lg:block hidden">
            {label} :
        </p>
    );
}
