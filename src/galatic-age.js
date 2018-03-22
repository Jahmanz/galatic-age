export class Age {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  ageInYears() {
    let birthday = this.birthdate;
    let year = birthday.slice(0,4);
    let month = birthday.slice(5,7);
    let day = birthday.slice(8,10);
    let date = month + '/' + day + '/' + year + ' 00:00:00';
    let newDate = new Date(date);
    let milliBirthday = newDate.getTime();
    let milliNow = Date.now();
    let ageInSeconds = (milliNow - milliBirthday)/1000;
    let ageInYears = Math.floor(ageInSeconds/31557600);
    return ageInYears;
  }

  ageOnMercury() {
    let mercuryAge = Math.round(this.ageInYears() / 0.24);
    return mercuryAge;

  }
  ageOnVenus() {
    let venusAge = Math.round(this.ageInYears() / 0.62);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = Math.round(this.ageInYears() / 1.88);
    return marsAge;
  }

  ageOnJupiter() {
    let marsAge = Math.round(this.ageInYears() / 11.86);
    return marsAge;
  }
}
