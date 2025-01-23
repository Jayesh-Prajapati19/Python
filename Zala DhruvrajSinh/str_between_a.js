// write a js program that will find the first postiton of first occurence of vowel a and last occurence of vowel a and give string between them.
var x = "Ahmedabad".toUpperCase();
l = x.indexOf("A")
l1 = x.lastIndexOf("A")
console.log(x.substring(l + 1, l1))
