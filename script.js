// BrainDump script
// beginner project

console.log("script loaded");

// Screen 1

var slider = document.getElementById("tensionSlider");
var sliderText = document.getElementById("sliderText");

// change the text when slider moves
slider.addEventListener("input", function () {
    var val = slider.value;

    if (val == 1) {
        sliderText.innerHTML = "Slightly Overwhelmed";
    }
    if (val == 2) {
        sliderText.innerHTML = "Pretty Stressed";
    }
    if (val == 3) {
        sliderText.innerHTML = "Really Stressed";
    }
    if (val == 4) {
        sliderText.innerHTML = "Running On Empty";
    }
    if (val == 5) {
        sliderText.innerHTML = "Complete Burnout";
    }
});

// go to screen 2
document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
    document.body.classList.add("dark");
    console.log("went to screen 2, tension was " + slider.value);
});


// Screen 2

document.getElementById("trashBtn").addEventListener("click", function () {
    var box = document.getElementById("thoughtBox");
    var text = box.value;

    // dont let them trash nothing (check empty input)
    if (text == "" || text.trim() == "") {
        document.getElementById("errorMsg").innerHTML = "Write something first, then trash it.";
        return;
    }

    document.getElementById("errorMsg").innerHTML = "";

    // start crumple animation by calling css
    box.classList.add("crumple");

    // wait for the animation to finish then switch screens
    setTimeout(function () {
        // delete the text for real
        box.value = "";
        text = ""; //clears the local variable

        box.classList.remove("crumple"); //removes animation class so it can be used again next interaction

        document.getElementById("screen2").classList.add("hidden");
        document.getElementById("screen3").classList.remove("hidden");
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        addToCounter();
    }, 1200);
});


// Screen 3 ---

// the counter
// Stores information using localStorage
function addToCounter() {
    var count = localStorage.getItem("thoughtsCleared"); // Retrieve existing count, looks for value under the key thoughtsCleared

    if (count == null) {
        count = 0; // starting number
    }

    count = parseInt(count); //localStorage stores as strings so convert to a number
    count = count + 1; //JavaScript can now do the math

    localStorage.setItem("thoughtsCleared", count); //Stores new count

    document.getElementById("countNum").innerHTML = count; //Update screen
}

// start over button, doesn't reload entire webpage but changes visual elements
document.getElementById("againBtn").addEventListener("click", function () {
    document.getElementById("screen3").classList.add("hidden");
    document.getElementById("screen1").classList.remove("hidden");
    document.body.classList.remove("light");
    document.body.classList.remove("dark");

    // reset slider
    slider.value = 1;
    sliderText.innerHTML = "Slightly Overwhelmed";
});