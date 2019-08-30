var hi = "На этой странице можно посмотреть, что я освоил в JS";
var two = prompt ("Поехали? ;)");
two = two.toLowerCase();
var one = "да";
if (one==two) {
  alert("круть!");
  alert (hi);
}
else {
  alert("наверное вы выпили и промахнулись, давайте еще разок!");
   two = prompt ("Поехали? ;)");
   if(one==two) {
    alert("конечно не спервого раза, но годится!");
    
    }
    alert (hi);
  }



// СЕКЦИЯ 1 ЛОГО И СТРАНИЦЫ!!!
let block1 = document.createElement('section'); 
block1.className = "block1";
document.body.append(block1);

// контейнер
let cont1 = document.createElement('div'); 
cont1.className = "container";
block1.append(cont1);
cont1.style.maxWidth="1220px";
cont1.style.padding="0 20px";
cont1.style.margin="0 auto";

// блок для сслылок и лого для флекса
let flex = document.createElement('div'); 
flex.className = "flex";
cont1.append(flex);
flex.style.display = "flex";
flex.style.justifyContent = "space-between";



// лого поместил в контейнер
let img = document.createElement('div'); 
flex.append(img);
img.className = "img";
img.style.backgroundImage = "url(./img/logo.png)";
img.style.height = "68px";
img.style.width = "212px";
img.style.marginTop ="16px";
img.href ="scriptytt.html";

// блок для сслылок
let links = document.createElement('div'); 
links.className = "links";
links.style.maxWidth="570px";
links.style.maxHeight="49px";
flex.append(links);
links.style.marginTop = "26px";
links.style.paddingBottom ="26px";

// линк с отступом слева
let links1 = document.createElement('div'); 
links1.className = "links";
links.append(links1);

// 15 оставшихся линков 
let links2 = document.createElement('div'); 
links2.className = "links";
links.append(links2);



// 16 линков. как упростить?
let text1 = document.createElement('a'); 
text1.className = "link1";
text1.href="scriptytt.html"
text1.innerHTML = 'Lesson №1';

let text2 = document.createElement('a'); 
text2.className = "link";
text2.href="scriptytt.html"
text2.innerHTML = 'Lesson №2';

let text3 = document.createElement('a'); 
text3.className = "link";
text3.href="scriptytt.html"
text3.innerHTML = 'Lesson №3';

let text4 = document.createElement('a'); 
text4.className = "link";
text4.href="scriptytt.html"
text4.innerHTML = 'Lesson №4';

let text5 = document.createElement('a'); 
text5.className = "link";
text5.href="scriptytt.html"
text5.innerHTML = 'Lesson №5';

let text6 = document.createElement('a'); 
text6.className = "link";
text6.href="scriptytt.html"
text6.innerHTML = 'Lesson №6';

let text7 = document.createElement('a'); 
text7.className = "link";
text7.href="scriptytt.html"
text7.innerHTML = 'Lesson №7';

let text8 = document.createElement('a'); 
text8.className = "link";
text8.href="scriptytt.html"
text8.innerHTML = 'Lesson №8';

let text9 = document.createElement('a'); 
text9.className = "link";
text9.href="scriptytt.html"
text9.innerHTML = 'Lesson №9';

let text10 = document.createElement('a'); 
text10.className = "link";
text10.href="scriptytt.html"
text10.innerHTML = 'Lesson №10';

let text11 = document.createElement('a'); 
text11.className = "link";
text11.href="scriptytt.html"
text11.innerHTML = 'Lesson №11';

let text12 = document.createElement('a'); 
text12.className = "link";
text12.href="scriptytt.html"
text12.innerHTML = 'Lesson №12';

let text13 = document.createElement('a'); 
text13.className = "link";
text13.href="scriptytt.html"
text13.innerHTML = 'Lesson №13';

let text14 = document.createElement('a'); 
text14.className = "link";
text14.href="scriptytt.html"
text14.innerHTML = 'Lesson №14';

let text15 = document.createElement('a'); 
text15.className = "link";
text15.href="scriptytt.html"
text15.innerHTML = 'Lesson №15';

let text16 = document.createElement('a'); 
text16.className = "link";
text16.href="scriptytt.html"
text16.innerHTML = 'Lesson №16';

links1.append(text1);
links1.append(text2);
links1.append(text3);
links1.append(text4);
links1.append(text5);
links1.append(text6);
links1.append(text7);
links1.append(text8);
links2.append(text9);
links2.append(text10);
links2.append(text11);
links2.append(text12);
links2.append(text13);
links2.append(text14);
links2.append(text15);
links2.append(text16);


