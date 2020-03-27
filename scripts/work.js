var lastWork;

//const name = ["cosmos" ,"death","merry","dright","funeral","plane","opposing","funeral","funeral","funeral","funeral","funeral"];
const description = ["jjkkk", "funeral bad", "funeral bad"];
const tecnology = ["eevee", "cycles","cycles", "cycles","eevee","eevee","eevee","cycles","eevee","eevee","eevee","eevee","eevee"];
const styles = ["loft", "groft"];
const program = ["blender", "gimp"];

var fSSize = "40px;";
var fBSize = "65px;";

var boolWork = false;
var boolOpacity = true;

const tagsWorksFonts = document.querySelectorAll(".tag");

const cards = document.querySelectorAll(".one_card");

function setWork(work) {
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

  oneProg = "<p>" + program[0] + "</p>";
  secProg = "<p>" + program[1] + "</p>";
  progs[0].innerHTML = oneProg;
  progs[0].innerHTML += secProg;
}

cards.forEach(card => {
  card.addEventListener(
    "click",
    event => preShow(event.target) // event.target это уже img block
  );
});

cards.forEach(card => {
  card.addEventListener("mouseenter", function() {
    ///console.log("little size black"), //console.log(card.childNodes),
    // card.style.opacity = "1",
    card.childNodes[1].childNodes[1].style =
      "color: black; font-Size:" + fSSize + ";";
    // card.childNodes[1].childNodes[1].style.backgroundColor = "red",
    //card.childNodes[1].childNodes[1].style.fontSize = "40px",
    // card.children.children.textContent = "ererer",
    console.log(card.children[1]);
    //card.style.opacity = "1";
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

function reverseToWhite(elem) {
  if (!boolWork) {
    //console.log(card.childNodes[1].childNodes[1]),

    elem.childNodes[1].childNodes[1].style =
      "color: white; font-Size:" + fBSize;
  } else {
    elem.childNodes[1].childNodes[1].style =
      "color: white; font-Size:" + fSSize;
  }
}

function opacity_img(flag) {
  cards.forEach(card => {
    if (flag) {
      card.children[1].style.opacity = "0";
    }
  });
}

const descPane = document.getElementById("work");
function preShow(work) {
  // console.log(work)
  //console.log(work),
  showWork(boolWork, work);
}

function close_work_viewer(){
    const textWorks = document.querySelectorAll(".tag");
    const workPane = document.getElementById("work");
    const worksPane = document.getElementById("works");

    worksPane.style.width = "100vw";
    workPane.style.right = "-500px";
    boolOpacity = true;
    boolWork = false;
    cards.forEach(card => {
        card.children[1].style.opacity = "0";
       // console.log(card.children[1]);
    });
    textWorks.forEach(text => {
        text.childNodes[1].style = "color: white; font-Size: 65px;";
      });
}


var switcherVar;

function showWork(flag, work) {
  const workPane = document.getElementById("work");
  const worksPane = document.getElementById("works");
  const textWorks = document.querySelectorAll(".tag");

  //console.log(work.parentNode);
  if (!flag) {
    worksPane.style.width = "65vw";
    workPane.style.right = "0";
    setWork(work);
    textWorks.forEach(text => {
      text.childNodes[1].style = "color: white; font-Size: 40px;";

     // boolOpacity = false;
      boolWork = true;
      switcherVar = work.getAttribute("alt");
      work.style.opacity = "1";
    });
  } else {
    if (switcherVar === work.getAttribute("alt")) {
      worksPane.style.width = "100vw";
      workPane.style.right = "-500px";
      work.style.opacity = "0";

      textWorks.forEach(text => {
        text.childNodes[1].style = "color: white; font-Size: 65px;";
      });

      // switcherVar = work.getAttribute("alt");
      console.log("same card");

      boolOpacity = true;
      boolWork = false;
    } else {
      console.log("NO same card");
    //  boolOpacity = false;
      textWorks.forEach(text => {});
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
          text.childNodes[1].style = "color: white; font-Size: 40px;";

          // boolWork = true;
        });
      }, 1000);
      switcherVar = work.getAttribute("alt");

      lastWork.style.opacity = "0";
    }
  }

  lastWork = work;
}
