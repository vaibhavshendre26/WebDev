var sts=document.querySelector("h3")
var addfrd=document.querySelector("#add")
// var remfrd=document.querySelector("#rem")


// addfrd.addEventListener("click",function(){
//     sts.innerHTML="Friends"
//     sts.style.color="green"
// })

// remfrd.addEventListener("click",function(){
//     sts.innerHTML="Strenger"
//     sts.style.color="red"
// })

var isfrd=0;

addfrd.addEventListener("click",function(){
    if(isfrd==0){
        sts.innerHTML="Friends"
        sts.style.color="green"
        addfrd.innerHTML="Remove"
        isfrd=1;
    }
    else{
        sts.innerHTML="Unknown"
        sts.style.color="red"
        addfrd.innerHTML="Add Friend"
        isfrd=0
    }
})