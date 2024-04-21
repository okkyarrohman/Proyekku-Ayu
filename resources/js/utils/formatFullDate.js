export const formatFullDate = (dateValue) => {
    const date = new Date(dateValue);

    const formattedDate = date.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return formattedDate;
};
