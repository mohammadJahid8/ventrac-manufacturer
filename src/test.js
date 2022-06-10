// find the odd number between 2 and 5

const array = [2, 3, 4, 5];


function findOdd(array) {
    let result = 0;
    array.forEach(function (number) {
        result += number;
    });
    return result;
}

