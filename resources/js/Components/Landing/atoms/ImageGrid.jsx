export default function ImageGrid() {
    return (
        <div className="relative h-[25rem] w-[22rem]">
            <img
                src="/assets/grid1-image.jpeg"
                alt="Grid Image"
                className="size-64 object-cover rounded-xl"
                loading="lazy"
            />
            <img
                src="/assets/grid2-image.jpeg"
                alt="Grid Image"
                className="w-36 h-48 object-cover absolute top-20 left-52 rounded-xl"
                loading="lazy"
            />
            <img
                src="/assets/grid3-image.jpeg"
                alt="Grid Image"
                className="w-64 h-44 object-cover absolute left-16 top-56 rounded-xl"
                loading="lazy"
            />
        </div>
    );
}
