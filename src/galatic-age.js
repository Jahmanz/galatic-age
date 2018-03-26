export class Age {
  constructor(birthdate, gender) {
    this.birthdate = birthdate;
    this.gender = gender;

    const idealAge = 80;

    if(gender === "Female"){
      this.lifeExpectancy = idealAge * .90;

    } else if (gender === "Male"){
      this.lifeExpectancy = idealAge * .95 * .90;

    }  else {
      this.lifeExpectancy = idealAge;
    }
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
    let mercuryAge = parseInt(this.ageOnEarth()/0.24);
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

  lifeExpectancyOnMercury() {
    let mercuryLifeExpectancy = Math.floor(this.lifeExpectancy/0.24);
    return mercuryLifeExpectancy;
  }

  lifeExpectancyOnVenus() {
    let venusLifeExpectancy = Math.floor(this.lifeExpectancy/0.62);
    return venusLifeExpectancy;
  }

  lifeExpectancyOnMars() {
    let marsLifeExpectancy = Math.floor(this.lifeExpectancy/1.88);
    return marsLifeExpectancy;
  }

  lifeExpectancyOnJupiter() {
    let jupiterLifeExpectancy = Math.floor(this.lifeExpectancy/11.86);
    return jupiterLifeExpectancy;
  }
}
