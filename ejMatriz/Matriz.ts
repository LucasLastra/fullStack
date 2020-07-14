import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';
class Matriz{
    private temp:number;
    private matriz1:any  = [];
    create(): void {
        for(let i:number = 0; i<10;i++){
            this.matriz1[i]=[]
            
            for(let j:number = 0; j<5;j++){
                this.temp = Math.floor(Math.random()* 50);
                this.matriz1[i][j] = this.temp;
            }
        }
        console.log(this.matriz1);
    }
    get(x:number,y:number){
        console.log(matriz1);
        console.log(matriz1[x][y]);
    }
}

let matriz1 = new Matriz();

matriz1.create();
matriz1.get(1,1);
