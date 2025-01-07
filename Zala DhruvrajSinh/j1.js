var x=3
var sum=1
for (let i=1; i<5; i++) {
    var fact=1
    for (let j=i;j>0;j--){
        fact*=j
    }
    sum+=(Math.pow(x,i)/fact)
}
console.log(sum)