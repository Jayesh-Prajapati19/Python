var x = 7777
var sum = x
var y = x
while (sum >= 10) {
    y = sum
    sum = 0
    while (y > 0) {
        var ld = parseInt(y % 10)
        sum += ld
        y = parseInt(y / 10)
    }
}
if (sum == 1) {
    console.log("Lucky Number")
}
else {
    console.log("Not Lucky Number")
}