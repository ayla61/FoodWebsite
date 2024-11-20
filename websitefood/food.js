var menu= document.getElementById("menu")
var box3= document.getElementById("box3")
var menu2= document.getElementById("menu2")
box3.style.right = "-250px"
menu.onclick = function(){
    if(box3.style.right == "-250px"){
        box3.style.right="0";
    }
    else{
        box3.style.right = "-250px";
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});