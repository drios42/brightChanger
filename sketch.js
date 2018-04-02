var cam;
var img;
var xres = 640;
var yres = 480;
var thresh = 20;


function setup() {
    createCanvas(xres, yres);
    cam = createCapture(VIDEO);
    cam.size(xres, yres);
    cam.hide();
    img = createImage(width, height);
    img.loadPixels();
}

function draw() {
    background(255);
    cam.loadPixels();

    for (var i = 0; i < cam.pixels.length; i += 4) {
        var r = cam.pixels[i];
        var g = cam.pixels[i + 1];
        var b = cam.pixels[i + 2];
        var a = cam.pixels[i + 3];

        if (r > thresh && g > thresh && b > thresh) {
            r = 255;
            g = 255;
            b =255;
        }else{
            r=255;
            g=0;
            b=255;
        }
        img.pixels[i] = r;
        img.pixels[i + 1] = g;
        img.pixels[i + 2] = b;
        img.pixels[i + 3] = a;

    }
    img.updatePixels();
    image(img, 0, 0);
}


function keyTyped() {
    if (key == 'a') {
        thresh -= 5;
    }
    if (key == 'f') {
        thresh += 5;
    }

}
