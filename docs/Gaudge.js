import { CurrentSub } from './CurrentSub.js'

export class Gaudge{
    constructor(){
        this.clear = setInterval(this.convertData.bind(this), 1000);

        this.day = new Date().getDate();
        this.month = new Date().getMonth()+1;
        this.year = new Date().getFullYear();
        this.instanceOfCurrentSub = new CurrentSub();

        
        this.startTime = new Date(`${this.year}-${this.month < 10 ? `0${this.month}`: this.month}-${this.day} ${this.instanceOfCurrentSub.Table[this.instanceOfCurrentSub.whichSubjectIsNow()].startTime}`).getTime();
        this.finishTime= new Date(`${this.year}-${this.month < 10 ? `0${this.month}`: this.month}-${this.day} ${this.instanceOfCurrentSub.Table[this.instanceOfCurrentSub.whichSubjectIsNow()].finishTime}`).getTime();
        
        
        this.betweenMinutes = (this.finishTime - this.startTime) / (1000*60);

        
        
    }
    convertData(){
        
            const nowTime = new Date().getTime();
          
            const percetnOne=((this.finishTime-this.startTime)/(1000*60))/100;
            
            const differetMinute =  (this.finishTime - nowTime)/ (1000*60);
        
            const semi= (this.betweenMinutes - differetMinute);

            let resultPercent = ((semi * 100) / this.betweenMinutes).toFixed(1);
            console.log(`${resultPercent}% ukończenia zajęć`);

            if(resultPercent >= 100){
                resultPercent= 0;
                location.reload();
            }
            document.querySelector('.fill-bar').style.width = `${resultPercent}%`;
            document.querySelector('.value').textContent = `${resultPercent}%`;
    }
}