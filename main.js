//landing part
let landing = document.querySelector(".landing");
let next = document.getElementById("next");
let pre = document.getElementById("pre");
let bullets = document.querySelectorAll(".bullets li");
let imgs = [
    "photos/landing1.jfif",
    "photos/landing2.jpeg",
    "photos/landing3.jfif"
];


let current = 1;

function changeimg(){
    landing.style.backgroundImage=`url(${imgs[current]})`;
    // change bullets
    bullets.forEach((b)=> {
    b.classList.remove("activeImg");
    if(bullets[current]){
        bullets[current].classList.add("activeImg");
    }
});
};

changeimg();      // علشان يدي صوره عند تحميل الصفحه
next.addEventListener("click",()=>{
    current++;
    if(current===imgs.length){
        current=0;
    }
    changeimg();
});
pre.addEventListener("click",()=>{
    current--;
    if(current<0){
        current= imgs.length-1;
    }
    changeimg();
});

bullets.forEach((b,i) => {
    b.addEventListener("click",()=>{
        bullets.forEach((x)=>{
            x.classList.remove("activeImg");
        });
        b.classList.add("activeImg");

        current=i;
        changeimg()
    })
});


// if we want it to change automaticlly

function changeimgInterval(){
    current++;
    if(current===imgs.length){
        current=0;
    }else if(current<0){
        current= imgs.length-1;
    }
    landing.style.backgroundImage=`url(${imgs[current]})`;
    // change bullets
    bullets.forEach((b)=> {
    b.classList.remove("activeImg");
    if(bullets[current]){
        bullets[current].classList.add("activeImg");
    }
});
};
setInterval(changeimgInterval,3000);

// scrolling count section states

let nums=document.querySelectorAll(".states .box .number");
let section=document.querySelector(".states");
let started=false // not started

window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
        if(!started){
            nums.forEach((num)=> startcount(num));
        }
        started=true;
    }
}
function startcount(el){
    let goal= el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count);
        }
    },3000/goal);
};