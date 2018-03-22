export class Age {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  earth() {
    let birthday = this.birthdate;
    let year = birthdate.slice(0,4);
    let month = birthdate.slice(5,7);
    let day = birthdate.slice(8,10);
    let date = month + '/' + day + '/' + year + ' 00:00:00';
    let newDate = new Date(date);
    let milliBirthday = newDate.getTime();
    let milliNow = Date.now();
    let ageInSeconds = (milliNow - milliBirthday)/1000;
    let earth = Math.floor(ageInSeconds/31557600);
    return earth;
  }

  mercury() {
    let mercuryDate = Math.round(this.earth() / 0.24);
    return mercuryDate;
  }

  venus() {
    let venusDate = Math.round(this.earth() / 0.62);
    return venusDate;
  }

  mars() {
    let marsDate = Math.round(this.earth() / 1.88);
    return marsDate;
  }

  jupiter() {
    let marsDate = Math.round(this.earth() / 11.86);
    return marsDate;
  }
}
