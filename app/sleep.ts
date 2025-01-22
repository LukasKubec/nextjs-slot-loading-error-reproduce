export const sleep = (): Promise<string> => new Promise((resolve) => {
    const random = Math.random() * 10000;
    setTimeout(() => {
        resolve(`I do not sleep anymore ${random}`);
    }, random);
});
