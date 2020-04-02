const skill1 = document.getElementById("fst");
const skill2 = document.getElementById("sec");
const skill3 = document.getElementById("thi");

const media = document.getElementById("media");
const text = document.getElementById("text_desc");


var tmpObj = document.getElementById("panels_cat");


const desc = document.getElementById("desc_block");

var flagDesc = false;

const open = true;
const close = false;

const Ptag = document.getElementById("panels_cat");

Ptag.childNodes.forEach(elem => {
    elem.addEventListener("click", function() {

        slide_desc(elem,open);

setTimeout(() => {
    setContent(elem);
}, 300);




  //  console.log(Ptag.childNodes),
// audio = new Audio(), // Создаём новый элемент Audio
// audio.volume = 0.5;
//     audio.src = "./audio/click.mp3",// Указываем путь к звуку "клика"
//     audio.autoplay = true


    });
});

function slide_skills(flag){

if(flag == close){
    skill3.style.width = "200px";
    skill3.style.height = "200xp";
    skill3.style.transform = "translateY(1000px)";

setTimeout(() => {
    skill2.style.width = "200px";
    skill2.style.height = "200xp";
    skill2.style.transform = "translateY(1000px)";
}, 100);

setTimeout(() => {
    skill1.style.width = "200px";
    skill1.style.height = "200xp";
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

function slide_desc(elem,flag){
tmpObj.style.color = "";
boolka = false;
    
    if(tmpObj !== elem && flagDesc){
        console.log("open other desc");
            desc.style.left = "2500px";
        elem.style.color = "orange";
            setTimeout(() => {
                desc.style.left = "0px";
            }, 600);
            boolka =true;

            tmpObj = elem;
        }

if(tmpObj !== elem && !flagDesc ){
    console.log("open first time");
    elem.style.color = "orange";
    slide_skills(close);
    desc.style.left = "0px";
flagDesc = true;
boolka =true;

tmpObj = elem;
}



if(tmpObj == elem && flagDesc && !boolka){
    console.log("close all");
    desc.style.left = "2500px";
    setTimeout(() => {
        slide_skills(open);
    }, 100);
   
    tmpObj = document.getElementById("panels_cat");
    flagDesc = false;
}
}

const img = ("../assets/decor/rainbow.jpg");

function setContent(theme){
    var n = String(theme.dataset.media);
    console.log(n.length);

     if(n[n.length-1] === "m"){
       
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
    //media.style.backgroundImage = "url("+img[0]+")";
    

console.log(media.childNodes[1]);
//console.log(theme);

text.textContent = theme.dataset.desc;




}