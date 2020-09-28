const ineff_squaredArray = (array) => {
    var arr2 = [];
    for (var i = 0; i < array.length; i++) {
        arr2[i] = array[i] * array[i];
    }

    arr2.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        if (a == b) return 0;
    });

    return arr2;
}

const square = (number) => {
    return number * number;
}

const linear_squaredArray = (array) => {
    var arr2 = [];
    var leftPointer = 0;
    var rightPointer = array.length - 1;
    /**
     * @variable arr2
     * @variable leftPointer
     * @variable rightPointer
     * Loop through the array backwards
     * compare the left pointer to the right pointer
     * if the left pointer is higher set that value in index i of the array. increment left pointer
     * if the right pointer is higher set the value in index i of the array. decrement right pointer
     * while i greater than or equal to 0
     */

    for (var i = array.length - 1; i >= 0; i--) {
        if (Math.abs(array[leftPointer]) > Math.abs(array[rightPointer])) {
            arr2[i] = square(array[leftPointer]);
            leftPointer++;
        }else{
            arr2[i] = square(array[rightPointer]);
            rightPointer--;
        }
    }
    return arr2;
}

const arr = [-5, 1, 2, 3,6];

console.log(ineff_squaredArray(arr));


console.log(linear_squaredArray(arr))