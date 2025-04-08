// function divmove() {
//     let page6 = document.querySelector(".page6-content");
//     let imagesection = document.querySelector(".page6 .img-animation");

//     page6.addEventListener("mouseenter", function () {
//         imagesection.style.transform = "translateY(-150%)";
//         imagesection.style.opacity = "1";
//         imagesection.style.visibility = "visible";
//     });

//     page6.addEventListener("mouseleave", function () {
//         imagesection.style.transform = "translateY(0%)";
//         imagesection.style.opacity = "1";
//         imagesection.style.visibility = "hidden";
//     });
// }

// divmove()

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}

locomotive()

function customCursor() {
    let cursor = document.querySelector(".custom-cursor");
    let images = document.querySelectorAll("img")

    document.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.clientX - 12,
            y: dets.clientY - 12,
            duration: 0.2,
            ease: "power2.out"
        });
    });

    images.forEach(function (img) {
        img.addEventListener("mouseenter", function () {
            let svgStrokes = document.querySelectorAll(".custom-cursor svg *");

            svgStrokes.forEach(function (shape) {
                shape.setAttribute("stroke", "#c34722");
            });
        })

        img.addEventListener("mouseleave", function () {
            let svgStrokes = document.querySelectorAll(".custom-cursor svg *");

            svgStrokes.forEach(function (shape) {
                shape.setAttribute("stroke", "black");
            });
        })
    })
}

customCursor()

function gsapanimation() {
    function loaderAnimation() {
        let tl = gsap.timeline();

        tl.from("#play span", {
            x: -200,
            duration: 1,
            stagger: -0.05,
            opacity: 0,
            ease: "back.out(2)"
        })

        tl.to("#play span", {
            y: -150,
            duration: 0.4,
            stagger: 0.05
        }, "anim")

        tl.to("#new span", {
            y: -80,
            duration: 0.7,
            stagger: 0.05,
            delay: 0.1,
            ease: "back.out(3)"
        }, "anim")

        tl.to("#new span", {
            x: 280,
            duration: 0.5,
            stagger: -0.05,
            delay: 0.2,
            opacity: 0
        })

        tl.to(".loader", {
            opacity: 0,
            display: "none"
        }, "flow")

        tl.from(".section1 .head svg path", {
            y: 100,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out"
        }, "flow")

        tl.from(".section1 .head h2 span", {
            y: 100,
            duration: 0.5,
            stagger: 0.15
        }, "flow")

        tl.from(".section1 .head h4", {
            y: 200,
            duration: 0.6,
            opacity: 0,
            ease: "power4.out"
        }, "flow")

        tl.from(".section2", {
            y: 200,
            duration: 0.6,
            opacity: 0,
            ease: "power4.out"
        }, "flow")

        tl.from(".section1 .nav a", {
            y: 250,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.1
        }, "flow")
    }

    loaderAnimation()

    function page1scroll() {

        gsap.set(".page1 .section2 .content", {
            width: "45%"
        });

        gsap.set(".page1 .section2 .page1-img", {
            width: "55%"
        });

        gsap.to(".page1 .section2 .content", {
            width: "15%",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".page1",
                scroller: ".main",
                start: "top 0%",
                end: "top -15%",
                scrub: 2
            }
        }, "width")

        gsap.to(".page1 .section2 .page1-img", {
            width: "85%",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".page1",
                scroller: ".main",
                start: "top 0%",
                end: "top -15%",
                scrub: 2
            }
        }, "width")
    }

    page1scroll()

    function page2scroll() {

        gsap.from(".page2 .page2-middle .text .line span", {
            y: 150,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".page2",
                scroller: ".main",
                start: "top 50%",
                end: "top -20%",
                scrub: 1
            }
        })

        gsap.to(".page2 .page2-middle .text svg", {
            y: -150,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".page2 .page2-middle .text .line1",
                scroller: ".main",
                start: "top 45%",
                end: "top -20%",
                scrub: 1
            }
        })

        gsap.to(".page2 .page2-middle .text img", {
            y: -150,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".page2 .page2-middle .text .line1",
                scroller: ".main",
                start: "top 45%",
                end: "top -40%",
                scrub: 1
            }
        })
    }

    page2scroll()

    function page3scroll() {

        gsap.to(".page3 .page3-content .pick h2 span", {
            y: -250,
            duration: 0.5,
            stagger: 0.04,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".page3",
                scroller: ".main",
                start: "top 60%",
                end: "top 40%"
            }
        }, "up")

        gsap.to(".page4 .section2 .service-text h2 span", {
            y: "-100%",
            duration: 0.4,
            stagger: 0.04,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".page4 .section2",
                scroller: ".main",
                start: "top 100%",
                end: "top 70%"
            }
        })

        gsap.set(".home2", {
            position: "relative",
            zIndex: 6
        })

        gsap.set(".home3", {
            position: "relative",
            zIndex: 4
        })

        gsap.set(".home4", {
            position: "relative",
            zIndex: 2
        })

        gsap.set(".home1", {
            position: "relative",
            zIndex: 8
        })

        gsap.from(".page4 .section3 .translate", {
            y: -200,
            rotate: -5,
            opacity: 0,
            stagger: 0.25,
            backgroundColor: "#e9e9e9",
            duration: 0.6,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".page4 .section3",
                scroller: ".main",
                start: "top 55%",
                end: "top 0%",
                scrub: 2
            }
        })
    }

    page3scroll()

    function page4scroll() {
        gsap.to(".page6 .page6-content .page6-middle .page6-text .lineup h2 span", {
            y: "-100%",
            duration: 0.5,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".page6",
                scroller: ".main",
                start: "top 40%",
                end: "top 20%"
            }
        })

        gsap.set(".page6 .img-animation", {
            opacity: 1,
            visibility: "hidden",
        });
        
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page6",
                scroller: ".main",
                start: "top 0%",
                end: "top -100%",
                pin: true,
                onEnter: () => {
                    gsap.set(".page6 .img-animation", { visibility: "visible" });
                },
                onLeaveBack: () => {
                    gsap.set(".page6 .img-animation", { visibility: "hidden" });
                }
            }
        });
        
        tl.to(".page6 .img-animation", {
            y: "-150%", 
            duration: 0.5
        });
    }

    page4scroll()

    function footerscroll() {

        gsap.from(".footer .footer-content .head-svg svg path", {
            y: "-120%",
            duration: 0.6,
            stagger: 0.15,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".footer",
                scroller: ".main",
                start: "top 60%",
                end: "top 30%",
                scrub: 2
            }
        })
    }

    footerscroll()
}

gsapanimation()