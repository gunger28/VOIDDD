
setTimeout(() => {
    document.querySelector("#mn").style.transform = "translateX(0)";
}, 1000);

function txt(flag) {
  const text = this.firstElementChild;

  if (flag) {
    text.textContent = this.dataset.fullname;

    text.classList.add('mouseMoveOn');
  } else {
    text.textContent = this.dataset.shortname;

    text.classList.remove('mouseMoveOn');
  }
}

function changeStylesMenu() {
  var menEL = document.getElementsByClassName("menu_element");
  for( let i = 0; i < menEL.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
 //   menEL[i].style.color = "black"; // устанавливаем зеленый цвет текста каждому элементу
 
 menEL[i].firstElementChild.style.color = "black";
    //  menEL[i].classList.add('mouseEnter');
    console.log(menEL.length +" " + menEL[i]);
  }
 
  
  
}

function changeSource(src,element) {
 
    const video = document.getElementById("video");
    video.setAttribute("src", src);
  
    video.onload = () => {
        video.play();
    };
    
}



window.onload = function() {
    const menuElements = document.querySelectorAll(".menu_element");
   
    const video = document.getElementById("video");
    video.volume = 0.1;
    

    

      menuElements.forEach(menuElement => {
        menuElement.addEventListener("click", function() {
            changeSource(this.dataset.source,menuElements);
            
            changeStylesMenu();
        });
    });

    
    

  

    menuElements.forEach(menuElement => {
      menuElement.addEventListener('mouseenter', event => txt.call(event.target, true));
    });
    
    
    menuElements.forEach(menuElement => {
      menuElement.addEventListener('mouseleave', event => txt.call(event.target, false));
    });
};
