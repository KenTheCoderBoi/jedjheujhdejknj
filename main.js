function preload(){

}
function setup(){
    canvas = createCanvas(640,480)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()

    tint_color=""
}
function draw(){

    image(video,0,0,480,480)
    tint(tint_color)
    rect(0, 20, 55, 450);
    rect(600, 20, 55, 450);
    rect(10, 20, 600, 0);
    rect(20, 600, 450, 0);
}
function take_snapshot(){
    save('picture')
}

function filter_tint(){
    tint_color=document.getElementById("color").value
}