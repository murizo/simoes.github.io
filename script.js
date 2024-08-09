let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height){
    NavLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ' ]').classList.add
        ('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }


   document.getElementById("radio"+count).checked = true;

}