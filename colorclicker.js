'use strict'

let clicks = 0;
let clickers = 0;
let clickerPrice = 20;
let level = 0;
let prestige = 0;
let scaling = 1 + 0.1 * (prestige + 1);
let colorfactor = (prestige + 1) * 255;
let interval;
let drainInterval;
let isDraining = false;

initialize();
update();

function update()
{
    localStorage.clicks = clicks;
    localStorage.clickerPrice = clickerPrice;
    localStorage.clickers = clickers;
    localStorage.prestige = prestige;
    document.getElementById("header").innerHTML = "Clicks: " + localStorage.clicks;
    document.getElementById("buyClicker").value = "Buy Clicker: " + localStorage.clickerPrice
    document.getElementById("clickers").innerHTML = "Clickers: " + localStorage.clickers

    if (prestige > 0)
    {
        document.getElementById("prestige").innerHTML = "Prestige: " + localStorage.prestige
        document.getElementById("prestige").style.visibility = "visible"
    }
        
    colorize();
    
    if (clickers > 0)
    {
        clearInterval(interval)
        interval = setInterval(addAutoClicks, 1000 / clickers)
    }
}

function addOneToClicks()
{
    clicks += 1;
    update();
}

function buyClicker()
{
    if (clicks >= clickerPrice)
    {
        clicks = clicks - clickerPrice;
        clickers = clickers + 1;
        clickerPrice = Math.round(clickerPrice ** scaling);
        update();
    }
}

function addAutoClicks()
{
    clicks = clicks + 1;
    update();
}

function colorize()
{
    level = 0;
    if (level == 0)
    {
        if (clicks > colorfactor)
        {
            level = 1;
        }
        else
        {
            document.body.style.backgroundColor = "rgb(255," + Math.round(clicks / (prestige + 1)) + ", 0)"
        }
    }
    if (level == 1)
    {
        if (clicks > colorfactor * 2)
        {
            level = 2;
        }
        else
        {
            document.body.style.backgroundColor = "rgb(" + (255 - Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", 255, 0)"
        }
    }
    if (level == 2)
    {
        if (clicks > colorfactor * 3)
        {
            level = 3;
        }
        else
        {
            document.body.style.backgroundColor = "rgb(0,255," + (Math.round((clicks - colorfactor * level) / (prestige + 1))) + ")"
        }
    }
    if (level == 3)
    {
        if (clicks > colorfactor * 4)
        {
            level = 4;
        }
        else
        {
            document.body.style.backgroundColor = "rgb(0," + (255 - Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", 255)"
        }
    }
    if (level == 4)
    {
        if (clicks > colorfactor * 5)
        {
            level = 5;
        }
        else
        {
            document.body.style.backgroundColor = "rgb(" + (Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", 0, 255)"
        }
    }
    if (level == 5)
    {
        if (clicks > colorfactor * 6)
        {
            level = 6;
        }
        else
        {
            document.body.style.backgroundColor = "rgb(255," + (Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", 255)"
        }
    }
    if (level == 6)
    {
        if ((clicks > colorfactor * 7) && (!isDraining))
        {
           document.getElementById("prestigeButton").style.visibility = "visible"
        }

        document.body.style.backgroundColor = "rgb(" + (255 - Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", " +  (255 - Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", " + (255 - Math.round((clicks - colorfactor * level) / (prestige + 1))) + ")"
        document.body.style.color = "rgb(" + (Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", " +  (Math.round((clicks - colorfactor * level) / (prestige + 1))) + ", " + (Math.round((clicks - colorfactor * level) / (prestige + 1))) + ")"
    }
}

function initialize()
{
    if (isNaN(localStorage.clicks))
    {
        localStorage.clicks = 0;
        clicks = 0;
    }
    else
    {
        clicks = Number(localStorage.clicks);
    }

    if (isNaN(localStorage.clickers))
    {
       localStorage.clickers = 0;
      clickers = 0;
    }
    else
    {
        clickers = Number(localStorage.clickers);
    }

    if (isNaN(localStorage.clickerPrice))
    {
        localStorage.clickerPrice = 20;
        clickerPrice = 20;
    }
    else
    {
        clickerPrice = Number(localStorage.clickerPrice);
    }

    if (isNaN(localStorage.prestige))
    {
        localStorage.prestige = 0;
    }
    else
    {
        prestige = Number(localStorage.prestige);
    }
}

function drainClicks()
{
    clicks -= 1
    clearInterval(drainInterval)
    drainInterval = setInterval(drainClicks, 1000 / clicks)
    update()

    if (clicks <= 0)
    {
        isDraining = false;
        clearInterval(drainInterval)
        document.body.style.transition = "background-color 1s"
        clickers = 0;
        clickerPrice = 20;
        level = 0;
        prestige += 1;
        scaling = 1 + 0.1 * (prestige + 1);
        colorfactor = (prestige + 1) * 255;
        clearInterval(interval)
        // document.body.style.color = "black"
        // document.body.style.backgroundColor = "red"
        update()
    }
}

function incPrestige()
{
    if (confirm("Test?"))
    {
        isDraining = true;
        document.getElementById("prestigeButton").style.visibility = "hidden"
        document.body.style.transition = "background-color 0s"
        drainInterval = setInterval(drainClicks, 1000 / clicks)
        update()
    }
}

function clearData()
{
    localStorage.clear();
    clicks = 0;
    clickers = 0;
    clickerPrice = 20;
    prestige = 0;
    window.location.reload();
}