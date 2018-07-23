/*
var Game =
{ 
  
  
    CurrentScore: function()
    {
        this.current_score = 0;

    },
    current_score: CurrentScore(),
    Cur_HS: HighScoreCalc(),
    //Prev_HS:
    update: function()
        {


        },


    start: function()
        {

        },
    end: function ()
    {

    },
    
    /**Keep track of current score
     * @param 
     * @returns current score,
     
   


    //Checks if the currentscore has surpassed the previous highscore.
    HighScoreCalc: function()
    {
      Prev_HS = Cur_HS;
      if (this.current_score>this.Cur_HS)
      {
        this.Cur_HS = this.Cur_HS;
      }
      return this.Cur_HS;
    
    }

    
    //var state 
};
*/

// function update(delta)
// {
  
// }

// function start()
// {
// //display welcome
// //if the user clicks the start button then start the game
// // starting the game means displaying the player and sending some objects
// }

// function end()
// {
// //if the player hits the negative object then it is destroyed game is ended
// //score is displayed
// }

var w = screen.width;
var h = screen.height;
//Main Screen of the game
var AppWidth = 600;
var AppHeight = 400;

/**This is the collision detection object.
 * It contains functions that detect collision depending on the object(shape)
 **/


let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
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

/**This is the keyboard function for handling the keyboard events */
function keyboard(keyCode) 
{
    let key = {};//constructor
    key.code = keyCode; 
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };
  
    //Attach event listeners
    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
}

PIXI.utils.sayHello(type)

let app = new PIXI.Application({width: AppWidth, height: AppHeight, antialias: true});
app.renderer.backgroundColor = 0x000000; //Color

document.body.appendChild(app.view);

var MiddleLeft = (w/2)-(AppWidth/2);
var MiddleTop = (h/2)-(AppHeight-(AppHeight/2));

app.view.style.left = MiddleLeft;
app.view.style.top = MiddleTop;
app.view.style.position = "relative";
app.renderer.autoResize = true;

//-----------------------------------------------------------------------
//Creating a rectangle below.
let rectangle = new PIXI.Graphics();
rectangle.beginFill(0x66CCFF);
rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.drawRect(0, 0, 33, 33);

//rectangle.drawRect(   x    ,   y      , width, height);
rectangle.endFill();

//Creating a rectangle above.

let rectangle1 = new PIXI.Graphics();
rectangle1.beginFill(0x66CCFF);
rectangle1.lineStyle(4, 0xFF3300, 1);
rectangle1.drawRect(0, 0, 33, 33);

//rectangle.drawRect(   x    ,   y      , width, height);
rectangle1.endFill();
rectangle1.x = AppWidth;
rectangle1.y = 0;

//Creating a rectangle above.

let rectangle2 = new PIXI.Graphics();
rectangle2.beginFill(0x66CCFF);
rectangle2.lineStyle(4, 0xFF3300, 1);
rectangle2.drawRect(0, 0, 33, 33);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle2.endFill();
rectangle2.x = AppWidth;
rectangle2.y = 33;


let rectangle3 = new PIXI.Graphics();
rectangle3.beginFill(0x66CCFF);
rectangle3.lineStyle(4, 0xFF3300, 1);
rectangle3.drawRect(0, 0, 33, 33);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle3.endFill();
rectangle3.x = AppWidth;
rectangle3.y = 66;



let rectangle4 = new PIXI.Graphics();
rectangle4.beginFill(0x66CCFF);
rectangle4.lineStyle(4, 0xFF3300, 1);
rectangle4.drawRect(0, 0, 33, 33);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle4.endFill();
rectangle4.x = AppWidth;
rectangle4.y = 99;

//------------------------------------------------------------------------------------
let style = new PIXI.TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fill: "white",
  stroke: '#ff3300',
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
});
let message = new PIXI.Text("Welcome to My Game!", style);
// app.stage.addChild(message);

// message.position.set((AppWidth/2 -(message.width/2)),(AppHeight/2 -(message.height/2 - message.height/2)));
//console.log(message.height);
//------------------------------------------------------------------------------------



var GameObjects = [rectangle, rectangle1, rectangle2, rectangle3, rectangle4];

for (i = 0; i<GameObjects.length; i++)
{
  app.stage.addChild(GameObjects[i]);
}

/*
app.stage.addChild(rectangle);
app.stage.addChild(rectangle1);
app.stage.addChild(rectangle2);
app.stage.addChild(rectangle3);
app.stage.addChild(rectangle4);
*/

//-----------------------------------------------------------------------

