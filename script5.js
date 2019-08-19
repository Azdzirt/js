let div = document.createElement('div');
div.className = "block";
div.innerHTML = "<strong>всем привет!</strong> я блок js.";
document.body.append(div);

alert(getComputedStyle(document.querySelectorAll(".block_one")[0]).height);


let ul = document.createElement('ul');
ul.classList.add( "foo", "bar" );

ul.innerHTML = 'Привет, мир! Я создан через js';
ul.style.width="100px";
ul.style.height="100px";
document.body.append(ul);


