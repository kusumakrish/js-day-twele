console.log("Working...");

function changeDirection(){
    let changeDirection = document.getElementsByClassName("container");
    changeDirection[0].style.flexDirection = "column";
    const image=document.getElementsByTagName("img");
    image[0].src="th (1).jpg";
    let changeText= document.getElementById("message");
    changeText.innerHTML = " <div><b>i am doing good</b> </div>"
    // image[1].innerHTML=`<img src="th.jpg">`;
}
let element = document.createElement("div");
element.className="newDiv";
element.id="newDiv";
element.setAttribute("for","value");
element.innerText = "Hello I have created a new div from js";
console.log(element);
document.querySelector("p.impMessage").appendChild(element);

let createelement = document.createElement("img");
createelement.className="image";
createelement.setAttribute("src","th.jpg");
console.log(createelement);
document.querySelector("p#message").appendChild(createelement);