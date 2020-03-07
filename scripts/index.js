setTimeout(() => {
  document.querySelector("#mn").style.transform = "translateX(0)";
  // document.querySelector("#gal").style.transform = "translateY(0)";
}, 1000);

function gal_move(flag) {
  if (flag) {
    setTimeout(() => {
      document.querySelector("#gal").style.transform = "rotateX(0deg)";
    }, 500);
  } else {
    document.querySelector("#gal").style.transform = "rotateX(90deg)";
  }
}

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
    // проходим циклом по всем элементам массивоподобного объекта
    //   menEL[i].style.color = "black"; // устанавливаем зеленый цвет текста каждому элементу
    var r, g, b;
    r = b = g = 0;
    // menEL[i].firstElementChild.style.color = "rgba("+r+","+g+","+b+",0.1)";
    //menEL[i].firstElementChild.style.color = "white";
    menEL[i].firstElementChild.style.color = null;
    menEL[i].firstElementChild.removeAttribute("style");
    //  menEL[i].classList.add('mouseEnter');
    console.log(menEL.length + " " + menEL[i]);
  }
}

function changeSource(src, element) {
  const video = document.getElementById("video");
  //video.style.backgroundImage = "./assets/gallery/logoSite.png";
  video.setAttribute("src", src);

  video.onload = () => {
    video.play();
  };
}



  
  // function take_pic_view(element){
  //   const img = document.getElementById(element);
  //   const view = document.getElementById("viewer");
    
  //   view.setAttribute("src",img.getAttribute("src"));
 
    
    
  //   };
    

window.onload = function() {
  
this.gal_move(true);

  // const prews = document.querySelectorAll(".prew");
  // // prews.addEventListener("click", function() {
  // //    take_pic_view(this.getAttribute("id"));
  // //   });
  
  //   prews.forEach(prew => {
  //     prew.addEventListener("click", event =>
  //     take_pic_view(event.target.getAttribute("id"))
  //     );
  //   });

  const prews = document.querySelectorAll(".prew");
  prews.forEach(prew => {
    prew.addEventListener("click", event =>
    take_pic_view(event.target.getAttribute("id"))
    );
  });




  const menuElements = document.querySelectorAll(".menu_element");

  const mainVid = document.getElementById("main_video");

  const video = document.getElementById("video");
  video.volume = 0.1;

  menuElements.forEach(menuElement => {
    menuElement.addEventListener("click", function() {
      changeSource(this.dataset.source, menuElements);
      gal_move(true);
      changeStyles_White();
    });
  });

  mainVid.addEventListener("click", function() {
    changeSource(mainVid.dataset.source, mainVid);
    gal_move(false);
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
};