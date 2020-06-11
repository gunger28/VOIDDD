
var width = document.body.clientWidth; // width of work screen of browser
var height = document.body.clientHeight; // height of work screen of browser

var closed = false;
var opened = true;

var flagWork = closed; // bool for work taplet
var flagGallery = closed; // bool for gallery taplet
var flagSkills = closed; // bool for skills taplet
var flagContacts = closed; // bool for contacts taplet

const video = document.getElementById("video"); // tag video on start taplet
const backPane = document.getElementById("top"); // div of start taplet

var loader = document.getElementById("loading"); // loading div
var galleryPane = document.getElementById("galleryMain"); // gallery div
const mainTitle = document.getElementById("mainTitle"); // Title div on start taplet

// animation for moving menu in start 
setTimeout(() => {
    document.querySelector("#menu").style.transform = "translateX(0)";
}, 500);

// func for check closed and opened taplets, and it's close previous taplet
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

// func for open/close gallery taplet (animation for elements of page)
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

// func for open render in gallery taplet (animation for elements of page)
function gal_view_move(obj) {
  const viewer = document.getElementById("viewer");
  console.log("work Viwever opened");
  setTimeout(() => {
      viewer.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      take_pic_view(obj);
  }, 700);

  viewer.style.transform =
      "rotateX(90deg) rotateY(180deg) scale3d(0.5, 0.5, 0.5) ";
}

// func for open/close work taplet (animation for elements of page)
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

// func for open/close skills taplet (animation for elements of page)
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

// func for open/close contacts taplet (animation for elements of page)
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

// func for change styles of menu (color by backgroung) to white
function changeStyles_White() {
    var menEL = document.getElementsByClassName("menu_element");
    for (let i = 0; i < menEL.length; i++) {
        // проходим циклом по всем элементам массивоподобного объекта

        menEL[i].firstElementChild.style.color = "black";
    }
}

// func for change styles of menu (color by backgroung) to black
function changeStyles_Black() {
    var menEL = document.getElementsByClassName("menu_element");
    for (let i = 0; i < menEL.length; i++) {
        menEL[i].firstElementChild.style.color = null;
        menEL[i].firstElementChild.removeAttribute("style");

        console.log(menEL.length + " " + menEL[i]);
    }
}


function changeSource(src, element) {
    backPane.style.backgroundImage = "";
    backPane.style.backgroundColor = "";
    


    if (element.dataset.fullname === "Main") {
    
        backPane.style.backgroundImage = "url('./assets/decor/MainScreen4.png')";
        changeStyles_Black();
        
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

// func load width & height, logo for start taplet 
function load_main_logo(){

    document.getElementById("body").style.width = String(width)+"px";
    document.getElementById("body").style.height = String(height)+"px";

    document.getElementById("top").style.width = String(width)+"px";
    document.getElementById("top").style.height = String(height)+"px";

    document.getElementById("video").style.width = String(width)+"px";
    document.getElementById("video").style.height = String(height)+"px";

    galleryPane.style.width = String(width) + "px"
    galleryPane.style.height = String(height) + "px"
    
        backPane.style.backgroundImage = "url('./assets/decor/MainScreen6.png')";
        video.style.opacity = "0";

}


window.onload = function() {
    const Ptag = document.getElementById("panels_cat"); // main div of list of my skills (db, web, apps, nanostudio...) 
    const prews = document.querySelectorAll(".prew"); // little photos of gallery
    const menuElements = document.querySelectorAll(".menu_element"); // menu elevents (StartPage, V, O, I, D)
    const mainVid = document.getElementById("go_to_start"); // div of main menu button (go to start taplet)
    const video = document.getElementById("video"); // tag video of start taplet
    const category = document.querySelectorAll(".cat"); // div of category for gallery

    load_main_logo(); // loading start taplet
    loader.style.opacity = "0"; // switch off loading div
    this.loader.style.zIndex = "0"; // switch off loading div

    setInterval(opac, 9916); // change videos on contacts taplet every -- seconds

    this.opacity_img(true); // start opacity of cards in works = 0

    // action listner for little photo in gallery
    prews.forEach(prew => {
        prew.addEventListener("click", function() {
            gal_view_move(event.target.getAttribute("id"));
        });
    });

   // Action listner for main menu 
    menuElements.forEach(menuElement => {
        menuElement.addEventListener("click", function() {
            changeSource(this.dataset.source, this);
          
        });
    });

    // main menu button action (closing all taplets and go to stat taplet)
    mainVid.addEventListener("click", function() {
      close_others();
        changeSource(mainVid.dataset.source, mainVid);
    });

   // actions for change photos by the category in gallery
    category.forEach(categor => {
        categor.addEventListener("click", event =>
            reload_imgs(event.target.getAttribute("id"))
        );
    });

    // audio action for skills list
    Ptag.childNodes.forEach(elem => {
        elem.addEventListener("mouseenter", function() {
      //  console.log(Ptag.childNodes),
 audio = new Audio(), // Создаём новый элемент Audio
 audio.volume = 0.2;
        audio.src = "./audio/click.mp3",// Указываем путь к звуку "клика"
        audio.autoplay = true
        });
    });
    
// change style menu
    menuElements.forEach(menuElement => {
        menuElement.addEventListener("mouseenter", event =>
            txt.call(event.target, true)
        );
    });
// change style menu
    menuElements.forEach(menuElement => {
        menuElement.addEventListener("mouseleave", event =>
            txt.call(event.target, false)
        );
    });


// set start font for card in works
    tagsWorksFonts.forEach(text => {
        text.firstElementChild.style = "color: white; font-size: 65px;";
    });

    
};
