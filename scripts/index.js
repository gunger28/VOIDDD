
var width = document.body.clientWidth; // ширина  
var height = document.body.clientHeight; // высота

var flagWork = false;
var flagGallery = false;
var flagSkills = false;
var flagContacts = false;

var loader = document.getElementById("loading");
var galleryPane = document.getElementById("galleryMain");
const mainTitle = document.getElementById("mainTitle");

setTimeout(() => {
    document.querySelector("#mn").style.transform = "translateX(0)";
}, 1000);


function close_others() {
    const open = true;
    const close = false;
    if (flagWork) {
        work_move(close);
        close_work_viewer();
        flagWork = false;
    }
    if (flagGallery) {
        gal_move(close);
        galleryPane.style.opacity = "0";
        galleryPane.style.zIndex = "0";
        galleryPane.style.backgroundPositionX = "-200px";
        galleryPane.style.backgroundPositionY = "-200px";
        flagGallery = false;
    }
    if (flagSkills) {
        skill_move(close);
        flagSkills = false;
    }
    if (flagContacts) {
        contacts_move(close);
        flagContacts = false;
    }
    
}

function gal_move(flag) {
    const gallery = document.querySelector("#gal");
    const vidBlock = document.getElementById("vid_block");
    if (flag) {
        
        close_others();

     
      
      mainTitle.style.fontSize = "100px";
       mainTitle.childNodes[1].style.fontSize = "100px";
       mainTitle.style.width = "50%";
        backPane.style.opacity = "0";
        setTimeout(() => {
           // gallery.style.transform = "rotateX(0deg)";
            gallery.style.opacity = "1";
            
        }, 1200);

        
        flagGallery = true;
    } else {
        gallery.style.opacity = "0";
       // gallery.style.transform = "rotateX(90deg)";
    }
}

function gal_view_move(obj) {
  const viewer = document.getElementById("viewer");
  console.log("work Viever opened");
  setTimeout(() => {
      viewer.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      take_pic_view(obj);
  }, 700);

  viewer.style.transform =
      "rotateX(90deg) rotateY(180deg) scale3d(0.5, 0.5, 0.5) ";
}

function work_move(flag) {
    const works = document.getElementById("works");

    if (flag) {
        mainTitle.style.fontSize = "100px";
        mainTitle.childNodes[1].style.fontSize = "100px";
        mainTitle.style.width = "50%";
        backPane.style.opacity = "0";
        close_others();
        setTimeout(() => {
            works.style.left = "100px";
            works.style.zIndex = "10";
            works.style.opacity = "1";

            changeStyles_Black();
        }, 1000);

        flagWork = true;
        console.log("work opened!");
    } else {
      console.log("work closed!");
        works.style.left = "2100px";
    }
}

function skill_move(flag) {
    const skill = document.getElementById("skill");
    
    
    if (flag) {
        mainTitle.style.fontSize = "100px";
        mainTitle.childNodes[1].style.fontSize = "100px";
        mainTitle.style.width = "50%";
        backPane.style.opacity = "0";
        close_others();
        setTimeout(() => {
            skill.style.zIndex = "10";
            skill.style.opacity = "1";
            
            changeStyles_Black();
        }, 1000);

        flagSkills = true;
        console.log("skill opened!");
    } else {
        skill.style.zIndex = "0";
        skill.style.opacity = "0";
    }
}

