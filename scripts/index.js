var flagWork = false;
var flagGallery = false;
var flagSkills = false;
var flagContacts = false;

setTimeout(() => {
  document.querySelector("#mn").style.transform = "translateX(0)";
  // document.querySelector("#gal").style.transform = "translateY(0)";
}, 1000);


function close_others(){
if(flagGallery){

  console.log("closed gal");
  document.querySelector("#gal").style.transform = "rotateX(90deg)";
}
if(flagWork){

  console.log("closed Works");
  document.getElementById("works").style.left = "5100px";
}
if(flagSkills){


  document.querySelector("#gal").style.transform = "rotateX(90deg)";
}
if(flagContacts){


  document.querySelector("#gal").style.transform = "rotateX(90deg)";
}



}


function gal_move(flag) {
  if (flag) {
    setTimeout(() => {
      document.querySelector("#gal").style.transform = "rotateX(0deg)";
    }, 500);
flagGallery = true;
  } else {
    document.querySelector("#gal").style.transform = "rotateX(90deg)";
    flagGallery = false
  }
}

function view_move(obj) {
  const viewer = document.getElementById("viewer");
  console.log("work");
  setTimeout(() => {
    viewer.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" ;
    take_pic_view(obj);
  }, 700);
  
  viewer.style.transform = "rotateX(90deg) rotateY(180deg) scale3d(0.5, 0.5, 0.5) ";
}


function load_Works(flag){
  if(flag){
setTimeout(() => {
  document.getElementById("works").style.left = "100px";
  console.log("change left");
  changeStyles_Black();
flagWork = true;
}, 1000);
}else{
  document.getElementById("works").style.left = "5100px";
flagWork = false;
}



}
// const works = document.getElementById("works").style.left = "100";
// works.addEventListener("click", function(){

// load_Works()

// });

function txt(flag) {
  const text = this.firstElementChild;

  if (flag) {
    text.textContent = this.dataset.fullname;

    text.classList.add("mouseMoveOn");
  } else {
    text.textContent = this.dataset.shortname;

    text.classList.remove("mouseMoveOn");
  }
}

function changeStyles_White() {
  var menEL = document.getElementsByClassName("menu_element");
  for (let i = 0; i < menEL.length; i++) {
    // проходим циклом по всем элементам массивоподобного объекта
    //   menEL[i].style.color = "black"; // устанавливаем зеленый цвет текста каждому элементу

    menEL[i].firstElementChild.style.color = "black";
    //  menEL[i].classList.add('mouseEnter');
    console.log(menEL.length + " " + menEL[i]);
  }
}

function changeStyles_Black() {
  var menEL = document.getElementsByClassName("menu_element");
  for (let i = 0; i < menEL.length; i++) {
    
    menEL[i].firstElementChild.style.color = null;
    menEL[i].firstElementChild.removeAttribute("style");
   
    console.log(menEL.length + " " + menEL[i]);
  }
}

function changeSource(src, element) {
  const video = document.getElementById("video");
  //video.style.backgroundImage = "./assets/gallery/logoSite.png";
  if(element.dataset.fullname === "Main" ){
    close_others();
    load_Works(true);
console.log(flagGallery);
video.setAttribute("src", src);
  video.onload = () => {
    video.play();
  };

  }

  if(element.dataset.fullname === "Gallery" ){
    close_others();
    gal_move(true);
    video.setAttribute("src", src);
  video.onload = () => {
    video.play();
  };

  }
  

  if(element.dataset.fullname === "Works" ){
    close_others();
    load_Works(true);
console.log(flagGallery);
 video.setAttribute("src", src);
  video.onload = () => {
  video.play();
  };

  }
}


window.onload = function() {
  


  const prews = document.querySelectorAll(".prew");
  prews.forEach(prew => {
    prew.addEventListener("click", function(){
    view_move(event.target.getAttribute("id"))
    });
  });




  const menuElements = document.querySelectorAll(".menu_element");
  const mainVid = document.getElementById("main_video");
  const video = document.getElementById("video");
  video.volume = 0.1;

  menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", function() {
      changeSource(this.dataset.source, this);
      close_others();
      changeStyles_White();
    });
  });

  mainVid.addEventListener("click", function() {
    changeSource(mainVid.dataset.source, mainVid);
    close_others();
    changeStyles_Black();
  });


  const category = document.querySelectorAll(".cat");
  category.forEach(categor => {
    categor.addEventListener("click", event =>
      reload_imgs(event.target.getAttribute("id"))
    );
  });

  menuElements.forEach(menuElement => {
    menuElement.addEventListener("mouseenter", event =>
      txt.call(event.target, true)
    );
  });

  menuElements.forEach(menuElement => {
    menuElement.addEventListener("mouseleave", event =>
      txt.call(event.target, false)
    );
  });

  tagsWorksFonts.forEach(text => {
   // console.log(text.firstElementChild);
    text.firstElementChild.style = "color: white; font-size: 65px;";
  });
  

};