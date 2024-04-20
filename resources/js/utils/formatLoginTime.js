export const formatLoginTime = (loginTime) => {
    const hours = Math.floor(loginTime / 60);
    const minutes = Math.floor(loginTime % 60);
    const seconds = Math.floor((loginTime % 1) * 60);

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return formattedTime;
};
