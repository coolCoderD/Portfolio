/* toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* sctroll section activate link */
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset =sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })

    /* sticky navbar  */

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}
/* scroll reveal */
ScrollReveal({ 
    // reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});


const main=document.querySelector("body");
const crsr=document.querySelector(".cursor");

main.addEventListener("mousemove",function(e){
    crsr.style.left=e.x+"px";
    crsr.style.top=e.y+"px";
    
})

ScrollReveal().reveal('.home-content, .heading ',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form ',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ',{origin:'right'});

/* Typed js */
const type = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'Coder', 'Writer'],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay:1000,
    loop: true, 
});