// СЕКЦИЯ 2 ОБРАТНЫЙ ОТСЧЕТ ДАТЫ!!!
let block2 = document.createElement('section'); 
block2.className = "block2";
document.body.append(block2);
block2.style.backgroundColor = "#F1F1F1";

// контейнер
let cont2 = document.createElement('div'); 
cont2.className = "container";
block2.append(cont2);
cont2.style.maxWidth="1220px";
cont2.style.padding="0 20px";
cont2.style.margin="0 auto";

// блок  для текста инпуда и результата
let dataBlock = document.createElement('div'); 
dataBlock.className = "dataBlock";
cont2.append(dataBlock);
dataBlock.style.marginTop = "17px"; 
dataBlock.style.paddingTop ="51px";
dataBlock.style.paddingBottom ="59px";

// блок текст
let textData = document.createElement('div'); 
textData.className = "title";
textData.href="scriptytt.html"
textData.innerHTML = 'Введите gggg.mm.dd';
dataBlock.append(textData);
textData.style.fontStyle = "regular";

//  блок для результата
let dataResult = document.createElement('div');
dataResult.className = "dataResult";
dataBlock.append(dataResult);

// дата. создаю тег инпуд.вкладываю его в блок датаБлок.создаю функцию - при событии, где нажимаю клавишу №13(ентер) срабатывает функция переводим введенное число в милисекунды затем настоящее время в милисекунды, 3 находим разницу между введенным и настоящим, переводим получившееся число в дни, часы, минуты, секунды путем деления (Делим миллисекунды на 1000, чтобы перевести их в секунды,делим общее число секунд на 60 и тд) вывод через сек

let input = document.createElement('input');
dataResult.append(input);
input.style.marginTop="33px";
input.style.marginBottom="33px";
function enter(event) {                            
  if (event.keyCode==13) {
    function result() {
      let enterDate = new Date(input.value).getTime();
      let date = new Date().getTime();
      let difference = new Date(enterDate - date); 
      let days = Math.floor(difference/1000/60/60/24);
      let hours = Math.floor((difference/1000/60/60)%24);
      let minutes = Math.floor((difference/1000/60)%60);
      let second = Math.floor((difference/1000)%60);
      document.getElementById("result").innerHTML =  "До даты которую вы ввели осталось:" + " " + days + " дн., " + hours + " ч., " + minutes + " мин., " + second + " сек.";
    }
    setInterval(result, 100);
  }
}
document.addEventListener('keydown', enter)
// при нажатии на клавишу срабатывает функция ентер

// блок спан для вывода результата 
let span1 = document.createElement('span');
span1.id = "result";
dataBlock.append(span1);
span1.innerHTML="До даты которую вы ввели осталось:";
span1.style.lineHeight = "28px";
span1.style.fontSize = "24px";
span1.style.fontFamily= "'Roboto', sans-serif";

// СЕКЦИЯ 3 С ЛАМПОЧКАМИ!!!
let block3 = document.createElement('section'); 
block3.className = "block3";
document.body.append(block3);
block3.style.paddingBottom = "68px";
block3.style.paddingTop = "66px";

// контейнер
let cont3 = document.createElement('div'); 
cont3.className = "container";
block3.append(cont3);
cont3.style.maxWidth="1220px";
cont3.style.padding="0 20px";
cont3.style.margin="0 auto";

// блок с текстом
let lampText = document.createElement('div');
lampText.className = "title";
cont3.append(lampText);
lampText.innerHTML = "На лампочку и увидите чудо";
lampText.style.marginBottom = "45px";

// блок флекс для лампочек
let lampBlock = document.createElement('div'); 
lampBlock.className = "lampBlock";
cont3.append(lampBlock);
lampBlock.style.display = "flex";

// блок с имг лампа 1
let lamp1 = document.createElement('div');
lamp1.className = "lamp1";
lampBlock.append(lamp1);
lamp1.style.backgroundImage = "url(./img/lamp1.png)";
lamp1.style.height = "88px";
lamp1.style.width = "74px";
lamp1.style.marginRight = "25px";
lamp1.style.opacity = "0.2";

// функция лампы 1
function anim1Lamp1(){
  console.log('вы навели');
  block3.style.background="rgba(0, 0, 0, 0.5)";
  lamp1.style.opacity ="1";
}

