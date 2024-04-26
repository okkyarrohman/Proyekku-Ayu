export default function NoData({ text }) {
    return (
        <div className="space-y-4">
            <img
                src="/assets/no-data-img.png"
                alt="No Data"
                className="w-40 mx-auto"
            />
            <p className="text-xl text-center font-semibold">{text}</p>
        </div>
    );
}
