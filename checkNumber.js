module.exports = checkNumber;

function checkNumber(num){
    num <= 10;
    if (num < 5) {
        console.log('Faible');
    } else if (num === 5 || num === 6) {
        console.log('Moyen');
    }
    }
    checkNumber(4);
    checkNumber(5);
    checkNumber(6);
