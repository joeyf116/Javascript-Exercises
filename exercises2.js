function printNumbers(start, end)  {
    while (start <= end) {
      console.log(start);
      start++
      }
    }
    
    printNumbers(1,10);

    let square = "* ";
    function printSquare(size) {
        square = square.repeat(size);
      for(count = 0; count < size; count++) {
        console.log(square)
      }
    }
      
    printSquare(5);

border = '*';
function printBanner(words) {
  phrase = words.length;
  border = border.repeat(phrase)
    console.log(border);
    console.log(words);
    console.log(border);
}

printBanner("Welcome to DigitalCrafts");

arr = [];

function factors(num) {
  for (count=0; count <= num; count++){
    if(num % count === 0) {
      arr.push(count);
      count++;
    }
  }
  console.log(arr)
}
factors(100);


