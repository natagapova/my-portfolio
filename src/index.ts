"use strict";

var circle: HTMLElement | null = document.getElementById("circle");
var upBtn: HTMLElement | null = document.getElementById("upBtn");
var downBtn: HTMLElement | null = document.getElementById("downBtn");

if (circle !== null) { 
    var rotateValue: string = circle.style.transform;
} else {
    console.error('error');
}

var rotateSum: string;

if (upBtn !== null) {
    upBtn.onclick = function() {
        rotateSum = rotateValue + "rotate(-90deg)";
        if (circle !== null) {
            circle.style.transform = rotateSum;
        } else {
            console.error('error');
        }
        rotateValue = rotateSum;
    }
} else {
    console.error('error');
}

if (downBtn !== null) {
    downBtn.onclick = function() {
        rotateSum = rotateValue + "rotate(90deg)";
        if (circle !== null) {
            circle.style.transform = rotateSum;
        } else {
            console.error('error');
        }
        rotateValue = rotateSum;
    }
} else {
    console.error('error');
}