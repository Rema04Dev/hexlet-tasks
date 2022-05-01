// const isPalindrome = (str) => {
//     if (str.length <= 1) {
//         return true;
//     }
//     const firstLetter = str[0];
//     const lastLetter = str[str.length - 1];
//     if (firstLetter !== lastLetter) {
//         return false;
//     }
//     const stringWithoutFirstAndLastLetter = str.substring(1, str.length - 1);
//     return isPalindrome(stringWithoutFirstAndLastLetter);
// }

// export default isPalindrome;

const isPalindrome = (str) => {
    if (str.length <= 1) {
        return true;
    }
    const firstLetter = str[0];
    const lastLetter = str[str.length - 1];
    if (firstLetter !== lastLetter) {
        return false;
    }
    const stringWithoutFirstAndLastLetter = str.substring(1, str.length - 1);
    return isPalindrome(stringWithoutFirstAndLastLetter);
}

export default isPalindrome;