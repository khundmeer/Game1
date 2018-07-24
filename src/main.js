let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)


// var Game =
// { 
  
//   //Game time since start
//   GameTime: 0,
  
//   //Width of the screen, perhaps should be window.width
//   w : screen.width,
//   h : screen.height,
//   //Main Screen of the game
//   AppWidth : 600,
//   AppHeight : 400,
  
//   //Array that stores Game and Text Objects
//   GameObjects : [],
//   TextObjects : [],
  
//   //Current and High Score
//   CurrentScore : 0,
//   HighScore : 0,

//   keyboard: function (keyCode) 
//   {
//       let key = {};//constructor
//       key.code = keyCode; 
//       key.isDown = false;
//       key.isUp = true;
//       key.press = undefined;
//       key.release = undefined;
//       //The `downHandler`
//       key.downHandler = event => {
//         if (event.keyCode === key.code) {
//           if (key.isUp && key.press) key.press();
//           key.isDown = true;
//           key.isUp = false;
//         }
//         event.preventDefault();
//       };
    
//       //The `upHandler`
//       key.upHandler = event => {
//         if (event.keyCode === key.code) {
//           if (key.isDown && key.release) key.release();
//           key.isDown = false;
//           key.isUp = true;
//         }
//         event.preventDefault();
//       };
    
//       //Attach event listeners
//       window.addEventListener(
//         "keydown", key.downHandler.bind(key), false
//       );
//       window.addEventListener(
//         "keyup", key.upHandler.bind(key), false
//       );
//       return key;
//   },

//   start: function ()
//   {
//     //Creating the screen of the application
//     let app = new PIXI.Application({width: this.AppWidth, height: this.AppHeight, antialias: true});
//     app.renderer.backgroundColor = 0x000000; //Color

//     document.body.appendChild(app.view);

//     var MiddleLeft = (this.w/2)-(this.AppWidth/2);
//     var MiddleTop = (this.h/2)-(this.AppHeight-(this.AppHeight/2));

//     app.view.style.left = MiddleLeft;
//     app.view.style.top = MiddleTop;
//     app.view.style.position = "relative";
//     app.renderer.autoResize = true;
//     //------------------------------------------------------------------------

//     //Create Welcome to my game text
//     let style = new PIXI.TextStyle(
//       {
//         fontFamily: "Arial",
//         fontSize: 36,
//         fill: "white",
//         stroke: '#ff3300',
//         strokeThickness: 4,
//         dropShadow: true,
//         dropShadowColor: "#000000",
//         dropShadowBlur: 4,
//         dropShadowAngle: Math.PI / 6,
//         dropShadowDistance: 6,
//       });
      
//       let message = new PIXI.Text("Welcome to My Game!", style);
//       app.stage.addChild(message);

//       message.position.set((this.AppWidth/2 -(message.width/2)),0);
//       // (AppHeight/2 -(message.height/2 - message.height/2))
//       // console.log(message.height);

//       // ------------------------------------------------------------------------
//       //   Creating a rectangle below.
          //  let player = new PIXI.Graphics();
          //  player.beginFill(0x66CCFF);
          //  player.lineStyle(4, 0xFF3300, 1);
          //  player.drawRect(0, 0, 33, 33);
          //  //rectangle.drawRect(   x    ,   y      , width, height);
          //  player.endFill();
          //  player.x=0;
          //  player.y=this.AppHeight/2;
          //  app.stage.addChild(player);
        
//        // ------------------------------------------------------------------------
      
//        let ScoreStyle = new PIXI.TextStyle(
//         {
//           fontFamily: "Arial",
//           fontSize: 22,
//           fill: "white",
//           stroke: '#ffffff',
//           strokeThickness: .5,
//           dropShadow: false,
//           dropShadowColor: "#000000",
//           dropShadowBlur: 2,
//           dropShadowAngle: Math.PI / 6,
//           dropShadowDistance: 6,
//         });
        
//         let DispScore = new PIXI.Text("Score", ScoreStyle);
//         app.stage.addChild(DispScore);
  
//         DispScore.position.set((this.AppWidth/2 -(DispScore.width/2)),40);

//         // ------------------------------------------------------------------------

//         let HS_Style = new PIXI.TextStyle(
//           {
//             fontFamily: "Arial",
//             fontSize: 22,
//             fill: "white",
//             stroke: '#ffffff',
//             strokeThickness: .5,
//             dropShadow: false,
//             dropShadowColor: "#000000",
//             dropShadowBlur: 2,
//             dropShadowAngle: Math.PI / 6,
//             dropShadowDistance: 6,
//           });
          
