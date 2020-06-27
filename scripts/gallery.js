
const cat = ["./assets/gallery/Gallery"]; // directory for pics

//function set picture to the main render div
function take_pic_view(element){
  //  const vid = document.getElementById("video_gal");
const img = document.getElementById(element);

const view_vid = document.getElementById("video_gal");
const view = document.getElementById("viewer");
const cat_text = document.getElementById("CAT");
if(img.getAttribute("data-vid") === ""){
    view.setAttribute("src",img.getAttribute("src"));
    view.style.opacity = "1";
    view_vid.style.opacity = "0";
    console.log("image")
}else{
    view_vid.style.opacity = "0";
    

    setTimeout(() => {
        view_vid.setAttribute("src",img.getAttribute("data-vid"));
        view_vid.style.opacity = "1";
        view.style.opacity = "0";
      }, 500);
    
   
    console.log("video")
    
}


};

function reload_imgs(category){
    const categ = document.getElementById(category);
const imgs = document.querySelectorAll(".prew");
console.log(categ);
var i = 1;

var count = categ.getAttribute("countVid");

var dir = categ.getAttribute("dir");
console.log(dir)
    imgs.forEach(function(item) {
        
        anim_reload();
        setTimeout(() => {
        
    item.setAttribute("src",cat[0]+dir+i+".png"); 
    item.setAttribute("data-vid",""); 
if(i> parseInt(count, 10)){
 
    item.setAttribute("data-vid",cat[0]+dir+i+".webm"); 
 
}

         i++;
         console.log(i);
            anim_reload_reverse();
          }, 600);
      });
      i=1;
      


}


// func set pics to the little div of photos
// function reload_imgs(category){
//     const categ = document.getElementById(category);
// const imgs = document.querySelectorAll(".prew");
// console.log(categ);
// var i = 1;
// switch(category){
// case 'void':
//     imgs.forEach(function(item) {
        
//         anim_reload();
//         setTimeout(() => {
           



//     item.setAttribute("src",cat[0]+"/Void/void"+i+".png"); 
//     item.setAttribute("data-vid",""); 
// if(i>2){
 
//     item.setAttribute("data-vid",cat[0]+"/Void/void"+i+".webm"); 
//   //  item.setAttribute("src",cat[0]+"/Void/void"+i+".webm"); 
// }

           
     
         
//          i++;
//          console.log(i);
//             anim_reload_reverse();
//           }, 600);

         
  
//       });

      

//       i=1;
      
// break;
// case 'gallery':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/gallery/gallery"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// case 'war':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/War/war"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// case 'cosmic':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/cosmic/cosmic"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// case 'aparts':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/apart/apart"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// case 'faces':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/faces/faces"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// case 'arch':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/Arch/arch"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// case 'death':
//     imgs.forEach(function(item) {
//         anim_reload();
//         setTimeout(() => {
//             item.setAttribute("src",cat[0]+"/death/Death"+i+".png");
//             i++;
//             anim_reload_reverse();
//           }, 600);
        
//       });

//       i=1;
// break;
// }
// }

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

