const video_3D = document.getElementById("vid_3D"); // div of video in contacts

vid1 = "./assets/videos/test2.webm"; // paths to video
vid2 = "./assets/videos/test4.webm"; // paths to video 
vid3 = "./assets/videos/test5.webm"; // paths to video
vid4 = "./assets/videos/test7.webm"; // paths to video
vid5 = "./assets/videos/test4.webm"; // paths to video
vid6 = "./assets/videos/test5.webm"; // paths to video

vid = vid1; // set the first video
counter = 0; // count to switch next vid

// function to change vids
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
 video_3D.onload = () => {    
      video_3D.play();
 };
};

// function to smooth changing vids (opacity 0 ---> 1 / reverse)
function opac(){
    video_3D.style.opacity = 0;
console.log("switch video");
setTimeout(() => {
    video_swith();
    video_3D.style.opacity = 1;
}, 500);

}