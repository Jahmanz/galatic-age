import { Age } from '../src/galatic-age.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#age').submit(function(event){
    event.preventDefault();
    $('#dateShow').text(moment());

    let birthdate = $('#birthdate').val();

    $('#birthdateShow').text(birthdate);

    let userAge = new Age(birthdate);
    let userAgeEarth = userAge.ageInYears();
    $('#ageEarth').text(userAgeEarth);
    let userAgeMercury = userAge.ageOnMercury();
    $('#ageMercury').text(userAgeMercury);
    let userAgeVenus = userAge.ageOnVenus();
    $('#ageVenus').text(userAgeVenus);
    let userAgeMars = userAge.ageOnMars();
    $('#ageMars').text(userAgeMars);
    let userAgeJupiter = userAge.ageOnJupiter();
    $('#ageJupiter').text(userAgeJupiter);
  });
});
