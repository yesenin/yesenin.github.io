export const getRandomInt = (a, b) => {
    if (a && b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    if (a) {
        return Math.floor(Math.random() * a);
    }
    return 0;
}

export const splitNumber = (a) => {
    let digits = [];
    while (a > 1) {
        digits.push( (a % 10));
        a = Math.floor(a / 10);
    }
    return digits.reverse();
}