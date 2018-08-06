import { IGameObj } from "./ui/base.ui";


export class Game {
    
    protected a: string = '';
    b: number = 0;
    static AppWidth: number;
    static AppHeight: number;
    constructor() {
        console.log("I again");
    }
    run(num:number)
    {
        console.log(num);
    }

}
