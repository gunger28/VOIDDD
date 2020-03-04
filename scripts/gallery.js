function take_pic_view(element){
const img = document.getElementById(element);
const view = document.getElementById("viewer");

view.setAttribute("src",img.getAttribute("src"));



};

const war = ["./assets/gallery/war1.png","./assets/gallery/war2.png"];

function reload_imgs(category){
    const categ = document.getElementById(category);
const imgs = document.querySelectorAll(".prew");
console.log(categ);
switch(category){
case 'void':
    imgs.forEach(function(item) {
        
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",war[0]);
            anim_reload_reverse();
          }, 600);
        
      });
break;
case 'gallery':
    imgs.forEach(function(item) {
        anim_reload();
        setTimeout(() => {
            item.setAttribute("src",war[1]);
            anim_reload_reverse();
          }, 600);
        
      });
break;
case 'war':
    imgs.forEach(function(item) {
        item.setAttribute("src",war[0]);
      });
break;
case 'cosmic':
    imgs.forEach(function(item) {
        item.setAttribute("src",war[0]);
      });
break;
case 'aparts':
    imgs.forEach(function(item) {
        item.setAttribute("src",war[0]);
      });
break;
case 'faces':
    imgs.forEach(function(item) {
        
        item.setAttribute("src",war[0]);
      });
break;
case 'arch':
    imgs.forEach(function(item) {
        item.setAttribute("src",war[0]);
      });
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