//           let DispHS = new PIXI.Text("High Score", HS_Style);
//           app.stage.addChild(DispHS);
    
//           DispHS.position.set((this.AppWidth/3 -(DispHS.width/2)),40);
//   },

//   CurrentScore: function(delta)
//   {
    
    
//     this.current_score = 0;

//   },

  
//   setup: function (hello) 
//         {
//           this.id = hello;

//             rectangle.y = 96;
//             rectangle.vx = 0;
//             rectangle.vy = 0;

//           //Adding all the keys
//             let left = keyboard(37),
//               up = keyboard(38),
//               right = keyboard(39),
//               down = keyboard(40);
          
//           left.press = () => {
//               //Change the rectangle's velocity when the key is pressed
//               rectangle.vx = -5;
//               rectangle.vy = 0;
//             };
            
//             //Left arrow key `release` method
//             left.release = () => {
//               //If the left arrow has been released, and the right arrow isn't down,
//               //and the rectangle isn't moving vertically:
//               //Stop the rectangle
//               if (!right.isDown && rectangle.vy === 0) {
//                 rectangle.vx = 0;
//               }
//             };
          
//             //Up
//             up.press = () => {
//               rectangle.vy = -5;
//               rectangle.vx = 0;
//             };
//             up.release = () => {
//               if (!down.isDown && rectangle.vx === 0) {
//                 rectangle.vy = 0;
//               }
//             };
          
//             //Right
//             right.press = () => {
//               rectangle.vx = 5;
//               rectangle.vy = 0;
//             };
//             right.release = () => {
//               if (!left.isDown && rectangle.vy === 0) {
//                 rectangle.vx = 0;
//               }
//             };
          
//             //Down
//             down.press = () => {
//               rectangle.vy = 5;
//               rectangle.vx = 0;
//             };
//             down.release = () => {
//               if (!up.isDown && rectangle.vx === 0) {
//                 rectangle.vy = 0;
//               }
//             };


//             state = play;

//           //Above adding all the keys
          
//           //Start the game loop by adding the `gameLoop` function to
//           //Pixi's `ticker` and providing it with a `delta` argument.
//           app.ticker.add(delta => gameLoop(delta));
//         },
  
//   update: function(delta)
//         {
//           GameTime += delta;
          
//           // player1.score--;
//           // player1.update(delta);
//           //gameLoop.time += delta;
//           console.log(gameLoop.time);
//           if (5 && GameLoop.time<7)
//           {
//             app.stage.addChild(message);
      
//             message.position.set((AppWidth/2 -(message.width/2)),(AppHeight/2 -(message.height/2 - message.height/2)));
//             //console.log(gameLoop.time);
//           }
//           //Move the rectangle 1 pixel 
          
//           //console.log("We are in the gameloop");
          
//           for(i = 0; i<GameObjects.length;i++)
//           {
//             if (CollisionDetect.hitRectangle(GameObjects[0],GameObjects[i+1]))
//             {
//                   console.log("We have a hit") ;
//                   app.stage.removeChild(GameObjects[0]);
//                   app.stage.removeChild(GameObjects[i+1]);
//             }  
//           }
          
          
          
//           if (CollisionDetect.hitRectangle(rectangle,rectangle1))
//           {
//                   console.log("We have a hit") ;
//                   app.stage.removeChild(rectangle);
//                   app.stage.removeChild(rectangle1);
//           }   
//           if (CollisionDetect.hitRectangle(rectangle,rectangle2))
//           {
//                   console.log("We have a hit") ;
//                   app.stage.removeChild(rectangle);
//                   app.stage.removeChild(rectangle2);
//           }
//           if (CollisionDetect.hitRectangle(rectangle,rectangle3))
//           {
//                   console.log("We have a hit") ;
//                   app.stage.removeChild(rectangle);
//                   app.stage.removeChild(rectangle3);
//                   // console.log(delta);
//           }
//           if (CollisionDetect.hitRectangle(rectangle,rectangle4))
//           {
//                   console.log("We have a hit") ;
//                   app.stage.removeChild(rectangle);
//                   app.stage.removeChild(rectangle4);
//           }
//           state(delta);
//           //Game.update(delta);
//         },
            

  
  
//   /**Keep track of current score
//    * @param 
//    * @returns current score,
//    */
  


