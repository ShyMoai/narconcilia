var data_seconds = 0
var data_minutes = 0
var data_hours = 0
var data_days = 0
var data_weeks = 0
var data_months = 0
var data_years = 0

var time_seconds
var time_minutes
var time_hours
var time_days
var time_weeks
var time_months
var time_years
var time_lives
var time_milleniums
var time_flips
var time_galaxies
var time_universe

function update() {
        data_seconds = Number(document.getElementById("seconds").value);  
        data_minutes = Number(document.getElementById("minutes").value);  
        data_hours = Number(document.getElementById("hours").value);
        data_days = Number(document.getElementById("days").value);
        data_weeks = Number(document.getElementById("weeks").value);
        data_months = Number(document.getElementById("months").value);
        data_years = Number(document.getElementById("years").value);
        convert() 
        document.getElementById("secondsAmount").innerHTML = "You have spent " + time_seconds + " seconds watching the rats which is also :"
        if (time_minutes >= 1) {
                document.getElementById("minutesAmount").innerHTML = round(time_minutes, 2) + " minutes"
        } else {
                document.getElementById("minutesAmount").innerHTML = round(time_minutes * 100, 3) + "% of a minute"
        }
        if (time_hours >= 1) {
                document.getElementById("hoursAmount").innerHTML = round(time_hours, 2) + " hours"
        } else {
                document.getElementById("hoursAmount").innerHTML = round(time_hours * 100, 3) + "% of an hour"
        }
        if (time_days >= 1) {
                document.getElementById("daysAmount").innerHTML = round(time_days, 2) + " days"
        } else if (time_days >= 0.0001) {
                document.getElementById("daysAmount").innerHTML = round(time_days * 100, 3) + "% of a day"
        } else {
                document.getElementById("daysAmount").innerHTML = round(time_days * 1000000, 3) + " millionths of a day"
        }
        if (time_weeks >= 1) {
                document.getElementById("weeksAmount").innerHTML = round(time_weeks, 2) + " weeks"
        } else if (time_weeks >= 0.0001) {
                document.getElementById("weeksAmount").innerHTML = round(time_weeks * 100, 3) + "% of a week"
        } else {
                document.getElementById("weeksAmount").innerHTML = round(time_weeks * 1000000, 3) + " millionths of a week"
        }
        if (time_months >= 1) {
                document.getElementById("monthsAmount").innerHTML = round(time_months, 2) + " months"
        } else if (time_months >= 0.0001) {
                document.getElementById("monthsAmount").innerHTML = round(time_months * 100, 3) + "% of a month"
        } else {
                document.getElementById("monthsAmount").innerHTML = round(time_months * 1000000, 3) + " millionths of a month"
        }
        if (time_years >= 1) {
                document.getElementById("yearsAmount").innerHTML = round(time_years, 2) + " years"
        } else if (time_years >= 0.0001) {
                document.getElementById("yearsAmount").innerHTML = round(time_years * 100, 3) + "% of a year"
        } else if (time_years >= 0.000001) {
                document.getElementById("yearsAmount").innerHTML = round(time_years * 1000000, 3) + " millionths of a year"
        } else {
                document.getElementById("yearsAmount").innerHTML = round(time_years * 1000000000, 3) + " billionths of a year"
        }
        if (time_lives >= 1) {
                document.getElementById("livesAmount").innerHTML = round(time_lives, 2) + " human lifetimes"
        } else if (time_lives >= 0.0001) {
                document.getElementById("livesAmount").innerHTML = round(time_lives * 100, 3) + "% of a human lifetime"
        } else if (time_lives >= 0.000001) {
                document.getElementById("livesAmount").innerHTML = round(time_lives * 1000000, 3) + " millionths of a human lifetime"
        } else {
                document.getElementById("livesAmount").innerHTML = round(time_lives * 1000000000, 3) + " billionths of a human lifetime"
        }
        if (time_milleniums>= 1) {
                document.getElementById("milleniumsAmount").innerHTML = round(time_milleniums, 2) + " milleniums"
        } else if (time_milleniums >= 0.0001) {
                document.getElementById("milleniumsAmount").innerHTML = round(time_milleniums * 100, 3) + "% of a millenium"
        } else if (time_milleniums >= 0.000001) {
                document.getElementById("milleniumsAmount").innerHTML = round(time_milleniums * 1000000, 3) + " billionths of a millenium"
        } else if (time_milleniums >= 0.000000001) {
                document.getElementById("milleniumsAmount").innerHTML = round(time_milleniums * 1000000000, 3) + " billionths of a millenium"
        } else {
                document.getElementById("milleniumsAmount").innerHTML = round(time_milleniums * 1000000000, 6) + " billionths of a millenium"
        }
        if (time_flips >= 1) {
                document.getElementById("flipsAmount").innerHTML = round(time_filps, 2) + " magnetic pole flip"
        } else if (time_flips >= 0.0001) {
                document.getElementById("flipsAmount").innerHTML = round(time_flips * 100, 3) + "% of a magnetic pole flip"
        } else if (time_flips >= 0.000001) {
                document.getElementById("flipsAmount").innerHTML = round(time_flips * 1000000, 3) + " millionths of a magnetic pole flip"
        } else if (time_flips >= 0.000000001) {
                document.getElementById("flipsAmount").innerHTML = round(time_flips * 1000000000, 3) + " billionths of a magnetic pole flip"
        } else if (time_flips >= 0.000000000001) {
                document.getElementById("flipsAmount").innerHTML = round(time_flips * 1000000000, 6) + " billionths of a magnetic pole flip"
        } else {
                document.getElementById("flipsAmount").innerHTML = round(time_flips * 1000000000, 9) + " billionths of a magnetic pole flip"
        }
        if (time_galaxies >= 1) {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies, 2) + " galactic years"
        } else if (time_galaxies >= 0.0001) {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies * 100, 3) + "% of a galactic year"
        } else if (time_galaxies >= 0.000001) {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies * 1000000, 3) + " millionths of a galactic year"
        } else if (time_galaxies >= 0.000000001) {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies * 1000000000, 3) + " billionths of a galactic year"
        } else if (time_galaxies >= 0.000000000001) {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies * 1000000000, 6) + " billionths of a galactic year"
        } else if (time_galaxies >= 0.000000000000001) {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies * 1000000000, 9) + " billionths of a galactic year"
        } else {
                document.getElementById("galaxiesAmount").innerHTML = round(time_galaxies * 1000000000, 12) + " billionths of a galactic year"
        }
                if (time_universes >= 1) {
                document.getElementById("universesAmount").innerHTML = round(time_universes, 2) + " times the age of the universe"
        } else if (time_universes >= 0.0001) {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 100, 3) + "% of the age of the universe"
        } else if (time_universes >= 0.000001) {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 1000000, 3) + " millionths of the age of the universe"
        } else if (time_universes >= 0.000000001) {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 1000000000, 3) + " billionths of the age of the universe"
        } else if (time_universes >= 0.000000000001) {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 1000000000, 6) + " billionths of the age of the universe"
        } else if (time_universes >= 0.000000000000001) {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 1000000000, 9) + " billionths of the age of the universe"
        } else if (time_universes >= 0.000000000000000001) {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 1000000000, 12) + " billionths of the age of the universe"
        } else {
                document.getElementById("universesAmount").innerHTML = round(time_universes * 1000000000, 15) + " billionths of the age of the universe"
        }
}
function convert() {
        time_seconds =  ((((data_years * 365.25) + (data_months * 30.4375) + (data_weeks * 7) + data_days) * 24 + data_hours) * 60 + data_minutes) * 60 + data_seconds
        time_minutes = time_seconds / 60
        time_hours = time_minutes / 60
        time_days = time_hours / 24
        time_weeks = time_days / 7
        time_months = time_days / 30.4375
        time_years = time_months / 12
        time_lives = time_years / 73.1
        time_milleniums = time_years / 1000
        time_flips = time_milleniums / 780
        time_galaxies = time_milleniums / 225000
        time_universes = time_milleniums / 13800000
}
function round(Number, Number2) {
        return Math.round(Number * Math.pow(10, Number2)) / Math.pow(10, Number2)
}