window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
});

//frequently asked question

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className= "uil uil-minus";
        } else{
            icon.className==="uil uil-plus";
        }
    })
})

// menue toggler

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() => {
    menu.style.display = "flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})

const closeNav= () =>{
    menu.style.display = "none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click', closeNav)

// Work section NETWORK INFRASTRUCTURE

const showContent = document.querySelector(".show-content");
const hideContent = document.querySelector(".hide-content");
const displayCard = document.querySelector(".NTIT-bottom");

const showCards = () => {
    showContent.style.display = "none";
    hideContent.style.display = "block";
    displayCard.style.display = "grid";
}

const closeCards = () =>{
    showContent.style.display = "block";
    hideContent.style.display = "none";
    displayCard.style.display = "none";
}

showContent.addEventListener('click',showCards);

hideContent.addEventListener('click', closeCards);

// work section->STIRAGE & SERVER


const storageDisplay = document.querySelector(".storage-bottom");
const storageShowContent = document.querySelector(".storage-show-content");
const storageHideContent = document.querySelector(".storage-hide-content");

const showStorageCards = () =>{
    storageShowContent.style.display = "none";
    storageHideContent.style.display = "block";
    storageDisplay.style.display = "grid";
}

const closeStorgaeCards = () =>{
    storageShowContent.style.display = "block";
    storageHideContent.style.display = "none";
    storageDisplay.style.display = "none";
}
storageShowContent.addEventListener('click', showStorageCards);

storageHideContent.addEventListener('click',closeStorgaeCards);



// work section->VIRTUALIZATION


const virtualDisplay = document.querySelector(".virtual-bottom");
const virtualShowContent = document.querySelector(".virtual-show-content");
const virtualHideContent = document.querySelector(".virtual-hide-content");

const showvirtualCards = () =>{
    virtualShowContent.style.display = "none";
    virtualHideContent.style.display = "block";
    virtualDisplay.style.display= "grid";
}

const closeVirtualCards = () =>{
    virtualShowContent.style.display = "block";
    virtualHideContent.style.display = "none";
    virtualDisplay.setAttribute("style", "display:none");
}
virtualShowContent.addEventListener('click', showvirtualCards);

virtualHideContent.addEventListener('click',closeVirtualCards);