//   //Checks if the currentscore has surpassed the previous highscore.
//   HighScoreCalc: function(current)
//   {
//     Prev_HS = this.Cur_HS;
//     if (current>this.Cur_HS)
//     {
//       this.Cur_HS = current;
//     }
//     return this.Cur_HS;
//   },


//   play: function (delta) 
// {
//     //rectangle.vx = 1;
//     //rectangle.vy = 1;
//     //Move the rectangle 1 pixel 
    
//     rectangle1.x -= 3;
//     rectangle2.x -= 2;
//     rectangle3.x -= 4;
//     rectangle4.x -= 5;




//     rectangle.x += rectangle.vx;
//     rectangle.y += rectangle.vy;

// }
  

// };





/**This is the collision detection object.
 * It contains functions that detect collision depending on the object(shape)
 **/
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



// Game.start();


























//---------------------------------------------------------------------------------------------------------------------------------------
// Above this point The real game object exists------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------









var w = screen.width;
var h = screen.height;
//Main Screen of the game
var AppWidth = 600;
var AppHeight = 400;


var Rects = [];
function CreateRect(yPos, Speed, Value)
{
  let newRec = new PIXI.Graphics();
  newRec.beginFill(0x66CCFF);
  newRec.lineStyle(4, 0xFF3300, 1);
  newRec.drawRect(0, 0, 33, 33);
  newRec.endFill();
  newRec.x = AppWidth;
  newRec.y = yPos;
  //newRec.name = Name;
  newRec.vx = Speed;
  newRec.value = Value;
  Rects.push(newRec);
  //Make this a function where it moves stuff
  newRec.update = function(dt)
  {
  newRec.x -= newRec.vx;
  }
  //Creating a rectangle below.
  // let rectangle = new PIXI.Graphics();
  // rectangle.beginFill(0x66CCFF);
  // rectangle.lineStyle(4, 0xFF3300, 1);
  // rectangle.drawRect(0, 0, 33, 33);

  // //rectangle.drawRect(   x    ,   y      , width, height);
  // rectangle.endFill();
  //rectangle.x = AppWidth;
  return newRec;
}


//var lastestRec = new CreateRect(132,-10,10);

//Number of Rectangles that we want to create

function AllRects()
{
    var yPos = 0;
    var Speed_Array = Add_Speed();
    Value = 10;
    var latestRect;
    var contain_rects = [];
    for (i = 0; i < 100; i++ )
    {
     //      CreateRect         (yPos, Speed, Value)
      latestRect = new CreateRect(yPos,Speed_Array[i],Value);
      
      if(i%5==0)
      {
        yPos = 0;
      }
      else
      {
        yPos += 40;
      }
      
      // if (i<5)
      // {
      //   yPos +=40;
      // }

      // if (i>=5 && i%5==0)
      // {
      //   yPos = 0;
      // }
      // if(i%5>0)
      // {
      //   yPos+=40;
      // }
     contain_rects.push(latestRect);
    }

  return contain_rects;
}


// function Addvalue()
// {

// }

//GetsCalled in AllRects (which creates all the rectangles) to set the speed of all rectangles.
function Add_Speed()
{
  var Speeds_of_rects = [];
  var number_of_rects = 100;
  for (i=0; i<number_of_rects; i++)
  {
    if (i<10)//2-3-4
    {
      Speeds_of_rects.push((Math.floor(Math.random() * 3) + 2));
    }
    else if(i<30) //Speed4-5-6-7
    {
      Speeds_of_rects.push((Math.floor(Math.random() * 5) + 3));
    }
    else if(i<50) //Speed 7-11
    {
      Speeds_of_rects.push((Math.floor(Math.random() * 6) + 5));
    }
    else if(i<80) //Speed7-13ish
    {
      Speeds_of_rects.push((Math.floor(Math.random() * 6) + 7));
    }
    else if(i<100) //Speed9-25
    {
      Speeds_of_rects.push((Math.floor(Math.random() * 17) + 10));
    }

  }
  return Speeds_of_rects;
}

// var newRect = new CreateRect("rectangle5", 132);
// Rects.push(newRect);



var GameObjects = new AllRects();






/**These are the notes that I am taking as I go along in this project
 * 
 * Function Start shall
 *      -display welcome
 *      -if the user clicks the start button then start the game
 *      -starting the game means displaying the player and sending some objects
 * 
 * Function End shall
 *      -if the player hits the negative object then it is destroyed game is ended
 *      -score is displayed
 */

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

//-----------------------------------------------------------------------
//Creating the screen of the application
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
let player = new PIXI.Graphics();
player.beginFill(0xFFFF00);
player.lineStyle(4, 0x008000, 1);
player.drawRect(0, 0, 25, 25);

