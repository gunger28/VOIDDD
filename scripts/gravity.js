canv = document.getElementById("canvas");
ctx = canv.getContext('2d');
ctx2 = canv.getContext('2d');

//code
//ctx.fillStyle = 'red';
//ctx.fillRect(20,20,10,2);

//w = canv.width;
//h = canv.height;

const w = canv.getBoundingClientRect().width;
const h = canv.getBoundingClientRect().height;

canv.width = w/1.3;
canv.height = h*4;




var img = new Image();  
img.src = '/assets/decor/blend_grav.jpeg';


function drawAll(){draw(55,55,50);
    
    draw(150,55,35);
    draw(50,155,25);
    draw(150,250,50);
    draw(50,400,25);
}
    
    
    //ctx.fill();
//ctx.stroke();


function draw(x,y,s){
   // Создание нового объекта изображения
   
  

   ctx.restore();

   ctx.save();
   ctx.beginPath();
   ctx.arc(x,y, s, 0, Math.PI*2,true); // you can use any shape
   ctx.closePath();
   ctx.clip();

   ctx.stroke();
   ctx.drawImage(img, x-s, y-s, s*2, s*2);


}





// console.log(w,h);
// ctx.beginPath();
// ctx.arc(55, 55, 50, 0, 2*Math.PI, false);
// ctx.fillStyle = 'black';
// ctx.fill();
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'white';
// ctx.stroke();