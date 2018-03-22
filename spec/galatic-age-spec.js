import { Age } from '../src/galatic-age.js';

 newAge = new Age('1985-07-17')

  it('new age with birthdate', function(){
    expect(newAge.birthdate) .toEqual('1985-07-17')
  });

  it('calculates age based on earth', function(){
    expect(newAge.ageInYears()) .toEqual(32)
  });

  it('calculates age on Mercury', function(){
    expect(newAge.ageOnMercury()) .toEqual(133)
  });

  it('calculates age on Venus', function(){
    expect(newAge.ageOnVenus()) .toEqual(52)
  });

  it('calculates age on Mars', function(){
    expect(newAge.ageOnMars()) .toEqual(17)
  });

  it('calculates age on Jupiter', function(){
    expect(newAge.ageOnJupiter()) .toEqual(3)
  });
