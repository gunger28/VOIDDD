
const video_3D = document.getElementById("vid_3D");

vid1 = "./assets/videos/test2.webm";
vid2 = "./assets/videos/test4.webm";
vid3 = "./assets/videos/test5.webm";
vid4 = "./assets/videos/test7.webm";
vid5 = "./assets/videos/test4.webm";
vid6 = "./assets/videos/test5.webm";

vid = vid1;
counter = 0;



function video_swith(){
    
    counter+=1;

switch(counter){
case 1:{
    vid = vid1;
    break;

}
case 2:{
    vid = vid2;
    break;
}
case 3:{
    vid = vid3;
    break;
}
case 4:{
    vid = vid4;
    break;
}
case 5:{
    vid = vid5;
    break;
}
case 6:{
    vid = vid6;
counter=0;
break;
}
}


   
    



video_3D.setAttribute("src", vid);
//console.log("erer");
//video_3D.setAttribute("src", );
 video_3D.onload = () => {    
      video_3D.play();

      
 };
 
 




};





function opac(){
    video_3D.style.opacity = 0;
console.log("switch video");
setTimeout(() => {
    video_swith();
    video_3D.style.opacity = 1;
}, 500);

}