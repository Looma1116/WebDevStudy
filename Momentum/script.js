const title = document.querySelector("div.hello h1");

let flag = true;
function handleTitleClick() {
    if (flag == true){
        title.style.color = "blue";
        flag = false;
    }
    else {
        title.style.color = 'black';
        flag = true;
    }

}
title.addEventListener("click", handleTitleClick);