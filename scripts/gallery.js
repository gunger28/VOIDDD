
const cat = ["./assets/gallery/Gallery"]; // directory for pics

//function set picture to the main render div
function take_pic_view(element){
  //  const vid = document.getElementById("video_gal");
const img = document.getElementById(element);

const view_vid = document.getElementById("video_gal");
var view = document.getElementById("viewer");
const cat_text = document.getElementById("CAT");
if(img.getAttribute("data-vid") === ""){
    var imggg = img.getAttribute("src");

view.style.backgroundImage = "url(" + imggg + ")";
   view_vid.style.opacity = "0";
 
}else{
    view_vid.style.opacity = "0";
    

    setTimeout(() => {
     //   view.style.backgroundImage = "url()";
        view_vid.setAttribute("src",img.getAttribute("data-vid"));
     view_vid.style.opacity = "1";
     //   view.style.opacity = "0";
      }, 250);
    
   
   
    
}


};

function reload_imgs(category){
    const categ = document.getElementById(category);
const imgs = document.querySelectorAll(".prew");

var i = 1;

var count = categ.getAttribute("countVid");

var dir = categ.getAttribute("dir");

    imgs.forEach(function(item) {
        
        anim_reload();
        setTimeout(() => {
        
    item.setAttribute("src",cat[0]+dir+i+".png"); 
    item.setAttribute("data-vid",""); 
if(i> parseInt(count, 10)){
 
    item.setAttribute("data-vid",cat[0]+dir+i+".webm"); 
 
}

         i++;
         
            anim_reload_reverse();
          }, 1400);
      });
      i=1;
      


}


// just animation for change pic
function anim_reload(){
const galBlock = document.getElementById("galBlock");
console.log("rotate");
galBlock.style.transform = "rotateY(90deg)";


}

// reverse animation for change pic
function anim_reload_reverse(){
    const galBlock = document.getElementById("galBlock");
    galBlock.style.transform = "rotateY(0deg)";
    
    
    }

