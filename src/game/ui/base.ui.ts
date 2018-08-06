import { DisplayObject } from "pixi.js";

export class GameObj{

    x: number;
    y: number;
    vx: number;
    vy: number;
    value: number;
    isDestroyed: boolean;
    pixiObject: DisplayObject;

    constructor(yPos: number, Speed:number){
    
    };
    update(dt)
    {};
}