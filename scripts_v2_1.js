window.onload = function(){
    let timerOn, timerOff, target, oldTarget, linkText;
    let startDot0 = document.querySelectorAll(".startDot")[0]; 
    let startDot1 = document.querySelectorAll(".startDot")[1];
    let startDot2 = document.querySelectorAll(".startDot")[2];
    let linkText0 = document.querySelectorAll(".linkText")[0];
    let linkText1 = document.querySelectorAll(".linkText")[1];
    let linkText2 = document.querySelectorAll(".linkText")[2];

    let logoWings = document.querySelectorAll(".logoWing");
    for(let i = 0; i < logoWings.length; i++){
        logoWings[i].onmouseover = howerFunction;
        logoWings[i].onmouseleave = leaveFunction;
    }

    function howerFunction(){
        if(this.classList.contains("logoLeft")){
            target = startDot0;
        }else if(this.classList.contains("logoRight")){
            target = startDot1;
        }else if(this.classList.contains("logoBottom")){
            target = startDot2;
        }
        if(oldTarget === startDot0 && oldTarget !== undefined){
            linkText = linkText0;
        }else if(oldTarget === startDot1){
            linkText = linkText1;
        }else if(oldTarget === startDot2){
            linkText = linkText2;
        }
        if(target !== oldTarget && oldTarget !== undefined && linkText.classList.contains("linkText-active")){
            linkText.classList.remove("linkText-active");
            document.querySelector(".line0_active").classList.remove("line0_active");
            document.querySelector(".line1_active").classList.remove("line1_active");
            document.querySelector(".line2_active").classList.remove("line2_active");
        }
        oldTarget = target;
        timerOn = setTimeout(function(){
            target.parentElement.previousElementSibling.classList.add("linkText-active");
            target.firstElementChild.classList.add("line0_active");
            let firstline = document.querySelector(".line0_active");
            firstline.nextElementSibling.classList.add("line1_active");
            target.lastElementChild.classList.add("line2_active");
        }, 300);
        clearTimeout(timerOff);
    }

    function leaveFunction(){
        timerOff = setTimeout(function(){
            target.parentElement.previousElementSibling.classList.remove("linkText-active");
            let firstline = document.querySelector(".line0_active");
            firstline.nextElementSibling.classList.remove("line1_active");
            target.firstElementChild.classList.remove("line0_active");
            target.lastElementChild.classList.remove("line2_active");
        }, 2000);
        clearTimeout(timerOn);
    }
};