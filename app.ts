console.log("I am running");

export class Game {
    protected a: string = '';
    b: number = 0;

    constructor() {
        console.log("I am running again");
    }
    run(num:number)
    {
        console.log(num);
    }


}

var foo = new Game();
foo.run(8);

//number string boolean