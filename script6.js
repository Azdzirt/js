

let ul = document.createElement('ul');
ul.classList.add( "foo", "bar" );

ul.innerHTML = 'Привет, мир! Я создан через js';
ul.style.width="100px";
ul.style.height="100px";
document.body.append(ul);


// let button = ul.getElementsByClassName('click')[0];
// button.onclick = function clickButton() {
//      alert("“Клик!”");
// }
function anim(){
console.log('вы кликнули');
ul.style.background="blue";

}
function anim2(){
     console.log('вы откликнули');
     ul.style.background="black";
     
     }
ul.addEventListener('mousedown', anim);
ul.addEventListener('mouseup', anim2);

     


ul.addEventListener("click", function() {
     let div = document.createElement('div');
     div.className = "block";
     div.innerHTML = "<strong>всем привет!</strong> я блок js.";
     document.body.append(div)
 }, {once : true});

    