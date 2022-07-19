function reverseString(string) {
    let array = string.split('');
    let reverseArray = array.reverse();
    string = reverseArray.join('');
    return string.trim()
}

module.exports = reverseString