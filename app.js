function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveScroll();

function page2Effects(){
  let animationisDone = false;
  let VideoPage1ContentText = document.querySelector(".VideoElementPage1-TextContent");
  /*VideoPage1ContentText.addEventListener("mouseenter",function(){
 /* window.addEventListener("keydown",function(e){
     switch(e.key){
      case "ArrowDown":     
     gsap.to(VideoPage1ContentText,{
      top:"-50px",
      stagger:0.3,
      duration:0.3,
     });
     break;
     case "ArrowUp":
      gsap.to(VideoPage1ContentText,{
        top:-"50",
        stagger:0.3,
        duration:0.3,
       });
      break;
  }
})
})*/
 let tl = gsap.timeline({
   scrollTrigger:{
    trigger:"#page2",
    start:"top top",
    scrub:1,
    scroller:"#main",
    //markers:true,
    pin:true, 
 }
 });
 tl.to("#page2 .VideoElementPage1-TextContent",{
  top:"-50%",
 })
}
page2Effects();

function Page3Effects(){
let page3 = document.getElementById("page3");
let Page3Video = document.querySelector("#Page3Video");
//let Page3videoImg = document.querySelector(".page3CenteredContent-Img2");
page3.addEventListener("mouseenter",function(){
  window.addEventListener("keydown",function(e){
    switch(e.key){
      case "ArrowDown":
      gsap.to(Page3Video,{
        duration:1,
        rotationY:180,
        stagger:0.5,
      });
    break;
    case "ArrowUp":
      gsap.to(Page3Video,{
        stagger:0.5,
        rotationY:0,
        duration:1,
      })
    }
  })
});
}
Page3Effects();

/*function page4Effects(){

// ChatGpt Code 
// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('#page4'), // Adjust the container as needed
  smooth: true,
  lerp: 0.1, // Adjust the scroll speed
});

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  const videoTextWrapper = document.querySelector('.VideoTextWrapper');
  
  videoTextWrapper.addEventListener('mouseenter', () => {
    // When mouse enters, slow down the scroll by reducing scroll speed
    locoScroll.update(); // Recalculate the scroll position (important after any update)

    // You can adjust the scroll speed by controlling the `lerp` value or using custom delays
    locoScroll.scrollTo(videoTextWrapper, {
      duration: 15000, // Time in ms to slowly scroll to this section
      easing: [0.25, 0.00, 0.35, 1.00] // Easing function for smoothness
    });
  });
});




// ChatGPT CODE Ends Here



  let page4 = document.getElementById("page4");
   let videoWrapperText = document.querySelector(".VideoTextWrapper");
   page4.addEventListener("mouseenter",function(){
    window.addEventListener("keydown",function(e){
      switch (e.key) {
        case "ArrowDown":
          gsap.to(videoWrapperText,{
            top:"-255px",
            duration:3,
            stagger:0.3,
          })
          break;
         case "ArrowUp":
          gsap.to(videoWrapperText,{
            top:"255px",
            stagger:0.3,
          })
        default:
          break;
      }
    })
   })

}*/

function page4Effects() {
 // use of lerp

  let page4 = document.getElementById("page4");
  let videoWrapperText = document.querySelector(".VideoTextWrapper");

  // Handle keypress (ArrowDown / ArrowUp) to animate text movement
  let tl = gsap.timeline({
    scrollTrigger:{
     trigger:"#page4",
     start:"top top",
     scrub:1,
     scroller:"#main",
    // markers:true,
     pin:true, 
  }
  });
  tl.to("#page4 .VideoTextWrapper",{
    top:"-50%",
    onComplete:function(){
      tl.to("#page4 #large",{
        scale:0.9,
        stagger:0.3,
        lerp:0.1,
        duration:0.5,
      })
    }
   })
  /*page4.addEventListener("mouseenter", function () {
    window.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowDown":
          gsap.to("#large",{
            scale:0.9,
            stagger:0.3,
            lerp:0.1,
            duration:2,
        });
          break;
        case "ArrowUp":
          gsap.to("#large",{
            scale:1,
            stagger:0.3,
            lerp:0.1,
            duration:2
          })
          break;
        default:
          break;
      }
    });


  });*/
}

page4Effects();


function page5(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page5",
      start:"top top",
      scroller:"#main",
      scrub:1,
      pin:true,
     // markers:true,
    }
  });

  tl.to("#page5 .VideoTextPage5",{
    top:"-50%",
    onComplete:function(){
      tl.to("#page5 video",{
        scale:0.9,
        stagger:0.3,
        duration:0.3,
      })
    }
  })
}
page5();


function canvasPage8(){
  const canvas = document.querySelector("#page8>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    Vision00001.png
    Vision00002.png
    Vision00003.png
    Vision00004.png
    Vision00005.png
    Vision00006.png
    Vision00007.png
    Vision00008.png
    Vision00009.png
    Vision00010.png
    Vision00011.png
    Vision00012.png
    Vision00013.png
    Vision00014.png
    Vision00015.png
    Vision00016.png
    Vision00017.png
    Vision00018.png
    Vision00019.png
    Vision00020.png
    Vision00021.png
    Vision00022.png
    Vision00023.png
    Vision00024.png
    Vision00025.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 25; // Error Caught Because of FrameCount
  // The error was the drwaImage Scale is Broken State
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page8`,
      stagger:0.8,
     duration:0.9,
      //   set start end according to preference
      start: `top top`,
      end: `80% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page8",
    pin: true,
     /*markers:true,*/
     stagger:0.6,
     duration:0.9,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `80% top`,
  });
}
canvasPage8();

function page8VideoEffect() {
  let Page8 = document.querySelector("#page8");
   let page8Video = document.querySelector("#page8Video");
   console.log(page8Video);
   Page8.addEventListener("mouseenter",function(e){
    page8Video.play();
   })
   Page8.addEventListener("mouseleave",function(e){
    page8Video.pause();
   });
}
page8VideoEffect();


let tl = gsap.timeline();
tl.from("#loader h2",{
   x:80,
   opacity:0,
   stagger:0.8,
   duration:1,
})
tl.to("#loader h2",{
    stagger:0.3,
    x:-80,
    duration:1,
    opacity:0,
});
tl.to("#loader",{
  opacity:0,
});
tl.to("#loader",{
  display:"none",
})
