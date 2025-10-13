var data = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        years: 0
}
var time = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        years: 0,
        lives: 0,
        milleniums: 0,
        flips: 0,
        galaxies: 0,
        universes: 0
}
const discordName = {
        0: "Nothing",
        1: "New Spinning Rat",
        2: "Spinning Rat Newbie",
        3: "Spinning Rat Apprentice",
        4: "Spinning Rat Simp",
        5: "Spinning Rat Fan",
        6: "Spinning Rat Enthusiast",
        7: "Spinning Rat Elite",
        8: "Spinning Rat Pro",
        9: "Spinning Rat Veteran",
        10: "Spinning Rat Grandmaster",
        11: "Spinning Rat Legend",
        12: "Spinning Rat Immortal"
}
var discordNumber
var extendedNumber
const formatter = new Intl.NumberFormat('en', {
    notation: "standard"
});

function update() {
        collectData()
        convert() 
        showUnits()
        chooseClassDiscord()
        showClassDiscord()
        chooseClassExtended()
}
function collectData() {
        data.seconds = Number(document.getElementById("seconds").value);  
        data.minutes = Number(document.getElementById("minutes").value);  
        data.hours = Number(document.getElementById("hours").value);
        data.days = Number(document.getElementById("days").value);
        data.weeks = Number(document.getElementById("weeks").value);
        data.months = Number(document.getElementById("months").value);
        data.years = Number(document.getElementById("years").value);
}
function convert() {
        time.seconds =  ((((data.years * 365.25) + (data.months * 30.4375) + (data.weeks * 7) + data.days) * 24 + data.hours) * 60 + data.minutes) * 60 + data.seconds
        time.minutes = time.seconds / 60
        time.hours = time.minutes / 60
        time.days = time.hours / 24
        time.weeks = time.days / 7
        time.months = time.days / 30.4375
        time.years = time.months / 12
        time.lives = time.years / 73.1
        time.milleniums = time.years / 1000
        time.flips = time.milleniums / 780
        time.galaxies = time.milleniums / 225000
        time.universes = time.milleniums / 13800000
}
function showUnits() {
        document.getElementById("secondsAmount").innerHTML = "You have spent " + formatter.format(time.seconds) + " seconds watching the rats which is also :"
        if (time.minutes >= 1) {
                document.getElementById("minutesAmount").innerHTML = formatter.format(round(time.minutes, 2)) + " minutes"
        } else {
                document.getElementById("minutesAmount").innerHTML = formatter.format(round(time.minutes * 100, 3)) + "% of a minute"
        }
        if (time.hours >= 1) {
                document.getElementById("hoursAmount").innerHTML = formatter.format(round(time.hours, 2)) + " hours"
        } else {
                document.getElementById("hoursAmount").innerHTML = formatter.format(round(time.hours * 100, 3)) + "% of an hour"
        }
        if (time.days >= 1) {
                document.getElementById("daysAmount").innerHTML = formatter.format(round(time.days, 2)) + " days"
        } else if (time.days >= 0.0001) {
                document.getElementById("daysAmount").innerHTML = formatter.format(round(time.days * 100, 3)) + "% of a day"
        } else {
                document.getElementById("daysAmount").innerHTML = formatter.format(round(time.days * 1000000, 3)) + " millionths of a day"
        }
        if (time.weeks >= 1) {
                document.getElementById("weeksAmount").innerHTML = formatter.format(round(time.weeks, 2)) + " weeks"
        } else if (time.weeks >= 0.0001) {
                document.getElementById("weeksAmount").innerHTML = formatter.format(round(time.weeks * 100, 3)) + "% of a week"
        } else {
                document.getElementById("weeksAmount").innerHTML = formatter.format(round(time.weeks * 1000000, 3)) + " millionths of a week"
        }
        if (time.months >= 1) {
                document.getElementById("monthsAmount").innerHTML = formatter.format(round(time.months, 2)) + " months"
        } else if (time.months >= 0.0001) {
                document.getElementById("monthsAmount").innerHTML = formatter.format(round(time.months * 100, 3)) + "% of a month"
        } else {
                document.getElementById("monthsAmount").innerHTML = formatter.format(round(time.months * 1000000, 3)) + " millionths of a month"
        }
        if (time.years >= 1) {
                document.getElementById("yearsAmount").innerHTML = formatter.format(round(time.years, 2)) + " years"
        } else if (time.years >= 0.0001) {
                document.getElementById("yearsAmount").innerHTML = formatter.format(round(time.years * 100, 3)) + "% of a year"
        } else if (time.years >= 0.000001) {
                document.getElementById("yearsAmount").innerHTML = formatter.format(round(time.years * 1000000, 3)) + " millionths of a year"
        } else {
                document.getElementById("yearsAmount").innerHTML = formatter.format(round(time.years * 1000000000, 3)) + " billionths of a year"
        }
        if (time.lives >= 1) {
                document.getElementById("livesAmount").innerHTML = formatter.format(round(time.lives, 2)) + " human lifetimes"
        } else if (time.lives >= 0.0001) {
                document.getElementById("livesAmount").innerHTML = formatter.format(round(time.lives * 100, 3)) + "% of a human lifetime"
        } else if (time.lives >= 0.000001) {
                document.getElementById("livesAmount").innerHTML = formatter.format(round(time.lives * 1000000, 3)) + " millionths of a human lifetime"
        } else {
                document.getElementById("livesAmount").innerHTML = formatter.format(round(time.lives * 1000000000, 3)) + " billionths of a human lifetime"
        }
        if (time.milleniums>= 1) {
                document.getElementById("milleniumsAmount").innerHTML = formatter.format(round(time.milleniums, 2)) + " milleniums"
        } else if (time.milleniums >= 0.0001) {
                document.getElementById("milleniumsAmount").innerHTML = formatter.format(round(time.milleniums * 100, 3)) + "% of a millenium"
        } else if (time.milleniums >= 0.000001) {
                document.getElementById("milleniumsAmount").innerHTML = formatter.format(round(time.milleniums * 1000000, 3)) + " billionths of a millenium"
        } else if (time.milleniums >= 0.000000001) {
                document.getElementById("milleniumsAmount").innerHTML = formatter.format(round(time.milleniums * 1000000000, 3)) + " billionths of a millenium"
        } else {
                document.getElementById("milleniumsAmount").innerHTML = formatter.format(round(time.milleniums * 1000000000, 6)) + " billionths of a millenium"
        }
        if (time.flips >= 1) {
                document.getElementById("flipsAmount").innerHTML = formatter.format(round(time.flips, 2)) + " magnetic pole flip"
        } else if (time.flips >= 0.0001) {
                document.getElementById("flipsAmount").innerHTML = formatter.format(round(time.flips * 100, 3)) + "% of a magnetic pole flip"
        } else if (time.flips >= 0.000001) {
                document.getElementById("flipsAmount").innerHTML = formatter.format(round(time.flips * 1000000, 3)) + " millionths of a magnetic pole flip"
        } else if (time.flips >= 0.000000001) {
                document.getElementById("flipsAmount").innerHTML = formatter.format(round(time.flips * 1000000000, 3)) + " billionths of a magnetic pole flip"
        } else if (time.flips >= 0.000000000001) {
                document.getElementById("flipsAmount").innerHTML = formatter.format(round(time.flips * 1000000000, 6)) + " billionths of a magnetic pole flip"
        } else {
                document.getElementById("flipsAmount").innerHTML = formatter.format(round(time.flips * 1000000000, 9)) + " billionths of a magnetic pole flip"
        }
        if (time.galaxies >= 1) {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies, 2)) + " galactic years"
        } else if (time.galaxies >= 0.0001) {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies * 100, 3)) + "% of a galactic year"
        } else if (time.galaxies >= 0.000001) {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies * 1000000, 3)) + " millionths of a galactic year"
        } else if (time.galaxies >= 0.000000001) {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies * 1000000000, 3)) + " billionths of a galactic year"
        } else if (time.galaxies >= 0.000000000001) {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies * 1000000000, 6)) + " billionths of a galactic year"
        } else if (time.galaxies >= 0.000000000000001) {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies * 1000000000, 9)) + " billionths of a galactic year"
        } else {
                document.getElementById("galaxiesAmount").innerHTML = formatter.format(round(time.galaxies * 1000000000, 12)) + " billionths of a galactic year"
        }
                if (time.universes >= 1) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes, 2)) + " times the age of the universe"
        } else if (time.universes >= 0.0001) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 100, 3)) + "% of the age of the universe"
        } else if (time.universes >= 0.000001) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 1000000, 3)) + " millionths of the age of the universe"
        } else if (time.universes >= 0.000000001) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 1000000000, 3)) + " billionths of the age of the universe"
        } else if (time.universes >= 0.000000000001) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 1000000000, 6)) + " billionths of the age of the universe"
        } else if (time.universes >= 0.000000000000001) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 1000000000, 9)) + " billionths of the age of the universe"
        } else if (time.universes >= 0.000000000000000001) {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 1000000000, 12)) + " billionths of the age of the universe"
        } else {
                document.getElementById("universesAmount").innerHTML = formatter.format(round(time.universes * 1000000000, 15)) + " billionths of the age of the universe"
        }
}
function chooseClassDiscord() {
        if (time.weeks >= 2) {
                if (time.months >= 6) {
                        if (time.years >= 2) {
                                discordNumber = 12
                        } else if (time.years >= 1) {
                                discordNumber = 11
                        } else {
                                discordNumber = 10
                        }
                } else {
                        if (time.months >= 3) {
                                discordNumber = 9
                        } else if (time.months >= 1) {
                                discordNumber = 8
                        } else {
                                discordNumber = 7
                        }
                }
        } else {
                if (time.days >= 1) {
                        if (time.weeks >= 1) {
                                discordNumber = 6
                        } else if (time.days >= 3) {
                                discordNumber = 5
                        } else {
                                discordNumber = 4
                        }
                } else {
                        if (time.hours >= 12) {
                                discordNumber = 3
                        } else if (time.hours >= 4) {
                                discordNumber = 2
                        } else if (time.minutes >= 15) {
                                discordNumber = 1
                        } else {
                                discordNumber = 0
                        }
                }
        }
}
function showClassDiscord() {
        document.getElementById("class-dc").innerHTML = discordName[discordNumber]
}
function chooseClassExtended() {
        //0 5m 15m ! 30m 1h 2h !! 3h 4h 6h ! 8h 12h !!! 16h 1d 1.5d ! 2d 3d 4d !! 5d 7d 10d ! 2w 3w !!!! 1.5m 2m 3m ! 4m 6m 8m !! 10m 1y 1.25y ! 1.5y 1.75y !!! 2y 28m 32m ! 36m 3.5y 4y !! 5y 7y 10y ! 15y 25y
        console.log("i didn't code this yet so uuh idk. go yell at me on dc and maybe i'll work faster.");
        
}
function round(Number, Number2) {
        return Math.round(Number * Math.pow(10, Number2)) / Math.pow(10, Number2)
}
