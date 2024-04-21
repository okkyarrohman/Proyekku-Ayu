export const checkDeadline = (date) => {
    const deadlineDate = new Date(date);
    const currentDate = new Date();

    return currentDate.getTime() >= deadlineDate.getTime();
};
