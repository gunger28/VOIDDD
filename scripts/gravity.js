canv = document.getElementById("canvas");
ctx = canv.getContext('2d');

//code
//ctx.fillStyle = 'red';
//ctx.fillRect(20,20,10,2);

w = canv.width;
h = canv.height;

console.log(w,h);
ctx.beginPath();
ctx.arc(150, 75, 50, 0, 2*Math.PI, false);
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'white';
ctx.stroke();