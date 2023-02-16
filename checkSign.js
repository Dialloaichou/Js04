module.exports = checkSign;

function checkSign(n){
    if (n < 0) {
        return'Negatif';
    } else {
        return 'Positif';
    }
}
var result = checkSign(-8);
console.log(result);
 result = checkSign(4);
console.log(result);
 result = checkSign(5);
console.log(result);