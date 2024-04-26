export const formatFullDateHour = (dateValue) => {
    const date = new Date(dateValue);

    const formattedDate = date.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedHour = date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return `${formattedDate} ${formattedHour}`;
};
