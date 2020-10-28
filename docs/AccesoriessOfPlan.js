  export class AccesoriessOfPlan {
  constructor() {
 
    //poniższy konstruktor potrzebny tylko to typeOfWeek
    this.today = new Date()
    this.todayMili = this.today.getTime()
    this.firstDayOfYear = new Date(this.today.getFullYear(), 0, 1);
    this.pastDaysOfYear = Math.floor(
      (this.today - this.firstDayOfYear) / 86400000
    );
    //w getFullYear(), 0 = miesiąc styczeń, 1 = pierwszy dzień stycznia czyli początek roku

    //funkcje odświeżająca dane w formatach:"10.10.2020", "12:38:32", 6 = sobota, 12 -format dotyczy godzin,minut i sekund(jest to typ number)
    this.RefreshFullDate = ()=>{
      this.fullDate = new Date().toLocaleDateString();
      
    }
    setInterval(this.RefreshFullDate,1000);

    this.RefreshFullTime = ()=>{
      const fullTime = new Date().toLocaleTimeString();
      return fullTime;
    }
    setInterval(this.RefreshFullTime,1000);

    this.RefreshFullDay = ()=>{
      const day = new Date().getDay();
      return day
    }
    setInterval(this.RefreshFullDay,1000);

    this.RefreshHours = ()=>{
      const hours = new Date().getHours();
      return hours
    }
    setInterval(this.RefreshHours,1000);

    this.RefreshMinutes = ()=>{
      const minutes = new Date().getMinutes();
      return minutes;
    }
    setInterval(this.RefreshMinutes,1000);

    this.RefreshSeconds = ()=>{
      const seconds = new Date().getSeconds();
      return seconds;
    }
    setInterval(this.RefreshSeconds,1000);
  }

  getWeek() {
    return Math.ceil((this.pastDaysOfYear + this.firstDayOfYear.getDay()) / 7);
  }
  typeOfWeek() {
    if (this.getWeek() % 2 === 0) {
      return "P";
    } else if (this.getWeek() % 2 > 0) {
      return "N";
    }


  }
}
//  const testAcc = new AccesoriessOfPlan()
 