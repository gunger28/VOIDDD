
// descripts for the every work
const tecnology = ["eevee", "cycles","cycles", "cycles","eevee","eevee","eevee","cycles","eevee","eevee","eevee","eevee","eevee"];
const styles = ["poly", "nurbs", "particles", "particles", "particles", "MIX", "procedural", "procedural", "poly", "poly", "procedural", "MIX"];
const program = ["blender", "gimp", "CrazyBump", "NanoStudio", "Inkscape"];

var Mobile_fSSize = "20px;"; // font size opened
var Mobile_fbSize = "40px;"; // font size closed

var fSSize = "40px;"; // font size opened
var fBSize = "65px;"; // font size closed

var boolWork = false; // bool to close right side panel
var boolOpacity = true; // opac for opened work
var switcherVar; // do not try to get it
var lastWork; // refs for close side panel

var tagsWorksFonts = document.querySelectorAll(".tag"); // get all title div of 1 card
var descPane = document.getElementById("work"); // get right side p
var cards = document.querySelectorAll(".one_card"); // get cards of work


var title = document.querySelectorAll(".title");
var img = document.querySelectorAll(".img_block");
var desc = document.querySelectorAll(".text");
var tecs = document.querySelectorAll(".tecnologies");
var style = document.querySelectorAll(".style");
var progs = document.querySelectorAll(".programs");


function setPhoneStyle(){

//   desc.forEach(des => {
    
//   
// });
console.log(desc[0].childNodes[1]);
desc[0].childNodes[1].style = "font-size: 14px ;"

style[0].style = "font-size: 24px ;"
tecs[0].style = "font-size: 24px ;"
//desc[0].childNodes[1].style = "font-size: 14px ;"

  fSSize = Mobile_fSSize;
  fBSize = Mobile_fbSize;


}


// set descs to the right side panel
function setWork(work) {
 
  title[0].textContent = work.getAttribute("alt");
  img[0].childNodes[1].src = work.src;
  console.log(work.dataset.descript);
  desc[0].childNodes[1].textContent = work.dataset.descript
  tecs[0].textContent = "Tecnology: " + tecnology[work.dataset.source];
  style[0].textContent = "Style: " + styles[work.dataset.source];

  oneProg = "<p>" + program[0] + "</p>";
  secProg = "<p>" + program[1] + "</p>";
  progs[0].innerHTML = oneProg;
  progs[0].innerHTML += secProg;
}

// target action to clode right panel when u click last work
cards.forEach(card => {
  card.addEventListener(
    "click",
    event => showWork(boolWork, event.target)// event.target это уже img block
  );
});

// animation font and size of card
cards.forEach(card => {
  card.addEventListener("mouseenter", function() {
  
    card.childNodes[1].childNodes[1].style =
      "color: black; font-Size:" + fSSize + ";";

    console.log(card.children[1]);
  
    if (lastWork != null && boolWork === true) {
      lastWork.style.opacity = "1";
    }

    card.children[1].style.opacity = "1";
  });

  card.addEventListener("mouseleave", function() {
    opacity_img(boolOpacity);
    reverseToWhite(card);
    if (lastWork != null && boolWork === true) {
        lastWork.style.opacity = "1";
      }
  });
});

//hard reverse style to card
function reverseToWhite(elem) {
  if (!boolWork) {
  

    elem.childNodes[1].childNodes[1].style =
      "color: white; font-Size:" + fBSize;
  } else {
    elem.childNodes[1].childNodes[1].style =
      "color: white; font-Size:" + fSSize;
  }
}

//hard set style opac to card
function opacity_img(flag) {
  cards.forEach(card => {
    if (flag) {
      card.children[1].style.opacity = "0";
    }
  });
}

//close right side panel
function close_work_viewer(){
    const textWorks = document.querySelectorAll(".tag");
    const workPane = document.getElementById("work");
    const worksPane = document.getElementById("works");

    worksPane.style.width = "90%";
    worksPane.style.height = "85%";
    workPane.style.right = "-900px";
    boolOpacity = true;
    boolWork = false;
    cards.forEach(card => {
        card.children[1].style.opacity = "0";
     
    });
    textWorks.forEach(text => {
        text.childNodes[1].style = "color: white; font-Size: " + fBSize + ";";
      });
}

//change style to all cards when that open/close
function showWork(flag, work) {
  const workPane = document.getElementById("work");
  const worksPane = document.getElementById("works");
  const textWorks = document.querySelectorAll(".tag");

 
  if (!flag) {
    worksPane.style.width = "67%";
    worksPane.style.height = "60%";
    workPane.style.right = "0";
    setWork(work);
    textWorks.forEach(text => {
      text.childNodes[1].style = "color: white; font-Size: " + fSSize + ";";

     
      boolWork = true;
      switcherVar = work.getAttribute("alt");
      work.style.opacity = "1";
    });
  } else {
    if (switcherVar === work.getAttribute("alt")) {
      worksPane.style.width = "90%";
      worksPane.style.height = "85%";
      workPane.style.right = "-1000px";
      work.style.opacity = "0";

      textWorks.forEach(text => {
        text.childNodes[1].style = "color: white; font-Size: " + fBSize + ";";
      });

      
      console.log("same card");

      boolOpacity = true;
      boolWork = false;
    } else {
      console.log("NO same card");
 
      textWorks.forEach(text => {});
      work.style.opacity = "1";
      workPane.style.right = "-1000px";

   

      setTimeout(() => {
        worksPane.style.width = "67%";
        worksPane.style.height = "60%";
        workPane.style.right = "0";
        setWork(work);

        textWorks.forEach(text => {
          text.childNodes[1].style = "color: white; font-Size: " + fSSize + ";";

          
        });
      }, 1000);
      switcherVar = work.getAttribute("alt");

      lastWork.style.opacity = "0";
    }
  }

  lastWork = work;
}