function setup(hello) 
{
    this.id = hello;

      rectangle.y = 96;
      rectangle.vx = 0;
      rectangle.vy = 0;

    //Adding all the keys
      let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    
    left.press = () => {
        //Change the rectangle's velocity when the key is pressed
        rectangle.vx = -5;
        rectangle.vy = 0;
      };
      
      //Left arrow key `release` method
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the rectangle isn't moving vertically:
        //Stop the rectangle
        if (!right.isDown && rectangle.vy === 0) {
          rectangle.vx = 0;
        }
      };
    
      //Up
      up.press = () => {
        rectangle.vy = -5;
        rectangle.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && rectangle.vx === 0) {
          rectangle.vy = 0;
        }
      };
    
      //Right
      right.press = () => {
        rectangle.vx = 5;
        rectangle.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && rectangle.vy === 0) {
          rectangle.vx = 0;
        }
      };
    
      //Down
      down.press = () => {
        rectangle.vy = 5;
        rectangle.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && rectangle.vx === 0) {
          rectangle.vy = 0;
        }
      };


      state = play;

    //Above adding all the keys
    
    //Start the game loop by adding the `gameLoop` function to
    //Pixi's `ticker` and providing it with a `delta` argument.
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta)
{
    gameLoop.time += delta;
    console.log(gameLoop.time);
    if (gameLoop.time>5 && GameLoop.time<7)
    {
      app.stage.addChild(message);

      message.position.set((AppWidth/2 -(message.width/2)),(AppHeight/2 -(message.height/2 - message.height/2)));
      console.log(gameLoop.time);
    }
    //Move the rectangle 1 pixel 
    
    //console.log("We are in the gameloop");
    /*
    for(i = 0; i<GameObjects.length;i++)
    {
      if (CollisionDetect.hitRectangle(GameObjects[0],GameObjects[i+1]))
      {
           console.log("We have a hit") ;
            app.stage.removeChild(GameObjects[0]);
            app.stage.removeChild(GameObjects[i+1]);
      }  
    }
    */
    
    
    if (CollisionDetect.hitRectangle(rectangle,rectangle1))
    {
           console.log("We have a hit") ;
            app.stage.removeChild(rectangle);
            app.stage.removeChild(rectangle1);
    }   
    if (CollisionDetect.hitRectangle(rectangle,rectangle2))
    {
           console.log("We have a hit") ;
            app.stage.removeChild(rectangle);
            app.stage.removeChild(rectangle2);
    }
    if (CollisionDetect.hitRectangle(rectangle,rectangle3))
    {
           console.log("We have a hit") ;
            app.stage.removeChild(rectangle);
            app.stage.removeChild(rectangle3);
            // console.log(delta);
    }
    if (CollisionDetect.hitRectangle(rectangle,rectangle4))
    {
           console.log("We have a hit") ;
            app.stage.removeChild(rectangle);
            app.stage.removeChild(rectangle4);
    }
    state(delta);
    //Game.update(delta);
}


function play(delta) 
{
    //rectangle.vx = 1;
    //rectangle.vy = 1;
    //Move the rectangle 1 pixel 
    rectangle1.x -= 3;
    rectangle2.x -= 2;
    rectangle3.x -= 4;
    rectangle4.x -= 5;
    rectangle.x += rectangle.vx;
    rectangle.y += rectangle.vy;

}

var setupObj = new setup('hello world');

//---------------------------------------------------------------------------------------
//Below checks if WebGL supported.
//This links pixi to our JS file (may be)

/*
var setupObj = new setup('hello world');
console.log(setupObj);
*/


/*
  PIXI.utils.sayHello(type)

  let app = new PIXI.Application({width: AppWidth, height: AppHeight, antialias: true});
  app.renderer.backgroundColor = 0x000000; //Color


  document.body.appendChild(app.view);


  var MiddleLeft = (w/2)-(AppWidth/2);
  var MiddleTop = (h/2)-(AppHeight-(AppHeight/2));

  app.view.style.left = MiddleLeft;
  app.view.style.top = MiddleTop;
  */

  /*
  //console.log(app.width);

  //app.renderer.view.style.position = 200;

  //let app = new PIXI.Applirectangleion({width: 500, height: 50});
  //app.view.style.left = 500;
  //new PIXI.rectangle(10, 10, 10, 10);
  //app.stage

  //let sprite = new PIXI.Sprite.fromImage('assets/image.png');

  //var h = document.body.clientHeight;
  //var w = document.body.clientWidth;

  //window.alert(h);

  //Add the canvas that Pixi automatically created for you to the HTML document
*/