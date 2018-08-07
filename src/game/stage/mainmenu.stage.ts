import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';
import * as PIXI from 'pixi.js'
import {Game} from '../game'

class Mainmenu implements IBaseStage{

    time: number;
    isSetup: boolean;
    isOver : boolean;
    
    setup()
    {
        let Start = new Keyboard(83);//s
        // up = new Keyboard(38),
        // right = new Keyboard(39),
        // down = new Keyboard(40);
        
        var GameMessage = undefined;
        var GameMessage1 = undefined;
        var StartKeyMsg = undefined;

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
              
        GameMessage = new PIXI.Text("Globie", style);
        GameMessage1 = new PIXI.Text("The Great Traveler", style);
        StartKeyMsg = new PIXI.Text("Press 's' to start the Game",style);

        GameMessage.position.set(Game.AppWidth,40);
        GameMessage1.position.set(Game.AppWidth,90);
        StartKeyMsg.position.set(Game.AppWidth,90);


        Game.app.stage.addChild(GameMessage);
        Game.app.stage.addChild(GameMessage1);
        Game.app.stage.addChild(StartKeyMsg);
        
        this.isSetup = true;

        Start.press = () => {
            this.clearStage();
            this.isOver = true;
        }

    /**I was in the middle of something here*/

    
    }
    update(dt: number){}
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage(){}

    //Game.app.ticker.add(delta => Game.update(delta));


}