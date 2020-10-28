import { AccesoriessOfPlan } from "./AccesoriessOfPlan.js";
import { CurrentSub } from "./CurrentSub.js";
 export class NextSubClasses {
  constructor() {
    this.instanceOfAcc = new AccesoriessOfPlan();
    this.instanceOfCur = new CurrentSub();
  }
  whichSubjectWillNext(){
    const today = this.instanceOfAcc.RefreshFullDay();
    const typeOfWeek = this.instanceOfAcc.typeOfWeek();
    const time = this.instanceOfAcc.RefreshFullTime();
    const Table = this.instanceOfCur.Table;
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    
    if(this.instanceOfAcc.typeOfWeek()==='P'){
      if(today === 1 && time< Table[0].startTime){
        
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }else if(today===1 && time>= Table[0].startTime && time< Table[1].startTime){
        
        Table[1].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[1].startTime}`));
        return Table[1]
      }else if(today===1 && time>= Table[1].startTime && time< Table[2].startTime){
        Table[2].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[2].startTime}`));
        return Table[2]
      }else if(today===1 && time>=Table[2].startTime){
        Table[3].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+2} ${this.instanceOfCur.Table[3].startTime}`));
        return Table[3]
      }else if(today===2){
        Table[3].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[3].startTime}`));
        return Table[3];
      }else if(today===3 && time<Table[3].startTime){
        Table[3].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[3].startTime}`));
        return Table[3]
      }else if(today===3 && time>=Table[3].startTime && time<Table[6].startTime){
        Table[6].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[6].startTime}`));
        return Table[6]
      }else if(today===3 && time>=Table[6].startTime && time<Table[7].startTime){
        Table[7].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[7].startTime}`));
        return Table[7];
      }else if(today===3 && time>=Table[7].startTime && time<Table[8].startTime){
        Table[8].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[8].startTime}`));
        return Table[8];
      }else if(today === 3 && time>=Table[8].startTime){
        Table[9].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[9].startTime}`));
        return Table[9];
      }else if(today===4 && time<Table[9].startTime){
        Table[9].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[9].startTime}`));
        return Table[9]
      }else if(today===4 && time>Table[9].startTime){
        Table[12].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[12].startTime}`));
        return Table[12];
      }else if(today===5 && time<Table[12].startTime){
        Table[12].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[12].startTime}`));
        return Table[12];
      }else if(today===5 && time>=Table[12].startTime && time<Table[13].startTime){
        Table[13].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[13].startTime}`));
        return Table[13];
      }else if(today===5 && time>=Table[13].startTime){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+3} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }else if(today===6){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+2} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }else if(today===0){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }
    }else if(this.instanceOfAcc.typeOfWeek()==='N'){
      if(today === 1 && time< Table[0].startTime){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }else if(today===1 && time>= Table[0].startTime && time< Table[1].startTime){
        Table[1].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[1].startTime}`));
        return Table[1]
      }else if(today===1 && time>= Table[1].startTime && time< Table[2].startTime){
        Table[2].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[2].startTime}`));
        return Table[2]
      }else if(today===1 && time>=Table[2].startTime){
        Table[3].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+2} ${this.instanceOfCur.Table[3].startTime}`));
        return Table[3]
      }else if(today===2){
        Table[3].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[3].startTime}`));
        return Table[3];
      }else if(today===3 && time<Table[3].startTime){
        Table[3].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[3].startTime}`));
        return Table[3]
      }else if(today===3 && time>=Table[3].startTime && time<Table[6].startTime){
        Table[4].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[4].startTime}`));
        return Table[4]
      }else if(today===3 && time>=Table[4].startTime && time<Table[5].startTime){
        Table[5].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[5].startTime}`));
        return Table[5];
      }else if(today===3 && time>=Table[5].startTime && time<Table[8].startTime){
        Table[8].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[8].startTime}`));
        return Table[8];
      }else if(today === 3 && time>=Table[8].startTime){
        Table[9].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[9].startTime}`));
        return Table[9];
      }else if(today===4 && time<Table[9].startTime){
        Table[9].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[9].startTime}`));
        return Table[9]
      }else if(today===4 && time>=Table[9].startTime && time<Table[10].startTime){
        Table[10].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[10].startTime}`));
        return Table[10];
      }else if(today===4 && time>=Table[10].startTime && time<Table[11].startTime){
        Table[11].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[11].startTime}`));
        return Table[11]
      }else if(today===4 && time>Table[11].startTime){
        Table[14].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[14].startTime}`));
        return Table[14]
      }else if(today===5 && time<Table[14].startTime){
        Table[14].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[14].startTime}`));
        return Table[14];
      }else if(today===5 && time>=Table[14].startTime && time<Table[15].startTime){
        Table[15].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day} ${this.instanceOfCur.Table[15].startTime}`));
        return Table[15];
      }else if(today===5 && time>=Table[15].startTime){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+3} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }else if(today===6){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+2} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }else if(today===0){
        Table[0].countDownData= Date.parse(new Date(`${year}-${month < 10 ? `0${month}`: month}-${day+1} ${this.instanceOfCur.Table[0].startTime}`));
        return Table[0]
      }
    }
  }
  renderNext(){
    document.querySelector('.nextSubject').textContent = this.whichSubjectWillNext().name;
    document.querySelector('.nextTeacher').textContent = this.whichSubjectWillNext().teacher;
    document.querySelector('.nextLink').textContent = this.whichSubjectWillNext().link;
    document.querySelector('.nextPassword').textContent = this.whichSubjectWillNext().password;
    document.querySelector('.NextSubjectStTime').textContent = this.whichSubjectWillNext().startTime;
    document.querySelector('.NextSubjectFtTime').textContent = this.whichSubjectWillNext().finishTime;
  }
}

// const start = new NextSubClasses()
// start.whichSubjectWillNext()
// start.showConsole();

