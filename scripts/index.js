
var width = document.body.clientWidth; // width of work screen of browser
var height = document.body.clientHeight; // height of work screen of browser

var closed = false;
var opened = true;

var flagWork = closed; // bool for work taplet
var flagGallery = closed; // bool for gallery taplet
var flagSkills = closed; // bool for skills taplet
var flagContacts = closed; // bool for contacts taplet

 // tag video on start taplet
var backPane = document.getElementById("top"); // div of start taplet

var loader = document.getElementById("loading"); // loading div
var galleryPane = document.getElementById("galleryMain"); // gallery div
var mainTitle = document.getElementById("mainTitle"); // Title div on start taplet
var category = document.querySelectorAll(".cat"); 
var topTitle = document.getElementById("topTitle");
var rorarteScreen = document.getElementById("rotateScreen");
var contacts = document.getElementById("contacts");
var works = document.getElementById("works");
var skill = document.getElementById("skill");
var skill_sideTitle = document.getElementById("side_title");
var skill_titleBars = document.querySelectorAll(".bar_progres"); 
var skill_titleSkill = document.querySelectorAll(".photo_cat"); 
var skill_videoSkill = document.getElementById("videoSkill");
var skill_descSkill = document.getElementById("text_desc");
var skill_mediaDesk = document.getElementById("media");
var skill_deskDiv = document.getElementById("desc_block");
var contacts_deskDiv = document.getElementById("contacts");

const skill_categDiv = document.getElementById("panels_cat"); // main div of list of my skills (db, web, apps, nanostudio...) 
const prews = document.querySelectorAll(".prew"); // little photos of gallery
const menuElements = document.querySelectorAll(".menu_element"); // menu elevents (StartPage, V, O, I, D)
const mainVid = document.getElementById("go_to_start"); // div of main menu button (go to start taplet)

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
      "rotateX(90deg) rotateY(0deg) scale3d(0.5, 0.5, 0.5) ";
}

