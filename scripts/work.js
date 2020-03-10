
const name = ["cosmos" ,"funeral"];
const description = ["cosmos good","funeral bad"];
const tecnology = ["cycle","eevee"];
const style = ["loft","groft"];
const program = ["blender","gimp"];

var fSSize = "40px;";
var fBSize = "65px;";

var boolWork = false;

const tagsWorksFonts = document.querySelectorAll(".tag");

const cards = document.querySelectorAll(".one_card");

cards.forEach(card => {
    card.addEventListener("click", event =>

   preShow(event.target.getAttribute("alt"))
   
    );
  });

  cards.forEach(card => {
    card.addEventListener("mouseenter", event =>

   //console.log(card.childNodes[1].childNodes[1]),
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
    console.log(work)
    
    showWork(boolWork);
    
switch(work){
case "cosmos":


break;
case "death":


   

    break;

}

  };

  function showWork(flag){

    const workPane = document.getElementById("work");
    const worksPane = document.getElementById("works");
    const textWorks = document.querySelectorAll(".tag");

   if(!flag){
       worksPane.style.width = "65vw";
workPane.style.right = "0";

        textWorks.forEach(text => {
            text.childNodes[1].style = "color: white; font-Size: 40px;"
            boolWork = true;
          });
        }else{
            worksPane.style.width = "100vw";
            workPane.style.right = "-500px";

            textWorks.forEach(text => {
                text.childNodes[1].style = "color: white; font-Size: 65px;"
              });
              boolWork = false;


        }

  }
  

 