let arr = [1, 2, 2, 3, 4, 4, 5];
let newArr=arr.filter((item, index) => arr.indexOf(item) === index);
console.log(newArr)
