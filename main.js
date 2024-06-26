song1="";
song2="";

function setup(){
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("Record(online-voice-recorder.com (4).mp3)");
}
function play(){
    song1.play("music.mp3");
    song2.play("Record(online-voice-recorder.com (4).mp3");
}