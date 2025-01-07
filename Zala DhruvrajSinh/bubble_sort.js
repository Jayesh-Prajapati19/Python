const arr = [5, 7, 2, 3, 1, 10, 9, 9]
var l = arr.length
for (let i = 0; i < l; i++) {
    for (let j = 0; j < l-1; j++) {
        if (arr[j] > arr[j+1]) {
            x = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = x
        }
    }
}
console.log(arr)