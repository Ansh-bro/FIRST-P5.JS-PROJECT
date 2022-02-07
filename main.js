function preload(){
    
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=creatCapture(VIDEO);
    video.hide();
}

function draw(){
    Image(video,0,0,640,480);

}

function take_snapshot(){
    save("Student.png");
}
