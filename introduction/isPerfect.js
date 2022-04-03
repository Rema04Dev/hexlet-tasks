const isPerfect = (number) => {
    if (number === 0) return false;
    
    const dividers = [];
    for (let i = number - 1; i >= 1; i -= 1) {
        if (number % i === 0) {
            dividers.push(i)
        }
    }
    return dividers.reduce((acc, int) => {
        return acc += int;
    }, 0) === number ? true : false
};

export default isPerfect;
