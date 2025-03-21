export const updateCursorPosition = (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--y', `${e.clientY}px`);
};

export const getCurrentCursorPosition = () => ({
    x: parseFloat(document.documentElement.style.getPropertyValue('--x')),
    y: parseFloat(document.documentElement.style.getPropertyValue('--y'))
});