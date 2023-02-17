module.exports = checkEvenOdd;

function checkEvenOdd(num) {
    if (num % 2 == 0) {
      return "Pair";
    } else {
      return "Impair";
    }
  }

  var result = checkEvenOdd(3);
  console.log(result);
  
  result = checkEvenOdd(4);
  console.log(result); 
