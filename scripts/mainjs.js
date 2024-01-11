// Trailer to follow cursor
console.log(parseInt(7.25));
const trailer = document.getElementById("trailer");
const point = document.getElementById("trailer");
for (i=0;i<3;i++){
    let para = document.createElement("div");
    para.classList.add("circle");
    trailer.appendChild(para);
}
for (i=0;i<3;i++){
    let para = document.createElement("div");
    para.classList.add("square");
    point.appendChild(para);
}
// Generates the circles in a corner before movement
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const squares = document.querySelectorAll(".square");
const colors = [
    "#ffb56b",
    "#ef865e",
    "#d5585c",
];
const colors2 = [
    "#a7a7a7",
    "#696969",
    "#293949",
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

squares.forEach(function (square, index) {
    square.x = 0;
    square.y = 0;
    square.style.borderColor = colors2[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
  
});
function animateCircles() {
  
    let x = coords.x;
    let y = coords.y;
  
    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
    
        circle.style.scale = (circles.length - index) / circles.length;
    
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
    });
    setInterval(requestAnimationFrame(animateCircles),100);
}

function animateSquares(){
    let x = coords.x;
    let y = coords.y;

    squares.forEach(function (square, index){
        square.style.left = x + "px";
        square.style.top = y + "px";
        square.style.scale = (squares.length - index) / (squares.length*2);
        var rotation = squares.le
        square.style.transform = `rotate(${rotation}deg)`;
        square.x = x;
        square.y = y;
    });
    setInterval(requestAnimationFrame(animateSquares),100);
}
animateCircles();
animateSquares();