// var a=[1,2,3,4];

// var b=[...a];

// var c={name:"vaibhav"};
// var d={...c};


// if(NaN){
//     console.log("Hello");
// }
// else{
//     console.log("Hey");
// }

// if(document.all){
//     console.log("Hello");
// }
// else{
//     console.log("Hey");
// }


// a=[1,2,3,4,5,5,6,6,45,3342,63];

// a.forEach(function(val){
//     console.log(val);
// })


// setTimeout(function(){
//     console.log("Hello");
// },2000);

// console.log("H1");
// console.log("H2");
// setTimeout(function(){
//     console.log("H3");
// },0);
// console.log("H4");


// var a=new Promise((res, rej)=>{
//     var n=Math.floor(Math.random()*10);

//     if(n>5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// a.then(function(){
//     console.log("Above")
// })


// .catch(function(){
//     console.log("Below");
// })

var a=document.querySelector("h1")
console.log(a)
a.innerHTML="Changed"
a.style.color="red"
a.style.backgroundColor="pink"
a.addEventListener( "click",function(){
    a.style.color="yellow"
})