export const convertPxStringInNumber = ({ height: pxString }) => {
    if (typeof pxString !== "string" || !pxString.endsWith("px")) {
        throw new Error("Height must be a string with 'px' unit.");
    }

    const numericHeight = parseInt(pxString.replace("px", "").trim(), 10);

    if (isNaN(numericHeight)) {
        throw new Error("Height must be a valid number.");
    }

    return `${numericHeight - 40}px`;
};
