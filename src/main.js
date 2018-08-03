let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type)

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
        //only prev default inside the designated key
      event.preventDefault();
      }
      
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
     
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

var Game =
{ 
  
  //Game time since start
  GameTime : 0,
  app : undefined,
  //Width of the screen, perhaps should be window.width
  w : screen.width,
  h : screen.height,
  //Main Screen of the game
  AppWidth : 600,
  AppHeight : 400,
  player : undefined,
  //Array that stores Game and Text Objects
  GameObjects : [],
  TextObjects : [],
  GameMessage : undefined,
  //Current and High Score
  CurrentScore : 0,
  HighScore : 0,
  ScoreMessage : undefined,
  EndMessage : undefined,

  //----------------------------------------------------------------------------------------------Above Variables

  //----------------------------------------------------------------------------------------Below Start Function
  
  start: function ()
  {
    console.log(this);
    //Creating the screen of the application
    var app = new PIXI.Application({width: this.AppWidth, height: this.AppHeight, antialias: true});
    app.renderer.backgroundColor = 0x000000; //Color

    document.body.appendChild(app.view);

    var MiddleLeft = (this.w/2)-(this.AppWidth/2);
    var MiddleTop = (this.h/2)-(this.AppHeight-(this.AppHeight/2));

    app.view.style.left = MiddleLeft;
    app.view.style.top = MiddleTop;
    app.view.style.position = "relative";
    app.renderer.autoResize = true;
    Game.app = app;
    
    //------------------------------------------------------------------------

    //Create Are you ready to Lose text
    let style = new PIXI.TextStyle(
    {
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
      
      Game.GameMessage = new PIXI.Text("", style);
      Game.app.stage.addChild(Game.GameMessage);

      // (AppHeight/2 -(message.height/2 - message.height/2))
      // console.log(message.height);

      // ------------------------------------------------------------------------
      //   Creating a Player below.
      let player = new PIXI.Graphics();
      player.beginFill(0xFFFF00);
      player.lineStyle(4, 0x008000, 1);
      player.drawRect(0, 0, 25, 25);
      //rectangle.drawRect(   x    ,   y      , width, height);
      player.endFill();
      player.x=0;
      player.y=this.AppHeight/2;
      Game.app.stage.addChild(player);
      Game.player= player;
      

      // ------------------------------------------------------------------------
      
      // let ScoreStyle = new PIXI.TextStyle(
      // {
      //   fontFamily: "Arial",
      //   fontSize: 22,
      //   fill: "white",
      //   stroke: '#ffffff',
      //   strokeThickness: .5,
      //   dropShadow: false,
      //   dropShadowColor: "#000000",
      //   dropShadowBlur: 2,
      //   dropShadowAngle: Math.PI / 6,
      //   dropShadowDistance: 6,
      // });
        
      // let DispScore = new PIXI.Text("Score", ScoreStyle);
      // Game.app.stage.addChild(DispScore);

      // DispScore.position.set((this.AppWidth/2 -(DispScore.width/2)),40);

      // ------------------------------------------------------------------------

      let HS_Style = new PIXI.TextStyle(
      {
        fontFamily: "Arial",
        fontSize: 22,
        fill: "white",
        stroke: '#ffffff',
        strokeThickness: .5,
        dropShadow: false,
        dropShadowColor: "#000000",
        dropShadowBlur: 2,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
      });
        
      let DispHS = new PIXI.Text("", HS_Style);
      Game.app.stage.addChild(DispHS);

      Game.ScoreMessage = DispHS;

      DispHS.position.set((this.AppWidth/3 -(DispHS.width/2)),40);
      Game.GameObjects = new this.AllRects();

    return Game.app;
  },

  //----------------------------------------------------------------------------------------Above Start Function/ Below CreateRect Function

  CreateRect: function (yPos, Speed, Value, isEnemy)
  {
    let newRec = new PIXI.Graphics();

    var color = isEnemy? 0xFF3300 : 0x66CCFF ;//ternary operator

    newRec.beginFill(color);
    newRec.lineStyle(4, color, 1);
    newRec.drawRect(0, 0, 33, 33);
    newRec.endFill();
    newRec.x = Game.AppWidth;
    newRec.y = yPos;
    //newRec.name = Name;
    newRec.vx = Speed;
    newRec.value = isEnemy? -5 : 10;
    Game.GameObjects.push(newRec);
    //Make this a function where it moves stuff
    newRec.update = function(dt)
    {
    newRec.x -= newRec.vx;
    }
    newRec.isEnemy = isEnemy;//true/false
    newRec.isDestroyed = false;

    return newRec;
  },
  //----------------------------------------------------------------------------------------Above CreateRect Function/ Below AllRects Function
  //Number of Rectangles that we want to create
  AllRects: function ()
  {
    //were vars
    yPos = 0;
    Value = 0;
    var latestRect = 0;
    contain_rects =[];

    let Speed_Array = Game.Add_Speed();

    let ranNum;
    for (i = 0; i < 100; i++ )
    {
      
      if(i%5==0)
      {
        yPos = 80;
        ranNum = Math.floor(Math.random() * 5);
      }
      else
      {
        yPos += 40;
      }

      //      CreateRect         (yPos, Speed, Value)
       latestRect = new Game.CreateRect(yPos,Speed_Array[i],Value, i%5 != ranNum);
      
      
      
      
     contain_rects.push(latestRect);
    }

    return contain_rects;
  },
  //----------------------------------------------------------------------------------------Above AllRects Function/ Below Add_Speed Function
  Add_Speed: function ()
  {
    //were vars
    Speeds_of_rects = [];
    number_of_rects = 100;
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
  },
  Current_Score: function(x)
  {
    Game.CurrentScore += x;
    //console.log(Game.CurrentScore);
    return Game.CurrentScore;
  },

  //----------------------------------------------------------------------------------------Above Add_Speed Function/ Below setup Function

  setup: function (hello) 
  {
    this.id = hello;

      Game.player.y = 96;
      Game.player.vx = 0;
      Game.player.vy = 0;

    //Adding all the keys
      let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    
    var Player_Speed = 4;
    
    left.press = () => {
        //Change the rectangle's velocity when the key is pressed
        Game.player.vx = -Player_Speed;
        Game.player.vy = 0;
      };
      
      //Left arrow key `release` method
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the rectangle isn't moving vertically:
        //Stop the rectangle
        if (!right.isDown && Game.player.vy === 0) {
          Game.player.vx = 0;
        }
      };
    
      //Up
      up.press = () => {
        Game.player.vy = -Player_Speed;
        Game.player.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && Game.player.vx === 0) {
          Game.player.vy = 0;
        }
      };
    
      //Right
      right.press = () => {
        Game.player.vx = Player_Speed;
        Game.player.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && Game.player.vy === 0) {
          Game.player.vx = 0;
        }
      };
    
      //Down
      down.press = () => {
        Game.player.vy = Player_Speed;
        Game.player.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && Game.player.vx === 0) {
          Game.player.vy = 0;
        }
      };


      //state(delta);
      //Game.play(delta);
    //Above adding all the keys
    
    //Start the game loop by adding the `gameLoop` function to
    //Pixi's `ticker` and providing it with a `delta` argument.
    Game.app.ticker.add(delta => Game.update(delta));
  },
   
  //----------------------------------------------------------------------------------------Above setup Function/ Below update Function
  update: function(delta)
  {

    Game.GameTime += delta;
    Game.end();

    Game.ScoreMessage.text = "High Score: " + Game.HighScore  +"\nScore: " + Game.CurrentScore;

    //player1.score--;
    //player1.update(delta);
    //gameLoop.time += delta;
    //console.log(Game.GameTime);
    if(Game.GameTime>0 && Game.GameTime<200)
    {
      Game.GameMessage.text = "Are You Ready To Lose?";
      Game.GameMessage.position.set((Game.AppWidth/2 -(Game.GameMessage.width/2)),0);
    }

    // if (Game.GameTime>200 && Game.GameTime<205)
    // {
          
    //   Game.GameMessage.text = "";
              
      
    //   //message.position.set((AppWidth/2 -(message.width/2)),(AppHeight/2 -(message.height/2 - message.height/2)));
    //   //console.log(Game.GameTime);
    // }

    if(Game.GameTime>210 && Game.GameTime < 250)
    {

      for (i = 0; i<10; i++)
      {
        Game.app.stage.addChild(Game.GameObjects[i]);
        // app.stage.addChild(Rects[0]);
      }  
      for (i = 10; i<30; i++)
      {
        Game.app.stage.addChild(Game.GameObjects[i]);
        // app.stage.addChild(Rects[0]);
      }
      for (i = 30; i<50; i++)
      {
        Game.app.stage.addChild(Game.GameObjects[i]);
        // app.stage.addChild(Rects[0]);
      }
      for (i = 50; i<80; i++)
      {
        Game.app.stage.addChild(Game.GameObjects[i]);
        // app.stage.addChild(Rects[0]);
      }
      for (i = 80; i<90; i++)
      {
        Game.app.stage.addChild(Game.GameObjects[i]);
        // app.stage.addChild(Rects[0]);
      }
      for (i = 90; i<100; i++)
      {
        Game.app.stage.addChild(Game.GameObjects[i]);
        // app.stage.addChild(Rects[0]);
      }
    }
    

    for(i = 0; i<Game.GameObjects.length;i++)
    {
      let cur_obj = Game.GameObjects[i];
      
      if (!cur_obj.isDestroyed && CollisionDetect.hitRectangle(Game.player,cur_obj))
      {
        cur_obj.isDestroyed = true;
        if(cur_obj.isEnemy){
           console.log("We have a hit") ;
          //  Game.app.stage.removeChild(Game.player);
           Game.app.stage.removeChild(cur_obj);
           Game.Current_Score(-5);
        }
        else {
          Game.app.stage.removeChild(cur_obj);
          Game.Current_Score(10);
          //score
        }
      }  
    }
    
    Game.play(delta);
  

    
    //Game.update(delta);
  },
  
  //Checks if the currentscore has surpassed the previous highscore.
  HighScoreCalc: function(current)
  {
    Prev_HS = Game.Cur_HS;
    if (current>Game.Cur_HS)
    {
      Game.Cur_HS = current;
    }
    return Game.Cur_HS;
  },


  play: function (delta) 
  {
    //Renderer.update(delta);


    if(Game.player.x >= 0 && (Game.player.x + Game.player.vx) >= 0){
      Game.player.x += Game.player.vx * delta;
    }
    else 
    {
      Game.player.x = 0;
    }
    Game.player.y += Game.player.vy * delta;
      //rectangle.vx = 1;
      //rectangle.vy = 1;
      //Move the rectangle 1 pixel 
      //0-10
      if (Game.GameTime>300 && Game.GameTime<1300)
      {
        for(i=0;i<5;i++)
        {
          Game.GameObjects[i].update(delta);
        }
        //5-10
        if (Game.GameTime>800)
        {
          for(i=5;i<10;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }

      }
  
      //10-30
      if (Game.GameTime>1600 && Game.GameTime<3000)
      {
        //10-15
        for (i = 10; i<15; i++)
        {
          Game.GameObjects[i].update(delta);
        }
        //15-20
        if (Game.GameTime>1800)
        {
          for(i=15;i<20;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //20-25
        if (Game.GameTime>2000)
        {
          for(i=20;i<25;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //25-30
        if (Game.GameTime>2500)
        {
          for(i=25;i<30;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
      }
  
      //30-50
      if (Game.GameTime>3000 && Game.GameTime<4000)
      {
        //30-35
        for (i = 30; i<35; i++)
        {
          Game.GameObjects[i].update(delta);
        }
        //35-40
        if (Game.GameTime>3200)
        {
          for(i=35;i<40;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //40-45
        if (Game.GameTime>3300)
        {
          for(i=40;i<45;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //45-50
        if (Game.GameTime>3700)
        {
          for(i=45;i<50;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
      }
  
      //50-80
      if (Game.GameTime>4000 && Game.GameTime<5200)
      {
        //50-55
        for (i = 50; i<55; i++)
        {
          Game.GameObjects[i].update(delta);
        }
        //55-60
        if (Game.GameTime>4200)
        {
          for(i=55;i<60;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //60-65
        if (Game.GameTime>4400)
        {
          for(i=60;i<65;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //65-70
        if (Game.GameTime>4700)
        {
          for(i=65;i<70;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //70-75
        if (Game.GameTime>4750)
        {
          for(i=70;i<75;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
        //75-80
        if (Game.GameTime>4950)
        {
          for(i=75;i<80;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
      }
  
      //80-90
      if (Game.GameTime>5300 && Game.GameTime<5600)
      {
        //80-85
        for (i = 80; i<85; i++)
        {
          Game.GameObjects[i].update(delta);
        }
        //85-90
        if (Game.GameTime>5500)
        {
          for(i=85;i<90;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
      }
  
      //90-100
      if (Game.GameTime>5700 && Game.GameTime<6200)
      {
        //90-95
  
        for (i = 90; i<95; i++)
        {
          Game.GameObjects[i].update(delta);
        }
        //95-100
        if (Game.GameTime>6000)
        {
          for(i=95;i<100;i++)
          {
            Game.GameObjects[i].update(delta);
          }
        }
      }
  },
  
  end: function()
  {
    if(Game.CurrentScore<0)
    {
      Game.app.stage.removeChild(Game.player);
      for (i=0;i<Game.GameObjects.length;i++)
      {
        Game.app.stage.removeChild(Game.GameObjects[i]);
        
      }
      Game.GameMessage.text = "HAHAHA You Lost!";
      Game.GameMessage.position.set((this.AppWidth/3 -(Game.GameMessage.width/2)),0);
    }
  
  }
};

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

Game.start();

var setupObj = new Game.setup('hello world');

//---------------------------------------------------------------------------------------------------------------------------------------
// Above this point The real game object exists------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------