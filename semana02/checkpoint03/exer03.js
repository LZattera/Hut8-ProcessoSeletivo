const array = [6, 21, 9, 2, 50, 98, 1];

function getMaxOfArray(array){
    var max = Math.max.apply(null, array);
    return max;
}
console.log(getMaxOfArray(array));