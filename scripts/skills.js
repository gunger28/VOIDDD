const skill1 = document.getElementById("fst");
const skill2 = document.getElementById("sec");
const skill3 = document.getElementById("thi");


var tmpObj = document.getElementById("panels_cat");


const desc = document.getElementById("desc_block");

var flagDesc = false;

const open = true;
const close = false;

const Ptag = document.getElementById("panels_cat");

Ptag.childNodes.forEach(elem => {
    elem.addEventListener("click", function() {

        slide_desc(elem,open);





  //  console.log(Ptag.childNodes),
// audio = new Audio(), // Создаём новый элемент Audio
// audio.volume = 0.5;
//     audio.src = "./audio/click.mp3",// Указываем путь к звуку "клика"
//     audio.autoplay = true


    });
});

function slide_skills(flag){

if(flag == close){
skill1.style.transform = "translateY(1000px)";
skill2.style.transform = "translateY(1000px)";
skill3.style.transform = "translateY(1000px)";
}
if(flag == open){

    skill1.style.transform = "translateY(0px)";
    skill2.style.transform = "translateY(0px)";
    skill3.style.transform = "translateY(0px)";

}
};

function slide_desc(elem,flag){
tmpObj.style.color = "";
    
    if(tmpObj !== elem && flagDesc){
        console.log("open other desc");
            desc.style.left = "2500px";
        elem.style.color = "orange";
            setTimeout(() => {
                desc.style.left = "0px";
            }, 600);
        
        }

if(tmpObj !== elem && !flagDesc ){
    elem.style.color = "orange";
    slide_skills(close);
    desc.style.left = "0px";
flagDesc = true;
}

if(tmpObj == elem && flagDesc ){
    desc.style.left = "2500px";
    setTimeout(() => {
        slide_skills(open);
    }, 400);
   
   
    flagDesc = false;
}






tmpObj = elem;
}