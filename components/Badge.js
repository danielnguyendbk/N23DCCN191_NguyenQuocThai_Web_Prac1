export default function Badge({ label, color = "indigo" }) {
    const styles =
        color === "indigo"
            ? "border-indigo-200 bg-indigo-50 text-indigo-700"
            : "border-gray-200 bg-gray-100 text-gray-700";

    return (
        <span
            className={`${styles} inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide`}
        >
            {label}
        </span>
    );
}