function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("result").innerHTML = "Object Detected: Detecting...";
}

function modelLoaded() {
    console.log("Model Loaded !");
    status = true;
    object_detector.detect(img , gotResult);
}

function gotResult(error , results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("person.jpg")
}

function draw() {
    image(img ,0 ,0 ,600 ,400); 

    if(status != "") {
        for(i=0; i < objects.length; i++) {
            document.getElementById("result").innerHTML = "Total Object Detected by CocoSSD: " + objects.length;
            
               
        }
            
    }
}
