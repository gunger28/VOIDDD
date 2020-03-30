canv = document.getElementById("canvas");
ctx = canv.getContext('2d');

//code
//ctx.fillStyle = 'red';
//ctx.fillRect(20,20,10,2);

//w = canv.width;
//h = canv.height;

const w = canv.getBoundingClientRect().width;
const h = canv.getBoundingClientRect().height;

canv.width = w/1.3;
canv.height = h*4;

console.log(w,h);
ctx.beginPath();
ctx.arc(55, 75, 50, 0, 2*Math.PI, false);
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'white';
ctx.stroke();