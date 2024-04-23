export default function ProfileField({ text, value }) {
    return (
        <div className="grid grid-cols-6 items-center">
            <p className="col-span-2 text-xl font-bold text-primary-100">
                {text}
            </p>
            <input
                type="text"
                disabled
                className="col-span-4 shadow-[1px_4px_3px_0px_rgba(0,0,0,0.15)] border-none rounded-xl w-full text-xl font-medium text-primary-100 px-8 capitalize"
                value={value}
            />
        </div>
    );
}
