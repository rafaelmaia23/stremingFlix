export const truncateText = (text, maxLength = 45) => {
    return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
};
