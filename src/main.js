import { Age } from './galatic-age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function () {
    $("#galaticage").submit(function (event) {
    event.preventDefault();
    let birthdate = $('#birthdate').val();


    $(".dateShow").show('.birthdateShow');

    let newUser = new Age(birthdate, gender);

    let mercury = newUser.ageOnMercury();
    $('#ageMercury').text(mercury);


    let venus = newUser.ageOnVenus();
    $('#ageVenus').text(venus);


    let mars = newUser.ageOnMars();
    $('#ageMars').text(mars);


    let jupiter = newUser.ageOnJupiter();
    $('#ageJupiter').text(jupiter);


    });
});
