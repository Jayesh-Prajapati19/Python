//write a prog to write the characters of string at odd positions
var x = "India"
var y = ""
for (let i = 0; i < x.length; i++) {
    if (i % 2 == 0) {
        y += x[i] + ","
    }
}
console.log(y.substring(0,y.length-1))