function add(a, b) {
    return a + b;
}

const player = {
    name: "lol",
    age: 21,
    sayhello: function (yourname) {
        alert('Hi, ' + yourname);
    }
}

//ID나 class로 가져오는건 한번에 하나의 특성만 가져올 수 있다.
const text1 = document.getElementById('tomato');
const array = document.getElementsByClassName('food');

//css selector형태로 읽어올 수 있는 querySelector .div h1 같은 형태
conext1 = document.querySelector(".hello h1");
//근데 조건에 맞는 첫 번째 element만 가져온다.
const text1 = document.querySelector("#tomato");

//다 가져오고 싶으면?
const text1 = document.querySelectorAll(".div");

// element event
function handleText1Click() {
    if (flag == true){
        text1.style.color = "blue";
        flag = false;
    }
    else {
        text1.style.color = 'black';
        flag = true;
    }

}
function handleMouseEnter() {
    text1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    text1.innerText = "Mouse is Gone!";
}
text1.addEventListener("click", handleText1Click);
text1.addEventListener("mouseenter", handleMouseEnter);
text1.addEventListener("mouseleave", handleMouseLeave);
//이렇게도 됨
text1.onclick = handleTitleClick;
text1.onmouseenter = handleMouseEnter;
text1.onmouseleave = handleMouseLeave;

//window events
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no Internet");
}

function handleWindowOnline() {
    alert("Internet ON!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);