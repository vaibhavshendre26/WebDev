var rec=document.querySelector("#center");
rec.addEventListener("mousemove",function(dets){
    var recloc=rec.getBoundingClientRect();
    var insiderecval=dets.clientX-recloc.left;
    //console.log(insiderecval);

    if(insiderecval<recloc.width/2){
        var redclr=gsap.utils.mapRange(0,recloc.width/2,255,0,insiderecval);
        gsap.to(rec,{
            backgroundColor:`rgb(${redclr},0,0)`,
            ease: Power4
        })
    }
    else{
        var blueclr=gsap.utils.mapRange(recloc.width/2,recloc.width,0,255,insiderecval);
        gsap.to(rec,{
            backgroundColor:`rgb(0,0,${blueclr})`,
            ease: Power4
        })
    }
});

rec.addEventListener("mouseleave",function(){
    gsap.to(rec,{
        backgroundColor:"white"
    })
});