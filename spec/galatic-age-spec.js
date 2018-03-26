import { Age } from './../src/galatic-age.js';

describe('Age', function(){
  let newAge;

  beforeEach(function(){
    newAge = new Age('1985-07-17')
  });

  it('creates a new age with a birthdate', function(){
    expect(newAge.birthdate) .toEqual('1985-07-17')
  });

  it('calculates age based on birthdate and current date', function(){
    expect(newAge.ageOnEarth()) .toEqual(32)
  });

  it('converts age in Earth years to Mercury years', function(){
    expect(newAge.ageOnMercury()) .toEqual(133)
  });

  it('converts age in Earth years to Venus years', function(){
    expect(newAge.ageOnVenus()) .toEqual(51)
  });

  it('converts age in Earth years to Mars years', function(){
    expect(newAge.ageOnMars()) .toEqual(17)
  });

  it('converts age in Earth years to Jupiter years', function(){
    expect(newAge.ageOnJupiter()) .toEqual(2)
  });
});
