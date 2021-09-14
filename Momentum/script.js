const text1 = document.querySelector("div.hello h1");

function handleText1Click() {
    text1.classList.toggle("active");
}

text1.addEventListener("click", handleText1Click);