// func for open/close work taplet (animation for elements of page)
function work_move(flag) {
    

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
   
    if (element.dataset.fullname === "Main") {
    
        backPane.style.backgroundImage = "url('./assets/decor/MainScreen7.png')";
        changeStyles_Black();
        
       
        backPane.style.opacity = "1";
       // mainTitle.style.width = "55%";
       // mainTitle.style.fontSize = "170px";

        chek_phone();
        
        topTitle.style.left = "0px";
      
    }

    if (element.dataset.fullname === "Gallery") {
      
        gal_move(true);
        backPane.style.backgroundColor = "rgb(255,255,255)";
      
galleryPane.style.opacity = "1";
galleryPane.style.zIndex = "11";
galleryPane.style.backgroundPositionX = "0px";
galleryPane.style.backgroundPositionY = "0px";
        flagGallery = true;
        changeStyles_White();

        reload_imgs("void");

        topTitle.style.left = "-100px";
    }

    if (element.dataset.fullname === "Works") {
        work_move(true);


        
        changeStyles_White();
        
    }

    if (element.dataset.fullname === "Skills") {
    

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

    width = document.body.clientWidth; // width of work screen of browser
    height = document.body.clientHeight;


    document.getElementById("body").style.width = String(width)+"px";
    document.getElementById("body").style.height = String(height)+"px";

    document.getElementById("top").style.width = String(width)+"px";
    document.getElementById("top").style.height = String(height)+"px";

  

    galleryPane.style.width = String(width) + "px"
    galleryPane.style.height = String(height) + "px"
    
      //  backPane.style.backgroundImage = "url('./assets/decor/MainScreen6.png')";
       

}

function desktop_style(){


 

    category.forEach(categs => {
        categs.style.fontSize = "77px"
    });

    skill_titleSkill.forEach( title => {
       // console.log(title.childNodes[1]);
        
       title.childNodes[1].style.fontSize = "120px"
       title.childNodes[3].style.fontSize = "120px"
        title.childNodes[5].style.fontSize = "120px"
           }
            );

    mainTitle.style.width = "60%";
    mainTitle.style.fontSize = "140px";
    botTitle.style.fontSize = "140px";
    skill_sideTitle.style.fontSize = "80px";

    skill_titleBars.forEach( bar => {
        console.log(bar.childNodes[1]);
        
        bar.childNodes[1].style.fontSize = "32px"
           }
            );

            
}

function phone_style(){

slideHeight = "220px";

    setPhoneStyle();
    setPhone_contacts();
  //  console.log(skill_categDiv.childNodes.length);

        for (var i = 0; i < skill_categDiv.childNodes.length; i++) {
       
                if(skill_categDiv.childNodes[i].firstChild !== null){
                    skill_categDiv.childNodes[i].style.fontSize = "15px";
                }
          }

          skill_deskDiv.style.height = "200px"
          skill_mediaDesk.style.height = "180px"
          skill_descSkill.style.fontSize = "8px"
        //  skill_videoSkill.style.width = "33%"
//skill_videoSkill.style.height = "50%"

    //skill_categDiv.style.fontSize = "17px";
   // console.log(skill_categDiv.childNodes);
    

   skill_titleBars.forEach( bar => {
//console.log(bar.childNodes[1]);

bar.childNodes[1].style.fontSize = "17px"
   }
    );

    skill_titleSkill.forEach( title => {
        console.log(title.childNodes[1]);
        
        title.childNodes[1].style.fontSize = "70px"
       title.childNodes[3].style.fontSize = "70px"
        title.childNodes[5].style.fontSize = "70px"
           }
            );

if(window.orientation == 0){
            
                rorarteScreen.style.zIndex = "999";
                rorarteScreen.style.opacity = "1";
               }

        category.forEach(categs => {
            categs.style.fontSize = "40px"
        });
        mainTitle.style.width = "55%";
        mainTitle.style.fontSize = "60px"
        botTitle.style.fontSize = "60px"
      //  skill_sideTitle.style.fontSize = "40px"
    
}


function chek_phone(){

    const botTitle = document.getElementById("botTitle");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      
        phone_style();    
    
    } else {
   
     desktop_style();
   
  }

}


window.onload = function() {
    
   
    // div of category for gallery

    load_main_logo(); // loading start taplet
    loader.style.opacity = "0"; // switch off loading div
    this.loader.style.zIndex = "0"; // switch off loading div

    setInterval(opac, 9916); // change videos on contacts taplet every -- seconds

    this.opacity_img(true); // start opacity of cards in works = 0

   chek_phone();



   window.addEventListener("orientationchange", function() {
// Выводим числовое значение ориентации

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
if(window.orientation == 0){

    rorarteScreen.style.zIndex = "19";
    rorarteScreen.style.opacity = "1";

    cards.forEach(card => {
      card.style.fontSize = ""
      });

   }else {
   
    width = document.body.clientWidth; // width of work screen of browser
    height = document.body.clientHeight;

    backPane.style.width = "100%";
backPane.style.height = "100vh";

    // document.getElementById("top").style.width = String(height)+"px";
    // document.getElementById("top").style.height =  String(width)+"px";

    contacts_deskDiv.style.width = backPane.style.width;
    contacts_deskDiv.style.height = height;
    
    galleryPane.style.width = backPane.style.width;
    galleryPane.style.height = height;

    document.getElementById("body").style.width = backPane.style.width;
    document.getElementById("body").style.height = backPane.style.height;

    loader.style.width = backPane.style.width;
    loader.style.height = "100%";

    rorarteScreen.style.opacity = "0";
    rorarteScreen.style.zIndex = "-10";

   }
}


}, false);


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
    skill_categDiv.childNodes.forEach(elem => {
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
        text.firstElementChild.style = "color: white; font-size:" + fBSize;
    });

    
};
