const text1 = document.querySelector("div.hello h1");

let flag = true;
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

text1.onmouseenter = handleMouseEnter;
text1.onmouseleave = handleMouseLeave;

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