var Game =
{
    update: function()
        {


        },


    start: function()
        {

        },
    end: function ()
    {

    },
    
    currentscore: function()
    {
        

    },

    HighScoreCalc: function()
    {
    //Checks if the currentscore has surpassed the previous highscore.
    },

    High_Score: 0
}



//This links pixi to our JS file
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)
var w = screen.width;
var h = screen.height;



//window.alert(h);
//console.log(h);

//Main Screen of the game
var AppWidth = 500;
var AppHeight = 100;
//window.alert(h);

let app = new PIXI.Application({width: AppWidth, height: AppHeight, antialias: true});
app.renderer.backgroundColor = 0x000000; //Color
var stage = new PIXI.Container();

document.body.appendChild(app.view);
console.log(app.width);

//app.renderer.view.style.position = 200;

//let app = new PIXI.Application({width: 500, height: 50});
//app.view.style.left = 500;
//new PIXI.rectangle(10, 10, 10, 10);
//app.stage
//find out how to get the width and height of the window ????????????????????????????????????????????

//let sprite = new PIXI.Sprite.fromImage('assets/image.png');

//var h = document.body.clientHeight;
//var w = document.body.clientWidth;

//window.alert(h);


//Add the canvas that Pixi automatically created for you to the HTML document

var MiddleLeft = (w/2)-(AppWidth/2);
var MiddleTop = (h/2)-(AppHeight-(AppHeight/2));

app.view.style.left = MiddleLeft;
app.view.style.top = MiddleTop;

//app.view.style.marginTop = '-('+(AppHeight/2)+')px';
//app.view.style.top = '50%';
//app.view.style.y = (h/2);
//document.window.innerwidth='(w/2)-300';
app.view.style.position = "relative";
app.renderer.autoResize = true;

scaleToWindow(app.renderer.view);

//Creating a rectangle below.
let rectangle = new Graphics();
rectangle.beginFill(0x66CCFF);
rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.drawRect(MiddleLeft, MiddleTop, 10, 10);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle.endFill();
app.stage.addChild(rectangle);

//Creating a rectangle above.

/*
// This was suppose to
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
*/



//resizing the application window
//app.renderer.resize(512, 512);

//If I want to change the background color of the application
//app.renderer.backgroundColor = 0x061639;
