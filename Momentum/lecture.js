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
const title = document.querySelector(".hello h1");
//근데 조건에 맞는 첫 번째 element만 가져온다.
const title = document.querySelector("#tomato");

//다 가져오고 싶으면?
const title = document.querySelectorAll(".div");

// element event
function handleTitleClick() {
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick);