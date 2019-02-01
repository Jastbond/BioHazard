
    let timerOn, timerOff, target, oldTarget, linkText;
    let startDot0 = document.querySelectorAll(".startDot")[0]; 
    let startDot1 = document.querySelectorAll(".startDot")[1];
    let startDot2 = document.querySelectorAll(".startDot")[2];
    let linkText0 = document.querySelectorAll(".linkText")[0];
    let linkText1 = document.querySelectorAll(".linkText")[1];
    let linkText2 = document.querySelectorAll(".linkText")[2];

    let overlay = document.querySelectorAll(".overlay");

    let logoTrans = document.querySelectorAll(".logoTrans");

    let logoWings = document.querySelectorAll(".logoWing");

    for(let i = 0; i < overlay.length; i++) {


            function over() {
                logoTrans[i].classList.add("overlay"+i);
                if (logoWings[i].classList.contains("logoLeft")) {
                    target = startDot0;
                } else if (logoWings[i].classList.contains("logoRight")) {
                    target = startDot1;
                } else if (logoWings[i].classList.contains("logoBottom")) {
                    target = startDot2;
                }
                if (oldTarget === startDot0 && oldTarget !== undefined) {
                    linkText = linkText0;
                } else if (oldTarget === startDot1) {
                    linkText = linkText1;
                } else if (oldTarget === startDot2) {
                    linkText = linkText2;
                }
                if (target !== oldTarget && oldTarget !== undefined && linkText.classList.contains("linkText-active")) {
                    linkText.classList.remove("linkText-active");
                    document.querySelector(".line0_active").classList.remove("line0_active");
                    document.querySelector(".line1_active").classList.remove("line1_active");
                    document.querySelector(".line2_active").classList.remove("line2_active");
                }
                oldTarget = target;
                timerOn = setTimeout(function () {
                    target.parentElement.previousElementSibling.classList.add("linkText-active");
                    target.firstElementChild.classList.add("line0_active");
                    let firstline = document.querySelector(".line0_active");
                    firstline.nextElementSibling.classList.add("line1_active");
                    target.lastElementChild.classList.add("line2_active");
                }, 300);
                clearTimeout(timerOff);
            }
        overlay[i].active = over;
        overlay[i].onmouseover = over;

        overlay[i].onmouseleave = function leave() {
            logoTrans[i].classList.remove("overlay"+i);
            timerOff = setTimeout(function(){
                target.parentElement.previousElementSibling.classList.remove("linkText-active");
                let firstline = document.querySelector(".line0_active");
                firstline.nextElementSibling.classList.remove("line1_active");
                target.firstElementChild.classList.remove("line0_active");
                target.lastElementChild.classList.remove("line2_active");
            }, 2000);
            clearTimeout(timerOn);
        };
    }

 /*   function leaveFunction(){
        timerOff = setTimeout(function(){
            target.parentElement.previousElementSibling.classList.remove("linkText-active");
            let firstline = document.querySelector(".line0_active");
            firstline.nextElementSibling.classList.remove("line1_active");
            target.firstElementChild.classList.remove("line0_active");
            target.lastElementChild.classList.remove("line2_active");
        }, 2000);
        clearTimeout(timerOn);
    }*/



    /*function howerFunction(){
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
*/

/*
    overlay[0].onmouseover = function() {logoTrans[0].classList.add("overlayLeft");};
    overlay[0].onmouseleave = function() {logoTrans[0].classList.remove("overlayLeft");};
    overlay[1].onmouseover = function() {logoWings[1].classList.add("overlayRight")};
    overlay[1].onmouseleave = function() {logoWings[1].classList.remove("overlayRight")};
    overlay[2].onmouseover = function() {logoWings[2].classList.add("overlayBottom")};
    overlay[2].onmouseleave = function() {logoWings[2].classList.remove("overlayBottom")};
*/