function contacts_move(flag) {
    const contacts = document.getElementById("contacts");

    if (flag) {
        mainTitle.style.fontSize = "100px";
       mainTitle.childNodes[1].style.fontSize = "100px";
       mainTitle.style.width = "50%";
        backPane.style.opacity = "0";
        close_others();
        setTimeout(() => {
            contacts.style.zIndex = "10";
            contacts.style.opacity = "1";
            
            changeStyles_Black();
        }, 1000);

        flagContacts = true;
        console.log("skill opened!");
    } else {
        contacts.style.zIndex = "0";
        contacts.style.opacity = "0";
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

        menEL[i].firstElementChild.style.color = "black";
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

const video = document.getElementById("video");
const backPane = document.getElementById("top");


function changeSource(src, element) {
    backPane.style.backgroundImage = "";
    backPane.style.backgroundColor = "";
    video_opacity(false);


    if (element.dataset.fullname === "Main") {
    
        backPane.style.backgroundImage = "url('./assets/decor/MainScreen4.png')";
        changeStyles_Black();
        video_opacity(true);
        video.style.opacity = "0";
        backPane.style.opacity = "1";
        mainTitle.style.width = "70%";
        mainTitle.style.fontSize = "170px";

        mainTitle.childNodes[1].style.fontSize = "170px";
      
    }

    if (element.dataset.fullname === "Gallery") {
      
        gal_move(true);
        backPane.style.backgroundColor = "rgb(255,255,255)";
        // video.setAttribute("src", src);
        // video.onload = () => {
        //     video.play();
        // };
galleryPane.style.opacity = "1";
galleryPane.style.zIndex = "11";
galleryPane.style.backgroundPositionX = "0px";
galleryPane.style.backgroundPositionY = "0px";
        flagGallery = true;
        changeStyles_White();
       
    }

    if (element.dataset.fullname === "Works") {
        work_move(true);


        
        changeStyles_White();
        
    }

    if (element.dataset.fullname === "Skills") {
        // close_others();
       // gal_move(true);
        //video.setAttribute("src", src);
        // video.onload = () => {
        //     video.play();
        // };

        skill_move(true);
        flagSkills = true;
        changeStyles_White();
      
    }

    if (element.dataset.fullname === "Contacts") {
        contacts_move(true);
        flagContacts = true;
        changeStyles_White();
       
    }
}

function load_main_logo(){
  

    console.log(height);
    document.getElementById("body").style.width = String(width)+"px";
    document.getElementById("body").style.height = String(height)+"px";

    document.getElementById("top").style.width = String(width)+"px";
    document.getElementById("top").style.height = String(height)+"px";

    document.getElementById("video").style.width = String(width)+"px";
    document.getElementById("video").style.height = String(height)+"px";

    galleryPane.style.width = String(width) + "px"
    galleryPane.style.height = String(height) + "px"
    
  //  setTimeout(() => {
       
        backPane.style.backgroundImage = "url('./assets/decor/MainScreen6.png')";
        video.style.opacity = "0";
        
 //   }, 1000);


}


window.onload = function() {


    load_main_logo();
    
   
    setInterval(opac, 9916);
    loader.style.opacity = "0";
    this.loader.style.zIndex = "0";
    

    const Ptag = document.getElementById("panels_cat");
    const prews = document.querySelectorAll(".prew");
    
    prews.forEach(prew => {
        prew.addEventListener("click", function() {
            gal_view_move(event.target.getAttribute("id"));
        });
    });

    const menuElements = document.querySelectorAll(".menu_element");
    const mainVid = document.getElementById("main_video");
    const video = document.getElementById("video");
    video.volume = 0.1;

    menuElements.forEach(menuElement => {
        menuElement.addEventListener("click", function() {
            changeSource(this.dataset.source, this);
          
        });
    });

    mainVid.addEventListener("click", function() {
      close_others();
        changeSource(mainVid.dataset.source, mainVid);
    });

    const category = document.querySelectorAll(".cat");
    category.forEach(categor => {
        categor.addEventListener("click", event =>
            reload_imgs(event.target.getAttribute("id"))
        );
    });
    console.log(Ptag)

    // Ptag.addEventListener("mouseenter", function() {
                
    //      audio = new Audio(), // Создаём новый элемент Audio
    //             audio.src = '/audio/click.mp3',// Указываем путь к звуку "клика"
    //             audio.autoplay = true
    //             });


    Ptag.childNodes.forEach(elem => {
        elem.addEventListener("mouseenter", function() {
      //  console.log(Ptag.childNodes),
 audio = new Audio(), // Создаём новый элемент Audio
 audio.volume = 0.2;
        audio.src = "./audio/click.mp3",// Указываем путь к звуку "клика"
        audio.autoplay = true
        });
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
       
        text.firstElementChild.style = "color: white; font-size: 65px;";
    });

    this.opacity_img(true);
};
