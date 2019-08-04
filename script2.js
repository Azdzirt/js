// 2.2 задание
var x = prompt ("введите первое однозначное число");
var y = prompt ("введите  второе однозначное число");
if (x >=10 || y >= 10) {
  alert ("где-то тут не однозначное число!");
}
else if (x == y) {
  alert ("эти числа равны!");
}
if (x > y) {
	alert("большее число" + " " + x);
}
else if (x < y){
	alert("большее число" + " " + y);

}

// 2.1
var x_one = prompt ("введите первое однозначное число");
var y_one = prompt ("введите  второе однозначное число");
alert(x_one==y_one);

// 2.3  
var one = prompt ("первая буква");
var two = prompt ("вторая буква");
one = one.toLowerCase();
two = two.toLowerCase();
if (one < two) {
	alert("Буква " + one + " стоит раньше в алфавите" )
}

else if (one == two) {
	alert("ГЛУПЦЫ!вы ввели одинаковые буквы!");
}
else {
	alert("жаль, что вы криворучка =(");
}
 if(one>0){
	alert("плз буквами");
}
if(two>0){
	alert("плз буквами");
}




