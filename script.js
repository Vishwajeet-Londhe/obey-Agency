var t1=gsap.timeline()
gsap.from(".line h1",{
    y:150,
    stagger:0.25,
    duration: 0.6,
    delay: 0.5,
});

t1.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function() {
            if(grow<100){
                h5timer.innerHTML = grow++;
            }else{
                h5timer.innerHTML = grow;
            }
        },23);
    },
});

t1.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.3,
});

t1.from("#page1",{
    y:1200,
    opacity:0,
    delay:0.2,
    ease:Power4,
    duration:0.5
})

t1.to("#loader",{
    display:"none"
})