function anim2Lamp1(){
  console.log('вы увели');
  lamp1.style.opacity="none";
  block3.style.background="none";
  lamp1.style.opacity = "0.2";
}

lamp1.addEventListener('mouseover', anim1Lamp1);
lamp1.addEventListener('mouseout', anim2Lamp1);

// блок с имг лампа 2
let lamp2 = document.createElement('div');
lamp2.className = "lamp2";
lampBlock.append(lamp2);
lamp2.style.backgroundImage = "url(./img/lamp2.png)";
lamp2.style.height = "80px";
lamp2.style.width = "80px";
lamp2.style.marginRight = "3px";
lamp2.style.opacity = "0.2";

// функция лампы 2
function anim1Lamp2(){
  console.log('вы навели');
  block3.style.background =" rgba(239, 206, 74, 0.5)";
  lamp2.style.opacity ="1";
}

function anim2Lamp2(){
  console.log('вы увели');
  lamp2.style.opacity ="0.2";
  block3.style.background="none";
}

lamp2.addEventListener('mouseover', anim1Lamp2);
lamp2.addEventListener('mouseout', anim2Lamp2);

// блок с имг лампа 3
let lamp3 = document.createElement('div');
lamp3.className = "lamp3";
lampBlock.append(lamp3);
lamp3.style.backgroundImage = "url(./img/lamp3.png)";
lamp3.style.height = "110px";
lamp3.style.width = "100px";
lamp3.style.marginTop = "-21px";
lamp3.style.opacity = "0.2";

// функция лампы 3
function anim1Lamp3(){
  console.log('вы навели');
  block3.style.background =" rgba(66, 141, 255, 0.5)";
  lamp3.style.opacity ="1";
}

function anim2Lamp3(){
  console.log('вы увели');
  lamp3.style.opacity ="0.2";
  block3.style.background="none";
}

lamp3.addEventListener('mouseover', anim1Lamp3);
lamp3.addEventListener('mouseout', anim2Lamp3);

// СЕКЦИЯ 4 ПАРАЛАКС!!!
let block4 = document.createElement('section'); 
block4.className = "block4";
document.body.append(block4);
block4.style.paddingBottom = "74x";
block4.style.paddingTop = "63px";
block4.style.backgroundColor = "#F1F1F1";

// контейнер
let cont4 = document.createElement('div'); 
cont4.className = "container";
block4.append(cont4);
cont4.style.maxWidth="1220px";
cont4.style.padding="0 20px";
cont4.style.margin="0 auto";

// блок с текстом
let paralaxText1 = document.createElement('div');
paralaxText1.className = "title";
cont4.append(paralaxText1);
paralaxText1.innerHTML = "ДАННЫЙ блок нужен для ";

// блок с текстом2
let paralaxText2 = document.createElement('div');
paralaxText2.className = "title";
cont4.append(paralaxText2);
paralaxText2.innerHTML = "демонстрации параллакс эффекта ";

// блок чтобы обрезать картинку за блоком картинка больше чем блок
let paralaxBlock = document.createElement('div');
paralaxBlock.className = "paralaxBlock";
cont4.append(paralaxBlock);
paralaxBlock.style.height = "402px";
paralaxBlock.style.width = "780px";
paralaxBlock.style.overflow = "hidden";
paralaxBlock.style.marginLeft = "200px";
paralaxBlock.style.marginTop = "75px";

// блок с картинкой и грандиентом
let paralaxImg = document.createElement('div');
paralaxImg.className = "paralaxImg";
paralaxBlock.append(paralaxImg);
paralaxImg.style.backgroundImage =  "linear-gradient(to top, rgba(196, 196, 196, 0.7), rgba(196, 196, 196, 0.7)), url(./img/okna.png)";
paralaxImg.style.height = "500px";
paralaxImg.style.width = "900px";

// блок текст над картинкой для паралакс эффекта
let ImgText = document.createElement('div');
ImgText.className = "ImgText";
paralaxImg.append(ImgText);
ImgText.innerHTML = "параллакс эффект";
ImgText.style.fontSize = "100px";
ImgText.style.paddingTop = "169px";
ImgText.style.paddingLeft = "190px";
ImgText.style.fontSize = "64px";
ImgText.style.lineHeight = "64px";
ImgText.style.color = "white";
ImgText.style.fontFamily = "BebasNeue";

