var lastWork;

//const name = ["cosmos" ,"death","merry","dright","funeral","plane","opposing","funeral","funeral","funeral","funeral","funeral"];
const description = ["cosmos good","funeral bad","funeral bad"];
const tecnology = ["cycle","eevee","eevee"];
const styles = ["loft","groft"];
const program = ["blender","gimp"];

var fSSize = "40px;";
var fBSize = "65px;";


var boolWork = false;

const tagsWorksFonts = document.querySelectorAll(".tag");

const cards = document.querySelectorAll(".one_card");

function setWork(work){
const title = document.querySelectorAll(".title");
const img = document.querySelectorAll(".img_block");
const desc = document.querySelectorAll(".text");
const tecs = document.querySelectorAll(".tecnologies");
const style = document.querySelectorAll(".style");
const progs = document.querySelectorAll(".programs");


title[0].textContent = work.getAttribute("alt");
img[0].childNodes[1].src = work.src;
desc[0].childNodes[1].textContent = description[work.dataset.source];
tecs[0].textContent = "Tecnologies: " + tecnology[work.dataset.source];
style[0].textContent = "Style: " + styles[work.dataset.source];

oneProg = '<p>'+ program[0]+'</p>';
secProg = '<p>'+ program[1]+'</p>';
progs[0].innerHTML = oneProg;
progs[0].innerHTML += secProg;

}


cards.forEach(card => {
    card.addEventListener("click", event =>

  preShow(event.target) // event.target это уже img block
   
   
    );
  });

  cards.forEach(card => {
    card.addEventListener("mouseenter", event =>
//console.log(card),
   //console.log(card.childNodes[1].childNodes[1]),
   card.style.opacity = "1",
   card.childNodes[1].childNodes[1].style = "color: black; font-Size:" + fSSize
   
    );

    card.addEventListener("mouseleave", event =>
    reverseToWhite(card)
    );
    
  
  });

  function reverseToWhite(elem){

    if(!boolWork){
        //console.log(card.childNodes[1].childNodes[1]),
        elem.childNodes[1].childNodes[1].style = "color: white; font-Size:" + fBSize
         }else{

            elem.childNodes[1].childNodes[1].style = "color: white; font-Size:" + fSSize
         }

  }
 

  const descPane = document.getElementById("work");
  function preShow(work){
   // console.log(work)
   console.log(work),
       showWork(boolWork,work);
  

  };

  var switcherVar;
 

  function showWork(flag,work){

    const workPane = document.getElementById("work");
    const worksPane = document.getElementById("works");
    const textWorks = document.querySelectorAll(".tag");
    



console.log(work.parentNode);
   if(!flag){

    
       worksPane.style.width = "65vw";
workPane.style.right = "0";
setWork(work);
        textWorks.forEach(text => {
            text.childNodes[1].style = "color: white; font-Size: 40px;"
            
            boolWork = true;
            switcherVar = work.getAttribute("alt");
            work.style.opacity = "1";
          });
        }else{
           if(switcherVar === work.getAttribute("alt")){
            worksPane.style.width = "100vw";
            workPane.style.right = "-500px";
            work.style.opacity = "0";

            textWorks.forEach(text => {
                text.childNodes[1].style = "color: white; font-Size: 65px;"
              });
             
             // switcherVar = work.getAttribute("alt");
console.log("same card");

              boolWork = false;

             
           }else{
            console.log("NO same card");

            textWorks.forEach(text => {
              
              });
  work.style.opacity = "1";
            workPane.style.right = "-500px";

                textWorks.forEach(text => {
                  //  text.childNodes[1].style = "color: white; font-Size: 65px;"
                  });
                 
    
                  setTimeout(() => {
                    worksPane.style.width = "65vw";
    workPane.style.right = "0";
    setWork(work);

            textWorks.forEach(text => {
                text.childNodes[1].style = "color: white; font-Size: 40px;"
                
               // boolWork = true;
               
              });
                  }, 1000);
                  switcherVar = work.getAttribute("alt");
    
                  lastWork.style.opacity = "0";
                  

           }
              
                 

          

                


            

      




        }

        lastWork = work;

  }
  

 