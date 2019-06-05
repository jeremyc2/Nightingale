var mouseIn = false;

function mouseover(element, filename) {
    mouseIn = true;
    element.src = filename;
    console.log("mouseover");
}

function mouseout(element, filename) {
    mouseIn = false;
    element.src = filename;
    console.log("mouseout");
}

function mousedown(element, filename) {
    element.src = filename;
    console.log("mousedown");
}

function mouseup(element, filename, altFilename) {
    if (!mouseIn) {
        element.src = filename;
    }
    else {
        element.src = altFilename;
    }
    console.log("mouseup");
}