// функция скролла. смотрим через pageYOffset на каком пкс мы приблежаемся к картинке< чтобы начать действие функции, на 590пкс скрола работает транслейт
window.onscroll = function parallax() {
  let scroll = window.pageYOffset;
  console.log(scroll);
  let top = 590;
  let down = 603;
  
  if ((scroll == top) || (scroll < down)) {
    paralaxImg.style.transform = "translateY(-10px)";
    ImgText.style.transform = "translateY(10px)";
    ImgText.style.transition = "1s";
    paralaxImg.style.transition = "2s";
  }
  
  if ((scroll == down) || (scroll > top)) {
    paralaxImg.style.transform = "translateY(10px)";
    ImgText.style.transform = "translateY(-10px)";
    ImgText.style.transition = "1s";
    paralaxImg.style.transition = "2s";
  }
}
  
// СЕКЦИЯ 5 СЛАЙДЕР!!!
let block5 = document.createElement('section'); 
block5.className = "block5";
document.body.append(block5);
block5.style.paddingBottom = "76px";
block5.style.paddingTop = "60px";

// контейнер
let cont5 = document.createElement('div'); 
cont5.className = "container";
block5.append(cont5);
cont5.style.maxWidth="1220px";
cont5.style.padding="0 20px";
cont5.style.margin="0 auto";

// блок текст
let slayderText = document.createElement('div');
slayderText.className = "title";
cont5.append(slayderText);
slayderText.innerHTML = "слайдер картинок ";

// блок флекс для левой кнопки. 3х картинок и правой кнопки 
let slayd = document.createElement('div'); 
slayd.className = "slayd";
cont5.append(slayd);
block5.style.paddingTop = "60px";
slayd.style.display = "flex";
slayd.style.marginLeft = "100px"
slayd.style.marginTop = "60px"

// левая кнопка
let left = document.createElement('div'); 
left.className = "left";
slayd.append(left);
left.style.backgroundImage = "url(./img/left.png)";
left.style.width ="33px";
left.style.height = "58px";
left.style.marginRight = "67px";
left.style.marginTop = "201px";

// блок для картинок с обрезанием их
let imgBlock = document.createElement('div'); 
imgBlock.className = "imgBlock";
slayd.append(imgBlock);
imgBlock.style.width ="780px";
imgBlock.style.height = "437px";
imgBlock.style.display = "grid";
imgBlock.style.gridTemplateColumns = "1fr 1fr 1fr";
imgBlock.style.overflow = "hidden";
imgBlock.style.gridColumnGap = "70px";

// картинка 1
let imgSlayd1 = document.createElement('div'); 
imgSlayd1.className = "imgSlayd1";
imgBlock.append(imgSlayd1);
imgSlayd1.style.width ="780px";
imgSlayd1.style.height = "437px";
imgSlayd1.style.backgroundImage = "url(./img/img1.png)";
imgSlayd1.style.backgroundRepeat = "no-repeat"; 
imgSlayd1.style.backgroundPosition = "center"; 
imgSlayd1.style.backgroundSize = "cover"; 
// картинка 2
let imgSlayd2 = document.createElement('div'); 
imgSlayd2.className = "imgSlayd2";
imgBlock.append(imgSlayd2);
imgSlayd2.style.width ="780px";
imgSlayd2.style.height = "437px";
imgSlayd2.style.backgroundRepeat = "no-repeat"; 
imgSlayd2.style.backgroundImage = "url(./img/img2.png)";
imgSlayd2.style.backgroundRepeat = "no-repeat"; 
imgSlayd2.style.backgroundPosition = "center"; 
imgSlayd2.style.backgroundSize = "cover"; 

// картинка 3
let imgSlayd3 = document.createElement('div'); 
imgSlayd3.className = "imgSlayd3";
imgBlock.append(imgSlayd3);
imgSlayd3.style.width ="780px";
imgSlayd3.style.height = "437px";
imgSlayd3.style.backgroundRepeat = "no-repeat"; 
imgSlayd3.style.backgroundImage = "url(./img/img3.png)";
imgSlayd3.style.backgroundRepeat = "no-repeat"; 
imgSlayd3.style.backgroundPosition = "center"; 
imgSlayd3.style.backgroundSize = "cover"; 

// правая кнопка
let right = document.createElement('div'); 
right.className = "right";
slayd.append(right);
right.style.backgroundImage = "url(./img/right.png)";
right.style.width ="33px";
right.style.height = "58px";
right.style.marginLeft = "67px";
right.style.marginTop = "201px";

