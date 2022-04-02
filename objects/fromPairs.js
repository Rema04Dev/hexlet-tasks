const fromPairs =  (arr) => {
    const result = {};
    for (const [key, value] of arr) {
        result[key] = value;
    }
    return result;
};

export default fromPairs;