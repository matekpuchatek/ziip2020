import {AccesoriessOfPlan} from './AccesoriessOfPlan.js'

export class CurrentSub {
  constructor() {
  this.instanceOdAcc = new AccesoriessOfPlan();
   
    this.Table = [
      {
        //0
        name: "Język obcy - ćw",
        day: 1,
        typeOfWeekP: true,
        typeOfWeekN: true,
        startTime: '08:00:00',
        finishTime:'09:30:00',
        link: 'https://zoom.us/j/2753511161',
        password: '-',
        teacher:'mgr Barbara Dimitruk'
      },
      {//1
        name: "Inżynieria bezpieczeństwa technicznego, wyk",
        day: 1,
        typeOfWeekP: true,
        typeOfWeekN: true,
        startTime: '09:45:00',
        finishTime:'11:15:00',
        link: 'https://zoom.us/j/91968776578?pwd=YXFJb3g5VWdGS2Vwa1ZyZytuUVhRZz09',
        password: '867655',
        teacher:'dr inż. Jolanta Ignac-Nowicka'
      },
      {//2
        name: "Inżynieria bezpieczeństwa technicznego, proj",
        day: 1,
        typeOfWeekP: true,
        typeOfWeekN: true,
        startTime: '11:45:00',
        finishTime:'13:15:00',
        link: 'https://zoom.us/j/91968776578?pwd=YXFJb3g5VWdGS2Vwa1ZyZytuUVhRZz09',
        password: '867655',
        teacher:'dr inż. Jolanta Ignac-Nowicka',
        
      },
      {//3
        name: "Metody nadzorowania maszyn i procesów produkcyjnych, wyk",
        day: 3,
        typeOfWeekP: true,
        typeOfWeekN: true,
        startTime: '08:00:00',
        finishTime:'09:30:00',
        link: '655-019-4227',
        password: '199917',
        teacher:'dr inż. Arkadiusz Boczkowski'
      },
      {//4
        name: "Metody nadzorowania maszyn i procesów produkcyjnych, proj",
        day: 3,
        typeOfWeekP: false,
        typeOfWeekN: true,
        startTime: '09:45:00',
        finishTime:'11:15:00',
        link: '655-019-4227',
        password: '199917',
        teacher:'dr inż. Arkadiusz Boczkowski'
      },
      {//5
        name: "Metody nadzorowania maszyn i procesów produkcyjnych, lab",
        day: 3,
        typeOfWeekP: false,
        typeOfWeekN: true,
        startTime: '11:45:00',
        finishTime:'13:15:00',
        link: '655-019-4227',
        password: '199917',
        teacher:'dr inż. Arkadiusz Boczkowski'
      },
      {//6
        name: "Analiza systemowa w inżynierii produkcji, wyk",
        day: 3,
        typeOfWeekP: true,
        typeOfWeekN: false,
        startTime: '09:45:00',
        finishTime:'11:15:00',
        link: 'https://zoom.us/j/8600907072...',
        password: '2020-2021',
        teacher:'dr inż. Adam Ryszko'
      },
      {//7
        name: "Analiza systemowa w inżynierii produkcji, lab",
        day: 3,
        typeOfWeekP: true,
        typeOfWeekN: false,
        startTime: '11:45:00',
        finishTime:'13:15:00',
        link: 'https://zoom.us/j/8600907072...',
        password: '2020-2021',
        teacher:'dr inż. Adam Ryszko'
      },
      {//8
        name: "Seminarium dyplomowe, sem",
        day: 3,
        typeOfWeekP: true,
        typeOfWeekN: true,
        startTime: '13:30:00',
        finishTime:'15:00:00',
        link: 'https://zoom.us/j/3806476882',
        password: '-',
        teacher:'dr hab. inż., prof. PŚ Patrycja Hąbek'
      },
      {//9
        name: "Organizacja i przetwarzanie zbiorów danych eksploatacyjnych, wyk",
        day: 4,
        typeOfWeekP: true,
        typeOfWeekN: true,
        startTime: '08:00:00',
        finishTime:'09:30:00',
        link: 'https://zoom.us/j/99104828311?pwd=dXk4VXdwMC9tVHNQWXdjNVA0WUJuZz09',
        password: 'kolumna',
        teacher:'dr hab.inż. Ryszard Wyczółkowski'
      },
      {//10
        name: "Organizacja i przetwarzanie zbiorów danych eksploatacyjnych, lab",
        day: 4,
        typeOfWeekP: false,
        typeOfWeekN: true,
        startTime: '09:45:00',
        finishTime:'11:15:00',
        link: 'https://zoom.us/j/99104828311?pwd=dXk4VXdwMC9tVHNQWXdjNVA0WUJuZz09',
        password: 'kolumna',
        teacher:'dr hab.inż. Ryszard Wyczółkowski'
      },
      {//11
        name: "Organizacja i przetwarzanie zbiorów danych eksploatacyjnych, proj",
        day: 4,
        typeOfWeekP: false,
        typeOfWeekN: true,
        startTime: '11:45:00',
        finishTime:'13:15:00',
        link: 'https://zoom.us/j/99104828311?pwd=dXk4VXdwMC9tVHNQWXdjNVA0WUJuZz09',
        password: 'kolumna',
        teacher:'dr hab.inż. Ryszard Wyczółkowski'
      },
      {//12
        name: "Zarządzanie ekspolatacją i utrzymaniem ruchu systemów technicznych, wyk",
        day: 5,
        typeOfWeekP: true,
        typeOfWeekN: false,
        startTime: '08:00:00',
        finishTime:'11:00:00',
        link: '-',
        password: '-',
        teacher:'dr hab. inż., prof. PŚ Andrzej Loska'
      },
      {//13
        name: "Zarządzanie ekspolatacją i utrzymaniem ruchu systemów technicznych, proj",
        day: 5,
        typeOfWeekP: true,
        typeOfWeekN: false,
        startTime: '11:15:00',
        finishTime:'12:45:00',
        link: '-',
        password: '-',
        teacher:'dr hab. inż., prof. PŚ Andrzej Loska'
      },
      {//14
        name: "Oddziaływanie przemysłu na środowisko, wyk",
        day: 5,
        typeOfWeekP: false,
        typeOfWeekN: true,
        startTime: '09:45:00',
        finishTime:'11:15:00',
        link: 'https://zoom.us/j/6469289990',
        password: '-',
        teacher:'dr inż. Agnieszka Janik'
      },
      {//15
        name: "Oddziaływanie przemysłu na środowisko, proj",
        day: 5,
        typeOfWeekP: false,
        typeOfWeekN: true,
        startTime: '11:45:00',
        finishTime:'14:45:00',
        link: 'https://zoom.us/j/6469289990',
        password: '-',
        teacher:'dr inż. Agnieszka Janik'
      },
    
       
      
     
    ]
  }
  whichSubjectIsNow(){
    if(this.instanceOdAcc.typeOfWeek() === 'P'){
      const index = this.Table.findIndex(el=> el.typeOfWeekP === true && el.day === this.instanceOdAcc.RefreshFullDay() && el.startTime<= this.instanceOdAcc.RefreshFullTime() && el.finishTime>=this.instanceOdAcc.RefreshFullTime());
      if (index === -1){
        return "Brak zajęć";
      }else{
        return index
      } 
    }else if (this.instanceOdAcc.typeOfWeek() === 'N'){
        const index = this.Table.findIndex(el=> el.typeOfWeekN === true && el.day === this.instanceOdAcc.RefreshFullDay() && el.startTime<= this.instanceOdAcc.RefreshFullTime() && el.finishTime>=this.instanceOdAcc.RefreshFullTime());
        if (index === -1){
          return "Brak zajęć";
        }else{
          return index
        }
    
    }

  }

  
  renderCur(){
    if(this.whichSubjectIsNow() > -1){
    document.querySelector('.currentSubject').textContent =  this.Table[this.whichSubjectIsNow()].name;
    document.querySelector('.currentTeacher').textContent = this.Table[this.whichSubjectIsNow()].teacher;
    document.querySelector('.startHour').textContent = this.Table[this.whichSubjectIsNow()].startTime;
    // document.querySelector('.procentGraph').textContent = '--';
    document.querySelector('.finishHour').textContent = this.Table[this.whichSubjectIsNow()].finishTime;
    document.querySelector('.currentLink').textContent = this.Table[this.whichSubjectIsNow()].link;
    document.querySelector('.currentPassword').textContent = this.Table[this.whichSubjectIsNow()].password;

  }else{
    document.querySelector('.currentSubject').textContent = `Brak`;
    document.querySelector('.currentTeacher').textContent = `Brak`;
    document.querySelector('.startHour').textContent = `Brak`;
    document.querySelector('.finishHour').textContent = 'Brak';
    document.querySelector('.currentLink').textContent = 'Brak';
    document.querySelector('.currentPassword').textContent = 'Brak';
  }
   
  }
}








