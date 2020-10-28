import { CurrentSub } from './CurrentSub.js'
import { NextSubClasses } from './NextSubClasses.js'
import { CountDown } from './CountDown.js';
import { AccesoriessOfPlan } from './AccesoriessOfPlan.js'
import { Gaudge } from './Gaudge.js'


class Render {
    constructor(){
       this.instanceOfCur = new CurrentSub();
       this.instanceOfNex = new NextSubClasses();
       this.instanceOfCou = new CountDown();
       this.instanceOfAccesories = new AccesoriessOfPlan();
       

       
    }
    renderBar(){
        if(this.instanceOfCur.whichSubjectIsNow() === 'Brak zajęć'){
            return
        }else{
         new Gaudge();
        }
    }
}

window.onload = function () {
    const render = new Render();
    render.instanceOfCur.renderCur();
    render.instanceOfNex.renderNext();
    render.instanceOfCou.countTimeDown();
    render.renderBar();

}