const conversionList = 
    { G: 'C', C: 'G', T: 'A', A: 'U', };

export default (dna) => {
    if (dna === '') return '';
    const dnaArr = dna.split('');
    let unknown = null;
    const rnaArr = dnaArr.map(el => {
        if (conversionList[el] === undefined) unknown = true;

        return conversionList[el];

    });

    return unknown ? null : rnaArr.join('');
};