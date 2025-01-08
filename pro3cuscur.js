var main=document.querySelector("#main")
var cus=document.querySelector(".cursor")

main.addEventListener("mousemove", function(det){
    cus.style.left=det.x+"px"
    cus.style.top=det.y+"px"
})