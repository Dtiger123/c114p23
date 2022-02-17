function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function takesnapshot(){
    save("1055359_background-fun-wallpapers-zone_2716x1810_h.jpg")
}

function modelloaded(){
    console.log('Posenet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
}
}
function draw(){
    image(video,0,0,300,300);
image(mustache_bro,nose_x,nose_y,30,30)
}
nose_x=0;
nose_y=0;
mustache_bro="";
function preload(){
mustache_bro=loadImage("https://i.postimg.cc/K84jS420/2-2-moustache-png-file-thumb.png");
}