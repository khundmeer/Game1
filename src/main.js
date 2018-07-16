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


let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)

var w = document.width;
var h = document.height;
var appWidth = 600;

//Create a Pixi Application
let app = new PIXI.Application({width: appWidth, height: 100, antialias: true});

//let app = new PIXI.Application({width: 500, height: 50});
//Add the canvas that Pixi automatically created for you to the HTML document
console.log("doc", document);
app.view.style.left = (w/2);
app.view.style.position = "relative";

document.body.appendChild(app.view);

app.renderer.autoResize = true;


//resizing the application window
//app.renderer.resize(512, 512);

//If I want to change the background color of the application
//app.renderer.backgroundColor = 0x061639;

let texture = PIXI.utils.TextureCache["CharGlobie.jpeg"];
