import dnaToRna from "../introduction/dnaToRna.js";

const run = () => {
    console.log(dnaToRna('ACGTGGTCTTAA'))
    console.log(dnaToRna(''))
    console.log(dnaToRna('ACGNGTA'))
}

run();