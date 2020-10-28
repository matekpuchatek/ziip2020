import { AccesoriessOfPlan } from "./AccesoriessOfPlan.js";
import { CurrentSub } from "./CurrentSub.js";
import { NextSubClasses } from "./NextSubClasses.js";
    

export class CountDown {
    constructor() {
        this.clear = setInterval(this.countTimeDown.bind(this), 1000);
        this.instanceOfAcc = new AccesoriessOfPlan();
        this.instanceOfCur = new CurrentSub();
        this.instanceOfNex = new NextSubClasses();
        this.start = this.instanceOfNex.whichSubjectWillNext().countDownData;
        // this.nowTime = new Date().getTime();
    
      };
      countTimeDown (){
        //mechanizm czasowy
        let start = this.start
        let nowTime =  new Date().getTime();
       
        
        const resultTime = start - nowTime;
        // console.log(resultTime);
        //sposób wyświetlania
        let days = Math.floor((start/(1000*60*60*24))-(nowTime/(1000*60*60*24)));
        let hours = Math.floor(
          (start / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
        );
        let minutes = Math.floor(
          (start / (1000 * 60) - nowTime / (1000 * 60)) % 60
        );
        let seconds = Math.floor((start / 1000 - nowTime / 1000) % 60);

          
        days = days < 10 ? `0${days} dni`: `${days} dni`;
        hours = hours < 10 ? `0${hours}:` : `${hours}:`;
        minutes = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
        //wyświetlnie
        document.querySelector('.days').innerHTML= days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
  
        //bezpiecznik czasowy
        if (resultTime <= 0) {
          clearInterval(this.clear);
          // console.log("koniec odliczania");
          document.querySelector(".hours").innerHTML = "00";
          document.querySelector(".minutes").innerHTML = "00";
          document.querySelector(".seconds").innerHTML = "00";
          location.reload()
        }
      }


  }
  
//  const start = new CountDown();
//  start.countTimeDown()

 

 
  