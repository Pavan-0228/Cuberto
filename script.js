var cursor = document.querySelector(".cursor")
window.addEventListener("mousemove",function (dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
  })
  

var t = gsap.timeline();

t.from(".nav ",{
    y:-25,
    duration : .4,
    delay : .65,
    opacity: 0
})

t.from(".page1-main h2",{
    duration : .4,
    opacity:0
},"ani")

t.from(".inner h1",{
    x: -50,
    y: 50,
    duration: .7,
    opacity: 0,
    stagger:.2
},"ani")

t.from(".page1-last",{
    opacity:0,
    delay: .5,
})

gsap.to(".fleft",{
    scrollTrigger:{
        trigger:".element",
        start:"top top",
        end:"buttom top",
        // markers: true,
        endTrigger: ".last",
        pin: true,
        scrub:3
    },
    y:"-300%",
})