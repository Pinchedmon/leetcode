//easy complexity
var isPalindrome = function (x) {
    let y = x.toString()
    for (let i = 0; i = y.length; i++) {
        if (y == y.split("").reverse().join("")) {
            return true;
        }
        return false;
    }
};
