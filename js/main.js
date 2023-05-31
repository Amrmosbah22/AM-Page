let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let amr = document.querySelector(".amr");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px"
    moon.style.top = value*4 + "px"
    mountains3.style.top = value*2 + "px"
    mountains4.style.top = value*1.5 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value*3 + "px"
    amr.style.fontSize = value + "px"
    if( scrollY >= 95 ){
        amr.style.fontSize = 95 + "px";
        amr.style.position = "fixed";
        if( scrollY >= 605 ){
            amr.style.display = "none";
        }else{
            amr.style.display = "block";
        }if( scrollY >= 145 ){
            document.querySelector(".main").style.background = "linear-gradient(#162b42, #000000)"
        }else{
            document.querySelector(".main").style.background = "linear-gradient(#160a16, #000000)"
        }
    }
}