// лютая функция, где при нажатие направа матает на столько то транслейт и при этом можно нажать влево чтобы отматало столько то и при этом можно нажать на права чтобы отматать столько то и при этом нажать направо или налево чтобы отмать столько то
function animSlaydR(){
  console.log('вы кликнули');
  imgSlayd1.style.transform = "translatex(-850px)";
  imgSlayd1.style.transition = "1s";
  imgSlayd2.style.transform = "translatex(-850px)";
  imgSlayd2.style.transition = "1s";
  imgSlayd3.style.transform = "translatex(-850px)";
  imgSlayd3.style.transition = "1s";
  border1.style.backgroundImage = "url(./img/elips.png)";
  border2.style.backgroundImage = "url(./img/elipsblu.png)";
  
  
  function animSlaydL1(){
    console.log('вы кликнули');
    imgSlayd1.style.transform = "translatex(0px)";
    imgSlayd1.style.transition = "1s";
    imgSlayd2.style.transform = "translatex(0px)";
    imgSlayd2.style.transition = "1s";
    imgSlayd3.style.transform = "translatex(0px)";
    imgSlayd3.style.transition = "1s";
    border1.style.backgroundImage = "url(./img/elipsblu.png)";
    border2.style.backgroundImage = "url(./img/elips.png)";
      
    function animSlaydR(){
      console.log('вы кликнули');
      imgSlayd1.style.transform = "translatex(-850px)";
      imgSlayd1.style.transition = "1s";
      imgSlayd2.style.transform = "translatex(-850px)";
      imgSlayd2.style.transition = "1s";
      imgSlayd3.style.transform = "translatex(-850px)";
      imgSlayd3.style.transition = "1s";
      border1.style.backgroundImage = "url(./img/elips.png)";
      border2.style.backgroundImage = "url(./img/elipsblu.png)";
      border3.style.backgroundImage = "url(./img/elips.png)";
    }
    right.addEventListener('click', animSlaydR);
       
  }
  left.addEventListener('click', animSlaydL1);
  
  function animSlaydR2(){
    console.log('вы кликнули');
    imgSlayd1.style.transform = "translatex(-1700px)";
    imgSlayd1.style.transition = "1s";
    imgSlayd2.style.transform = "translatex(-1700px)";
    imgSlayd2.style.transition = "1s";
    imgSlayd3.style.transform = "translatex(-1700px)";
    imgSlayd3.style.transition = "1s";
    border3.style.backgroundImage = "url(./img/elipsblu.png)";
    border2.style.backgroundImage = "url(./img/elips.png)";

    function animSlaydL2(){
      console.log('вы кликнули');
      imgSlayd1.style.transform = "translatex(-850px)";
      imgSlayd1.style.transition = "1s";
      imgSlayd2.style.transform = "translatex(-850px)";
      imgSlayd2.style.transition = "1s";
      imgSlayd3.style.transform = "translatex(-850px)";
      imgSlayd3.style.transition = "1s";
      border2.style.backgroundImage = "url(./img/elipsblu.png)";
      border3.style.backgroundImage = "url(./img/elips.png)";
      border1.style.backgroundImage = "url(./img/elips.png)";
     
      function animSlaydL1(){
        console.log('вы кликнули');
        imgSlayd1.style.transform = "translatex(0px)";
        imgSlayd1.style.transition = "1s";
        imgSlayd2.style.transform = "translatex(0px)";
        imgSlayd2.style.transition = "1s";
        imgSlayd3.style.transform = "translatex(0px)";
        imgSlayd3.style.transition = "1s";
        border1.style.backgroundImage = "url(./img/elipsblu.png)";
        border3.style.backgroundImage = "url(./img/elips.png)";
        border2.style.backgroundImage = "url(./img/elips.png)";
        
      }
      left.addEventListener('click', animSlaydL1);
    }
    left.addEventListener('click', animSlaydL2);
  }
  right.addEventListener('click', animSlaydR2);

}
right.addEventListener('click', animSlaydR);

//  блок с кругляшками под имагами
let border = document.createElement('div'); 
border.className = "border";
cont5.append(border);
border.style.display ="flex";
border.style.justifyContent = "center";
border.style.marginTop = "25px"; 

// блок с элипсом1
let border1 = document.createElement('div'); 
border1.className = "border";
border.append(border1);
border1.style.backgroundImage = "url(./img/elipsblu.png)";
border1.style.width ="6px";
border1.style.height = "6px";
border1.style.marginRight = "2px";