//rectangle.drawRect(   x    ,   y      , width, height);
player.endFill();






//Creating a rectangle above.

/*
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
rectangle2.y = 40;


let rectangle3 = new PIXI.Graphics();
rectangle3.beginFill(0x66CCFF);
rectangle3.lineStyle(4, 0xFF3300, 1);
rectangle3.drawRect(0, 0, 33, 33);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle3.endFill();
rectangle3.x = AppWidth;
rectangle3.y = 80;



let rectangle4 = new PIXI.Graphics();
rectangle4.beginFill(0x66CCFF);
rectangle4.lineStyle(4, 0xFF3300, 1);
rectangle4.drawRect(0, 0, 33, 33);
//rectangle.drawRect(   x    ,   y      , width, height);
rectangle4.endFill();
rectangle4.x = AppWidth;
rectangle4.y = 120;
*/






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
  let message = new PIXI.Text("Are You Ready To Lose?", style);
 app.stage.addChild(message);

  message.position.set((AppWidth/2 -(message.width/2)),0);
  //(AppHeight/2 -(message.height/2 - message.height/2))
//console.log(message.height);
//------------------------------------------------------------------------------------



//var GameObjects = [player, rectangle1, rectangle2, rectangle3, rectangle4,lastestRec];

// for (i = 0; i<GameObjects.length; i++)
// {
//   app.stage.addChild(GameObjects[i]);
// }

/*
app.stage.addChild(rectangle);
app.stage.addChild(rectangle1);
app.stage.addChild(rectangle2);
app.stage.addChild(rectangle3);
app.stage.addChild(rectangle4);
*/

//-----------------------------------------------------------------------
/*
function Player() 
{
  let player = {};
  player.score = 10;

  player.update = function(dt) {
    //dfjkdfd
  }

  return player;
}

var player1 = new Player();
player1.score;
*/

//Moved to GameObj
function setup(hello) 
{
    this.id = hello;

      player.y = 96;
      player.vx = 0;
      player.vy = 0;

    //Adding all the keys
      let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    
    left.press = () => {
        //Change the rectangle's velocity when the key is pressed
        player.vx = -5;
        player.vy = 0;
      };
      
      //Left arrow key `release` method
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the rectangle isn't moving vertically:
        //Stop the rectangle
        if (!right.isDown && player.vy === 0) {
          player.vx = 0;
        }
      };
    
      //Up
      up.press = () => {
        player.vy = -5;
        player.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && player.vx === 0) {
          player.vy = 0;
        }
      };
    
      //Right
      right.press = () => {
        player.vx = 5;
        player.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && player.vy === 0) {
          player.vx = 0;
        }
      };
    
      //Down
      down.press = () => {
        player.vy = 5;
        player.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && player.vx === 0) {
          player.vy = 0;
        }
      };


      state = play;

    //Above adding all the keys
    
    //Start the game loop by adding the `gameLoop` function to
    //Pixi's `ticker` and providing it with a `delta` argument.
    app.ticker.add(delta => gameLoop(delta));
}


app.stage.addChild(player);
var Gt = 0;
//Moved to GameObj
//Displaying Objects
function gameLoop(delta)
{
    Gt += delta;
    // player1.score--;
    // player1.update(delta);
    //gameLoop.time += delta;
    console.log(Gt);
    if (Gt>200)
    {
      
      // app.stage.addChild(message);
      app.stage.removeChild(message)
      //message.position.set((AppWidth/2 -(message.width/2)),(AppHeight/2 -(message.height/2 - message.height/2)));
      console.log(Gt);
    }

    if(Gt>200 && Gt < 250)
    {
          for (i = 0; i<10; i++)
          {
            app.stage.addChild(GameObjects[i]);
            // app.stage.addChild(Rects[0]);
          }  
          for (i = 10; i<30; i++)
          {
            app.stage.addChild(GameObjects[i]);
            // app.stage.addChild(Rects[0]);
          }
          for (i = 30; i<50; i++)
          {
            app.stage.addChild(GameObjects[i]);
            // app.stage.addChild(Rects[0]);
          }
          for (i = 50; i<80; i++)
          {
            app.stage.addChild(GameObjects[i]);
            // app.stage.addChild(Rects[0]);
          }
          for (i = 80; i<90; i++)
          {
            app.stage.addChild(GameObjects[i]);
            // app.stage.addChild(Rects[0]);
          }
          for (i = 90; i<100; i++)
          {
            app.stage.addChild(GameObjects[i]);
            // app.stage.addChild(Rects[0]);
          }
    }

     
    
    
    for(i = 0; i<GameObjects.length;i++)
    {
      if (CollisionDetect.hitRectangle(player,GameObjects[i]))
      {
           console.log("We have a hit") ;
            app.stage.removeChild(player);
            app.stage.removeChild(GameObjects[i]);
      }  
    }
    
    
    /*
    if (CollisionDetect.hitRectangle(player,rectangle1))
    {
          console.log("We have a hit") ;
          app.stage.removeChild(player);
          app.stage.removeChild(rectangle1);
    }   
    if (CollisionDetect.hitRectangle(player,rectangle2))
    {
          console.log("We have a hit") ;
          app.stage.removeChild(player);
          app.stage.removeChild(rectangle2);
    }
    if (CollisionDetect.hitRectangle(player,rectangle3))
    {
          console.log("We have a hit");
          app.stage.removeChild(player);
          app.stage.removeChild(rectangle3);
            // console.log(delta);
    }
    if (CollisionDetect.hitRectangle(player,rectangle4))
    {
          console.log("We have a hit") ;
          app.stage.removeChild(player);
          app.stage.removeChild(rectangle4);
    }
    */


    state(delta);
    //Game.update(delta);
}

