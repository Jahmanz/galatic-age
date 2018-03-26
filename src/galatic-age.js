export class Age {
  constructor(birthdate, gender) {
    this.birthdate = birthdate;
    this.gender = gender;
    }


  ageOnEarth() {
    const birthdate = new Date(this.birthdate);
    let today = new Date();
    let calcAge = today - birthdate;
    let ageInYears = Math.floor(calcAge/(365.25 * 24 * 60 * 60 * 1000 ));
    return ageInYears;
  }



  seconds(){
    let ageInSecs = parseInt(this.ageOnEarth() * 365 * 24 * 60 * 60);
    return ageInSecs;
  }


  ageOnMercury() {
    let mercuryAge = parseInt(this.ageOnEarth()/0.24); =
    return mercuryAge;
  }

  ageOnVenus() {
    let venusAge = parseInt(this.ageOnEarth()/0.62);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = parseInt(this.ageOnEarth()/1.88);
    return marsAge;
  }

  ageOnJupiter() {
    let jupiterAge = parseInt(this.ageOnEarth()/11.86);
    return jupiterAge;
  }

    }
