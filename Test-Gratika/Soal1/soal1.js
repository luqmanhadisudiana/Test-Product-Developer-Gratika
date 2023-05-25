var namaArray = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];


var numbers = namaArray.filter(item => typeof item === "number");
var letters = namaArray.filter(item => typeof item === "string");


letters.sort();
numbers.sort((a, b) => a - b);


var sortedArr = letters.concat(numbers);

console.log(sortedArr);