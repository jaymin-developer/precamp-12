// pressedBtn = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
// document.getElementById("auth").innerText = token;
// document.getElementById("auth").style.color = "#" + token;


// }

pressedBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
document.getElementById("auth").innerText = token;
document.getElementById("auth").style.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}