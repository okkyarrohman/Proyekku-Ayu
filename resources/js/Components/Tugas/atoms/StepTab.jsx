export default function StepTab({ step, onClick, active = false }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`px-12 py-4 ${
                active ? "bg-primary-100" : "bg-primary-200"
            } w-fit rounded-t-xl shadow-[2px_-3px_5px_1px_rgba(0,0,0,0.15)]`}
        >
            <p className="text-xl font-semibold text-white">{step}</p>
        </button>
    );
}