// блок с элипсом2
let border2 = document.createElement('div'); 
border2.className = "border";
border.append(border2);
border2.style.backgroundImage = "url(./img/elips.png)";
border2.style.width ="6px";
border2.style.height = "6px";
border2.style.marginRight = "2px";

// блок с элипсом3
let border3 = document.createElement('div'); 
border3.className = "border";
border.append(border3);
border3.style.backgroundImage = "url(./img/elips.png)";
border3.style.width ="6px";
border3.style.height = "6px";


function anim1Left(){
  console.log('вы навели');
  left.style.transform = "scale(1.1)";
}

function anim1Left2(){
  console.log('вы увели');
  left.style.transform = "none";
}

left.addEventListener('mouseover', anim1Left);
left.addEventListener('mouseout', anim1Left2);


function anim1Right(){
  console.log('вы навели');
  right.style.transform = "scale(1.1)";
}

function anim1Right2(){
  console.log('вы увели');
  right.style.transform = "none";
}

right.addEventListener('mouseover', anim1Right);
right.addEventListener('mouseout', anim1Right2);

// let button = ul.getElementsByClassName('click')[0];
// button.onclick = function clickButton() {
//      alert("“Клик!”");
// }

// function animSlaydL(){
//   console.log('вы кликнули');
//   imgSlayd1.style.transform = "translatex(0)";
//   imgSlayd1.style.transition = "1s";
//   left.style.scale= "3";

//   }
//  left.addEventListener('click', animSlaydL);


// container.style.padding="0 20px";
// cont4.style.margin="0 auto";



// let paralaxText1 = document.createElement('div');
// paralaxText1.className = "paralaxText";
// cont4.append(paralaxText1);
// paralaxText1.innerHTML = "ДАННЫЙ блок нужен для ";

// let paralaxText2 = document.createElement('div');
// paralaxText2.className = "paralaxText";
// cont4.append(paralaxText2);
// paralaxText2.innerHTML = "демонстрации параллакс эффекта ";





















// var xScrollPosition;
// var yScrollPosition;
 

// var bigYellowCircle = document.querySelector("#paralaxImg");
// var blueSquare = document.querySelector("#ImgText")
// function setTranslate(xPos, yPos, el) {
//     el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
// }
// function scrollLoop() {
//     xScrollPosition = window.scrollX;
//     yScrollPosition = window.scrollY;

//     setTranslate(0, yScrollPosition * -0.2, ImgText);
//     setTranslate(0, yScrollPosition * -1.5, paralaxImg);
    
 
//     requestAnimationFrame(scrollLoop);
// }




// var input = document.createElement('input');
// var deadline = new Date (input.value).getTime();
// dataBlock.append(input);
// function getTimeRemaining(endtime){
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor( (t/1000) % 60 );
//     var minutes = Math.floor( (t/1000/60) % 60 );
//     var hours = Math.floor( (t/(1000*60*60)) % 24 );
//     var days = Math.floor( t/(1000*60*60*24) );
//     return {
//      'total': t,
//      'days': days,
//      'hours': hours,
//      'minutes': minutes,
//      'seconds': seconds
//     };
//   }

//   function initializeClock(id, endtime){
//     var clock = document.getElementById(id);
//     var timeinterval = setInterval(function(){
//      var t = getTimeRemaining(endtime);
//      clock.innerHTML = 'days: ' + t.days + '  ' + 'hours: '+ t.hours + '  ' +  'minutes: ' + t.minutes + ' ' +
//       'seconds: ' + t.seconds;
//      if(t.total<=0){
//       clearInterval(timeinterval);
//      }
//     },1000);
//   }
//   initializeClock('clockdiv', deadline);
// today = new Date();
// today = Math.floor((timeend-today)/1000);
// tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
// tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
// thour=today%24; today=Math.floor(today/24);
// timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
// document.getElementById('t').innerHTML=timestr;
// window.setTimeout("time()",1000);







// let text = document.createElement('div');
// text.style.marginTop = "16px";
// text.style.marginLeft = "212px";
// block1.append(text);


// let text = document.write('<a class=link href="scriptytt.html">Lesson №1</a>');
// cont.append(link);
// document.write('<a class=link href="scriptytt.html">Lesson №2</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №3</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №4</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №5</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №6</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №7</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №8</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №9</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №10</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №11</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №12</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №13</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №14</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №15</a>');
// document.write('<a class=link href="scriptytt.html">Lesson №16</a>');


