function daydiffrence(date1,date2){
    oneday=24*60*60*1000;
    day1_ms=date1.getTime();
    day2_ms=date2.getTime();
    diff_ms=Math.abs(day1_ms-day2_ms);
    return(Math.round(diff_ms/oneday));
}
var d1= new Date();
d1.setMonth(11);
d1.setDate(1);
var d2 = new Date();
d2.setMonth(10);
d2.setDate(1);
console.log("Days:- "+daydiffrence(d1,d2));