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
    //var state 
}


var CollisionDetect = 
{
    hitRectangle: function (r1, r2) {

        //Define the variables we'll need to calculate
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
      
        //hit will determine whether there's a collision
        hit = false;
      
        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;
      
        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;
      
        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;
      
        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;
      
        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {
      
          //A collision might be occuring. Check for a collision on the y axis
          if (Math.abs(vy) < combinedHalfHeights) {
      
            //There's definitely a collision happening
            hit = true;
          } else {
      
            //There's no collision on the y axis
            hit = false;
          }
        } else {
      
          //There's no collision on the x axis
          hit = false;
        }
      
        //`hit` will be either `true` or `false`
        return hit;
      }
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
var AppHeight = 200;
//window.alert(h);

let app = new PIXI.Application({width: AppWidth, height: AppHeight, antialias: true});
app.renderer.backgroundColor = 0x000000; //Color


document.body.appendChild(app.view);
//console.log(app.width);

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

//scaleToWindow(app.renderer.view);
var GameObjs = [];
//-----------------------------------------------------------------------
//Creating a rectangle below.
let rectangle = new PIXI.Graphics();
rectangle.beginFill(0x66CCFF);
rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.drawRect(0, 0, 33, 33);

//rectangle.drawRect(   x    ,   y      , width, height);
rectangle.endFill();
app.stage.addChild(rectangle);
//Creating a rectangle above.

let rectangle2 = new PIXI.Graphics();
rectangle2.beginFill(0x66CCFF);
rectangle2.lineStyle(4, 0xFF3300, 1);
rectangle2.drawRect(0, 0, 33, 33);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle2.endFill();
rectangle2.x = AppWidth;

app.stage.addChild(rectangle2);




//-----------------------------------------------------------------------

function setup(hello) 
{
    this.id = hello;
    //Start the game loop by adding the `gameLoop` function to
    //Pixi's `ticker` and providing it with a `delta` argument.
    app.ticker.add(delta => gameLoop(delta));
}
  
  function gameLoop(delta){
  
    //Move the cat 1 pixel 
    rectangle2.x -= 1;
    
    if (CollisionDetect.hitRectangle(rectangle,rectangle2))
        {
           console.log("We have a hit") ;
            app.stage.removeChild(rectangle);
            app.stage.removeChild(rectangle2);
        
        }
    //------------------------------------------------------------------------------------------I stopped here after destroying objects upon collision.
    
    //Game.update(delta);

    //if(hitTestRectangle(rectangle,rectangle2))
   // {
   //     window.alert("Collision is there");
//}


  }

var setupObj = new setup('hello world');
console.log(setupObj);



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
