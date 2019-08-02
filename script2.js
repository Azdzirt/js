var x = prompt ("введите первое однозначное число");
var y = prompt ("введите  второе однозначное число");
if (x >=10 || y >= 10) {
  alert ("где-то тут не однозначное число!");
}
else if (x == y) {
  alert ("эти числа равны!");
}
if (x > y) {
	result=x ;
}
		
if (x < y) {
	result=y ;

}	
alert("это число больше =>" + " " + result);

    
var one = prompt ("первая буква");
var two = prompt ("вторая буква");
one = one.toLowerCase();
two = two.toLowerCase();
if (one < two) {
	result = two;
}
if (one > two) {
	result = one;
}
else if (one == two) {

	alert("ГЛУПЦЫ!вы ввели одинаковые буквы!");
}
alert(result +" "+"-эта буква первее");


