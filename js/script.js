const head = document.createElement("h1");
const para = document.createElement("p");
const btn = document.createElement("button");

head.innerText = "This is inside an H1 element"
para.innerText = "This is a paragraph";
btn.innerHTML = "This is a Button";

document.body.appendChild(head);
document.body.appendChild(para);
document.body.appendChild(btn);

function changeH2(){
document.querySelector('h2').innerText = 
"I just changed this with javascript";
}

