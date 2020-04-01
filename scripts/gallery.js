function take_pic_view(element){
const img = document.getElementById(element);
const view = document.getElementById("viewer");

view.setAttribute("src",img.getAttribute("src"));



};

const cat = ["./assets/gallery/Gallery"];

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
            item.setAttribute("src",cat[0]+"/Gallery/gallery"+i+".png");
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
            item.setAttribute("src",cat[0]+"/death/death"+i+".png");
            i++;
            anim_reload_reverse();
          }, 600);
        
      });

      i=1;
break;
}
}

function anim_reload(){
const galBlock = document.getElementById("galBlock");
galBlock.style.transform = "rotateY(90deg)";


}

function anim_reload_reverse(){
    const galBlock = document.getElementById("galBlock");
    galBlock.style.transform = "rotateY(0deg)";
    
    
    }

// window.onload = function(){

//      const prews = document.querySelectorAll(".prew");
//     // prews.addEventListener("click", function() {
//     //    take_pic_view(this.getAttribute("id"));
//     //   });
    
//       prews.forEach(prew => {
//         prew.addEventListener("click", event =>
//         take_pic_view(event.target.getAttribute("id"))
//         );
//       });
    

// };