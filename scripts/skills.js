
const skill1 = document.getElementById("fst"); // get the one card
const skill2 = document.getElementById("sec"); // get the one card
const skill3 = document.getElementById("thi"); // get the one card

const media = document.getElementById("media"); //get vid div of panel with big desc and pics/video (category) desc panel
const textDesc = document.getElementById("text_desc"); //get text of desc panel
var tmpObj = document.getElementById("panels_cat"); // temp var for close desc panel
const descr = document.getElementById("desc_block"); // main div of desc panel
const Ptag = document.getElementById("panels_cat"); // panel list of categories

var flagDesc = false; //closed/opened desc panel
const open = true;
const close = false;

// action to set desc and vid/pic in desc panel
Ptag.childNodes.forEach(elem => {
    elem.addEventListener("click", function() {

        slide_desc(elem,open);

setTimeout(() => {
    setContent(elem);
}, 300);
    });
});

// animation to slide in bottom of main 3 cards
function slide_skills(flag){

if(flag == close){
 //   skill3.style.width = "200px";
 //   skill3.style.height = "200px";
    skill3.style.transform = "translateY(1000px)";

setTimeout(() => {
   // skill2.style.width = "200px";
  //  skill2.style.height = "200px";
    skill2.style.transform = "translateY(1000px)";
}, 100);

setTimeout(() => {
   // skill1.style.width = "200px";
  //  skill1.style.height = "200px";
    skill1.style.transform = "translateY(1000px)";
}, 200);

}
if(flag == open){
    skill1.style.width = "";
    skill1.style.height = "";
    skill1.style.transform = "translateY(0px)";

    setTimeout(() => {
        skill2.style.width = "";
    skill2.style.height = "";
        skill2.style.transform = "translateY(0px)";
    }, 100);
    
    setTimeout(() => {
        skill3.style.width = "";
    skill3.style.height = "";
        skill3.style.transform = "translateY(0px)";
      
    }, 200);

}
};

// animation to show desc panel
function slide_desc(elem,flag){
tmpObj.style.color = "";
boolka = false;
    
    if(tmpObj !== elem && flagDesc){
        console.log("open other desc");
        descr.style.left = "2500px";
        elem.style.color = "orange";
            setTimeout(() => {
                descr.style.left = "0";
               
            }, 600);
            boolka =true;

            tmpObj = elem;
        }

if(tmpObj !== elem && !flagDesc ){
    console.log("open first time");
    elem.style.color = "orange";
    slide_skills(close);
    descr.style.left = "0";
   
flagDesc = true;
boolka =true;

tmpObj = elem;
}



if(tmpObj == elem && flagDesc && !boolka){
    console.log("close all");
    descr.style.left = "2500px";
    setTimeout(() => {
        slide_skills(open);
    }, 100);
   
    tmpObj = document.getElementById("panels_cat");
    flagDesc = false;
}
}

//set desc and pic/vid to desc panel
function setContent(theme){
    var n = String(theme.dataset.media);
    console.log(n.length);

    

     if(n[n.length-1] === "m"){
       media.childNodes[1].style.opacity = 1;
    media.childNodes[1].setAttribute("src", theme.dataset.media);

    media.childNodes[1].onload = () => {
        media.childNodes[1].play();
    };


    media.style.backgroundImage = ""; 
}else{
    media.childNodes[1].setAttribute("src", "");
    media.style.backgroundImage = "url("+theme.dataset.media+")";
    media.style.backgroundSize = ("100% 100%");

 }
textDesc.textContent = theme.dataset.desc;
}