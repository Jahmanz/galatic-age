import { Age } from './galatic-age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function () {
    $("#galaticage").submit(function (event) {
    event.preventDefault();
    let birthdate = $('#birthdate').val();
    let gender = $('#gender').val();

    $(".results").show('.solarage');

    let newUser = new Age(birthdate, gender);

    let mercury = newUser.ageOnMercury();
    $('#ageMercury').text(mercury);


    let venus = newUser.ageOnVenus();
    $('#ageVenus').text(venus);


    let mars = newUser.ageOnMars();
    $('#ageMars').text(mars);


    let jupiter = newUser.ageOnJupiter();
    $('#ageJupiter').text(jupiter);

    let mercuryExpectancy = newUser.lifeExpectancyOnMercury();
    $('#mercurylife').text(mercuryExpectancy);

    let venusExpectancy = newUser.lifeExpectancyOnVenus();
    $('#venuslife').text(venusExpectancy);

    let marsExpectancy = newUser.lifeExpectancyOnMars();
    $('#marslife').text(marsExpectancy);

    let jupiterExpectancy = newUser.lifeExpectancyOnJupiter();
    $('#jupiterlife').text(jupiterExpectancy );
    });
});
