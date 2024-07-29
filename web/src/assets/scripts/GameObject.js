import { start } from "@popperjs/core";

const GAME_OBJECTS =[];
export class GameObject {
    constructor(){
        GAME_OBJECTS.push(this);
        this.timedelta = 0 ;
        this. has_called_start =false;

    }

    start(){ // 只执行一次

    } 
    update(){//每帧执行一次，除第一帧外

    }

    on_destroy(){//删除之前执行

    }
    destroy() {
        this.on_destroy();
        for (let i in GAME_OBJECTS){
            const obj =GAME_OBJECTS[i];
            if(obj === this) {
                GameObject.splice(i);
                break;
            }
        }
    }
}


let last_timestamp;  //上一次执行的时刻
const step = (timestamp) => {
    for(let obj of GAME_OBJECTS){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj,start();
        } else {
            obj.timedelta = timestamp -last_timestamp;
        }
    } 
}