'use strict'

// function setColors() {
//     if (localStorage.getItem("color1") != null)
//     {
//         var color1 = localStorage.color1;
//         document.body.style.background = color1;
//         document.getElementById("colorclickerbutton").style.borderColor = color1;
//         document.getElementById("suzannebutton").style.borderColor = color1;
//         document.getElementById("title").style.color = color1;
//         document.getElementById("navbar1").style.color = color1;
//         document.getElementById("navbar2").style.color = color1;
//         document.getElementById("navbar3").style.color = color1;
//         document.getElementById("navbar1").style.borderColor = color1;
//         document.getElementById("navbar2").style.borderColor = color1;
//         document.getElementById("navbar3").style.borderColor = color1;
        
//         var color2 = localStorage.color2;
//         document.getElementById("colorclickerbutton").style.backgroundColor = color2;
//         document.getElementById("suzannebutton").style.backgroundColor = color2;
//         document.getElementById("topbar").style.backgroundColor = color2;

//         if (localStorage.theme == "1)
//         {
//             document.getElementById("title").style.backgroundColor = "#000000";
//             document.getElementById("colorclickerbutton").style.color = "#000000";
//             document.getElementById("suzannebutton").style.color = "#000000";
//             document.getElementById("colorclickersec").style.backgroundColor = "#000000";
//             document.getElementById("suzannesec").style.backgroundColor = "#000000";
//             document.getElementById("navbar1").style.backgroundColor = "#000000";
//             document.getElementById("navbar2").style.backgroundColor = "#000000";
//             document.getElementById("navbar3").style.backgroundColor = "#000000";
//         }
//         else
//         {
//             document.getElementById("title").style.backgroundColor = "#ffffff";
//             document.getElementById("colorclickerbutton").style.color = "#ffffff";
//             document.getElementById("suzannebutton").style.color = "#ffffff";
//             document.getElementById("colorclickersec").style.backgroundColor = "#ffffff";
//             document.getElementById("suzannesec").style.backgroundColor = "#ffffff";
//             document.getElementById("navbar1").style.backgroundColor = "#ffffff";
//             document.getElementById("navbar2").style.backgroundColor = "#ffffff";
//             document.getElementById("navbar3").style.backgroundColor = "#ffffff";
//         }
//     }
// }

// window.onload = setColors();

function randomColors() {
    var color1 = getRandomColor();
    localStorage.color1 = color1;
    document.body.style.background = color1;
    document.getElementById("colorclickerbutton").style.borderColor = color1;
    document.getElementById("suzannebutton").style.borderColor = color1;
    document.getElementById("title").style.color = color1;
    document.getElementById("navbar1").style.color = color1;
    document.getElementById("navbar2").style.color = color1;
    document.getElementById("navbar3").style.color = color1;
    document.getElementById("navbar1").style.borderColor = color1;
    document.getElementById("navbar2").style.borderColor = color1;
    document.getElementById("navbar3").style.borderColor = color1;

    var color2 = getRandomColor();
    localStorage.color2 = color2;
    document.getElementById("colorclickerbutton").style.backgroundColor = color2;
    document.getElementById("suzannebutton").style.backgroundColor = color2;
    document.getElementById("topbar").style.backgroundColor = color2;

    if (((Math.random() * 2) + 1) < 2)
    {
        localStorage.theme = 1;
        document.getElementById("title").style.backgroundColor = "#000000";
        document.getElementById("colorclickerbutton").style.color = "#000000";
        document.getElementById("suzannebutton").style.color = "#000000";
        document.getElementById("colorclickersec").style.backgroundColor = "#000000";
        document.getElementById("suzannesec").style.backgroundColor = "#000000";
        document.getElementById("navbar1").style.backgroundColor = "#000000";
        document.getElementById("navbar2").style.backgroundColor = "#000000";
        document.getElementById("navbar3").style.backgroundColor = "#000000";
    }
    else
    {
        localStorage.theme = 2;
        document.getElementById("title").style.backgroundColor = "#ffffff";
        document.getElementById("colorclickerbutton").style.color = "#ffffff";
        document.getElementById("suzannebutton").style.color = "#ffffff";
        document.getElementById("colorclickersec").style.backgroundColor = "#ffffff";
        document.getElementById("suzannesec").style.backgroundColor = "#ffffff";
        document.getElementById("navbar1").style.backgroundColor = "#ffffff";
        document.getElementById("navbar2").style.backgroundColor = "#ffffff";
        document.getElementById("navbar3").style.backgroundColor = "#ffffff";
    }
}

function getRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }