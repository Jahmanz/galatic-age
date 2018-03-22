import { Age } from '../src/galatic-age.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#date').submit(function(event){
    event.preventDefault();
    $('#dateShow').text();

    let birthdate = $('#birthdate').val();


    $('#birthdateShow').text(birthdate);
    let userDate = new Date(birthdate);

    let userDateEarth = userDate.earth();
    $('#ageEarth').text(userDateEarth);
    let userDateMercury = userDate.mercury();
    $('#ageMercury').text(userDateMercury);
    let userDateVenus = userDate.venus();
    $('#ageVenus').text(userDateVenus);
    let userDateMars = userDate.mars();
    $('#ageMars').text(userDateMars);
    let userDateJupiter = userDate.jupiter();
    $('#ageJupiter').text(userDateJupiter);

  });
});
