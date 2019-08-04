// задание 3;
var user = {
    name: prompt("Введите имя"),
    age: prompt("Введите возраст"),
  }
alert(user);
// 3.2.1 for
var num = [];
num[0] = prompt("Введите значение");
num[1] = prompt("Введите значение");
num[2] = prompt("Введите значение");
num[3] = prompt("Введите значение");
num[4] = prompt("Введите значение");
var i;
for (i = 4; i >= 0; i--) {
    alert( num[i] );
  
}

// 3.2.2 
var num= [];
num[0] = prompt("Введите значение");
num[1] = prompt("Введите значение");
num[2] = prompt("Введите значение");
num[3] = prompt("Введите значение");
num[4] = prompt("Введите значение");
var i=4;
while (i>=0 ) {
    alert(num[i]);
    i--;
  }

var product = prompt("Введите кол-во продуктов");
var i=0;
while (i < product) {
  var position = {
    name: prompt("Введите название товара"),
    price: prompt("Введите цену товара"),
  }
  if (isNaN(position.price)) { 
    alert("Введите цифрами");
    continue; 
  }
alert(product--);
  i++;
}
