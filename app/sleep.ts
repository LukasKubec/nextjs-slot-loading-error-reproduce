export const sleep = (ms: number): Promise<string> => new Promise((resolve) => {
    setTimeout(() => resolve("I do not sleep anymore"), ms);
});
