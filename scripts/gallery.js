
const cat = ["./assets/gallery/Gallery"]; // directory for pics

//function set picture to the main render div
function take_pic_view(element){
const img = document.getElementById(element);
const view = document.getElementById("viewer");
const cat_text = document.getElementById("CAT");
view.setAttribute("src",img.getAttribute("src"));
};

// func set pics to the little div of photos
function reload_imgs(category){
    const categ = document.getElementById(category);
const imgs = document.querySelectorAll(".prew");
console.log(categ);
var i =1;
switch(category){
case 'void':
    imgs.forEach(function(item) {
        
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/Void/void"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        console.log(i);
      });

      i=1;
      
break;
case 'gallery':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/gallery/gallery"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
case 'war':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/War/war"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
case 'cosmic':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/cosmic/cosmic"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
case 'aparts':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/apart/apart"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
case 'faces':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/faces/faces"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
case 'arch':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/Arch/arch"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
case 'death':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",cat[0]+"/death/Death"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
}
}

// just animation for change pic
function anim_reload(){
const galBlock = document.getElementById("galBlock");
galBlock.style.transform = "rotateY(90deg)";


}

// reverse animation for change pic
function anim_reload_reverse(){
    const galBlock = document.getElementById("galBlock");
    galBlock.style.transform = "rotateY(0deg)";
    
    
    }