//This for moving the rectangles
function play(delta) 
{
  if(player.x >= 0 && (player.x + player.vx) >= 0){
    player.x += player.vx;
  }
  else {
    player.x = 0;
  }
  player.y += player.vy;
    //rectangle.vx = 1;
    //rectangle.vy = 1;
    //Move the rectangle 1 pixel 
    //0-10
    if (Gt>300 && Gt<1300)
    {
      for(i=0;i<5;i++)
      {
        GameObjects[i].update(delta);
      }
      //5-10
      if (Gt>800)
      {
        for(i=5;i<10;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      // GameObjects.forEach(rect => {
      //   rec.update(delta);
      // });
      // rectangle1.x -= 2;
      // rectangle2.x -= 3;
      // rectangle3.x -= 2;
      // rectangle4.x -= 4;
    }

    //10-30
    if (Gt>1600 && Gt<3000)
    {
      //10-15
      for (i = 10; i<15; i++)
      {
        GameObjects[i].update(delta);
      }
      //15-20
      if (Gt>1800)
      {
        for(i=15;i<20;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //20-25
      if (Gt>2000)
      {
        for(i=20;i<25;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //25-30
      if (Gt>2500)
      {
        for(i=25;i<30;i++)
        {
          GameObjects[i].update(delta);
        }
      }
    }

    //30-50
    if (Gt>3000 && Gt<4000)
    {
      //30-35
      for (i = 30; i<35; i++)
      {
        GameObjects[i].update(delta);
      }
      //35-40
      if (Gt>3200)
      {
        for(i=35;i<40;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //40-45
      if (Gt>3300)
      {
        for(i=40;i<45;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //45-50
      if (Gt>3700)
      {
        for(i=45;i<50;i++)
        {
          GameObjects[i].update(delta);
        }
      }
    }

    //50-80
    if (Gt>4000 && Gt<5200)
    {
      //50-55
      for (i = 50; i<55; i++)
      {
        GameObjects[i].update(delta);
      }
      //55-60
      if (Gt>4200)
      {
        for(i=55;i<60;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //60-65
      if (Gt>4400)
      {
        for(i=60;i<65;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //65-70
      if (Gt>4700)
      {
        for(i=65;i<70;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //70-75
      if (Gt>4750)
      {
        for(i=70;i<75;i++)
        {
          GameObjects[i].update(delta);
        }
      }
      //75-80
      if (Gt>4950)
      {
        for(i=75;i<80;i++)
        {
          GameObjects[i].update(delta);
        }
      }
    }

    //80-90
    if (Gt>5300 && Gt<5600)
    {
      //80-85
      for (i = 80; i<85; i++)
      {
        GameObjects[i].update(delta);
      }
      //85-90
      if (Gt>5500)
      {
        for(i=85;i<90;i++)
        {
          GameObjects[i].update(delta);
        }
      }
    }

    //90-100
    if (Gt>5700 && Gt<6200)
    {
      //90-95

      for (i = 90; i<95; i++)
      {
        GameObjects[i].update(delta);
      }
      //95-100
      if (Gt>6000)
      {
        for(i=95;i<100;i++)
        {
          GameObjects[i].update(delta);
        }
      }
    }

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