function analyzeArray(array) {
    let obj = {
        average: array.reduce((a,b) => a + b, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }

    return obj;
}
module.exports = analyzeArray