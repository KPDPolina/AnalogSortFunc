let arr = ["b", "c", "a", "ad"]; //[0, 1, 2, 4, 3, 5 ];
console.log("arr = ", arr);

function sortFn(array, callback) {
    for (let j = 0; j < array.length-1; j++) {
        const a = array[j];
        const b = array[j + 1];
        if (callback) {
            for (let i = 0; i < array.length - 1; i++) {
                let a = array[i];
                let b = array[i + 1];
                if (a > b) {
                    array.splice(i, 2, b, a);
                }
            }
        }
    }
    return array;
}

console.log(
    "sortFn = ",
    sortFn(arr, (a, b) => a - b)
);

console.log("Sort = ", arr.sort());

