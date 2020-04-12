var flagWork = false;
var flagGallery = false;
var flagSkills = false;
var flagContacts = false;

var loader = document.getElementById("loading");

setTimeout(() => {
    document.querySelector("#mn").style.transform = "translateX(0)";
    // document.querySelector("#gal").style.transform = "translateY(0)";
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

    if (flag) {
        close_others();
        setTimeout(() => {
            gallery.style.transform = "rotateX(0deg)";
           
        }, 500);

        
        flagGallery = true;
    } else {
        
        gallery.style.transform = "rotateX(90deg)";
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
        close_others();
        setTimeout(() => {
            works.style.left = "100px";
            
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
const backPane = document.getElementsByClassName("vid_block");

function changeSource(src, element) {
    //video.style.backgroundImage = "./assets/gallery/logoSite.png";
    if (element.dataset.fullname === "Main") {
        video.setAttribute("src", src);
        video.onload = () => {
            video.play();
        };

        changeStyles_Black();
        video.style.opacity = "1";
    }

    if (element.dataset.fullname === "Gallery") {
        // close_others();
        gal_move(true);
        video.setAttribute("src", src);
        video.onload = () => {
            video.play();
        };

        flagGallery = true;
        changeStyles_White();
        video.style.opacity = "0";
    }

    if (element.dataset.fullname === "Works") {
        work_move(true);

        video.setAttribute("src", src);
        video.onload = () => {
            video.play();
            S;
        };

        
        changeStyles_White();
        video.style.opacity = "0";
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
        video.style.opacity = "0";
    }

    if (element.dataset.fullname === "Contacts") {
        // close_others();
       // gal_move(true);
        //video.setAttribute("src", src);
        // video.onload = () => {
        //     video.play();
        // };

        contacts_move(true);
        flagContacts = true;
        changeStyles_White();
        video.style.opacity = "0";
    }
}

window.onload = function() {

    //setInterval(video_swith, 10416);
    setInterval(opac, 9916);
    loader.style.opacity = "0";
    this.loader.style.zIndex = "0";
    

    const Ptag = document.getElementById("panels_cat");
    const prews = document.querySelectorAll(".prew");
    //this.drawAll();
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
            //close_others();
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
 audio.volume = 0.5;
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
        // console.log(text.firstElementChild);
        text.firstElementChild.style = "color: white; font-size: 65px;";
    });

    this.opacity_img(true);
};
