function capitalize(string) {
    let newString = '';
    for(let i = 0; i < string.length; i++) {
        if(isNaN(string[i])) {
            if(i === 0) {
                return (string[i].toUpperCase() + string.slice(1 + i)).trim();
                break;
            }
            else {
                return (newString + string[i].toUpperCase() + string.slice(1 + i)).trim();
            }
        }
        else {
            newString += string[i];
        }
    }

}

module.exports = capitalize;