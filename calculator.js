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
        12: "Spinning Rat Immortal",
        13: "N/A"
}
const discordValue = {
        0: 0,
        1: 900,
        2: 14400,
        3: 43200,
        4: 86400,
        5: 259200,
        6: 604800,
        7: 1209600,
        8: 2629800,
        9: 7889400,
        10: 15778800,
        11: 31557600,
        12: 63115200,
        13: Infinity
}
const extendedName = {
        0: "Nothing",
        1: "Non-Spinning Rat",
        2: "Half Spinning Rat",
        3: "Almost a Spinning Rat",
        4: "Meaningless Spinning Rat",
        5: "Yocto Spinning Rat",
        6: "Spinning Rat Dust",
        7: "Spinning Rat Slave",
        8: "Spinning Rat Paria",
        9: "Spinning Rat Failure",
        10: "Lower Spinning Rat",
        11: "New Spinning Rat",
        12: "Spinning Rat Newbie",
        13: "Spinning Rat Beginner",
        14: "Spinning Rat Apprentice",
        15: "Spinning Rat Student",
        16: "Spinning Rat Simp",
        17: "Spinning Rat Devotee",
        18: "Spinning Rat Regular",
        19: "Spinning Rat Fan",
        20: "Spinning Rat Follower",
        21: "Spinning Rat Believer",
        22: "Spinning Rat Enthusiast",
        23: "Spinning Rat Grinder",
        24: "Spinning Rat Addict",
        25: "Spinning Rat Priest",
        26: "Spinning Rat Sentinel",
        27: "Spinning Rat Connoisseur",
        28: "Spinning Rat Elite",
        29: "Spinning Rat Pro",
        30: "Spinning Rat Veteran",
        31: "Spinning Rat Leader",
        32: "Spinning Rat Master",
        33: "Spinning Rat Director",
        34: "Spinning Rat Boss",
        35: "Spinning Rat Celebrity",
        36: "Spinning Rat Lord",
        37: "Spinning Rat Grandmaster",
        38: "Spinning Rat Champion",
        39: "Spinning Rat President",
        40: "Spinning Rat Dominator",
        41: "Spinning Rat Monarch",
        42: "Spinning Rat Emperor",
        43: "Spinning Rat Pope",
        44: "Spinning Rat Supreme",
        45: "Spinning Rat Legend",
        46: "Spinning Rat Avatar",
        47: "Spinning Rat Immortal",
        48: "Spinning Rat Timelord",
        49: "Spinning Rat Ascended",
        50: "Spinning Rat Hive Mind",
        51: "Spinning Rat God",
        52: "Spinning Rat Transcendent",
        53: "Spinning Rat Eldritch",
        54: "Spinning Rat Creator",
        55: "Spinning Rat Singularity",
        56: "Spinning Rat Oblivion",
        57: "Spinning Rat Dimensionwalker",
        58: "Spinnign Rat Omniverse",
        59: "Spinning Rat Omega",
        60: "True Spinning Rat",
        61: "Pure Spinning Rat",
        62: "Infinite Spinning Rat",
        63: "Spinning Rat Final Form",
        64: "N/A"
}
const extendedValue = {
        0: 0,
        1: 5,
        2: 10,
        3: 15,
        4: 30,
        5: 45,
        6: 60,
        7: 90,
        8: 120,
        9: 180,
        10: 300,
        11: 420,
        12: 600,
        13: 900,
        14: 1800,
        15: 2700,
        16: 3600,
        17: 5400,
        18: 7200,
        19: 10800,
        20: 14400,
        21: 21600,
        22: 28800,
        23: 43200,
        24: 57600,
        25: 86400,
        26: 129600,
        27: 172800,
        28: 259200,
        29: 345600,
        30: 432000,
        31: 604800,
        32: 864000,
        33: 1209600,
        34: 1814400,
        35: 2629800,
        36: 3944700,
        37: 5259600,
        38: 7889400,
        39: 10519200,
        40: 157778800,
        41: 21038400,
        42: 26298000,
        43: 31557600,
        44: 39447000,
        45: 47336400,
        46: 55225800,
        47: 63115200,
        48: 73634400,
        49: 84153600,
        50: 94672800,
        51: 110451600,
        52: 126230400,
        53: 157788000,
        54: 220903200,
        55: 315576000,
        56: 473364000,
        57: 631152000,
        58: 946729000,
        59: 1262304000,
        60: 1577880000,
        61: 1893456000,
        62: 2524608000,
        63: 3155760000,
}
var discordNumber
var extendedNumber
var progressDiscord
var progressExtended
var automaticIncrease = false

const formatter = new Intl.NumberFormat('en', {
    notation: "standard"
});
function toggleAutomaticIncrease() {
        automaticIncrease = !automaticIncrease
}
function update() {
        collectData()
        convert() 
        showUnits()
        chooseClassDiscord()
        chooseClassExtended()
        showClassDiscord()
        showClassExtended()
        calculateProgressDiscord()
        calculateProgressExtended()
        showProgressDiscord()
        showProgressExtended()
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
function chooseClassExtended() {
        if (time.days < 10) { //0-31
                if (time.hours < 1) { //0-15
                        if (time.minutes < 2) { //0-7
                                if (time.seconds < 30) { //0-3
                                        if (time.seconds < 10) { //0-1
                                                if (time.seconds < 5) {
                                                        extendedNumber = 0
                                                } else {
                                                        extendedNumber = 1
                                                }
                                        } else { //2-3
                                                if (time.seconds < 15) {
                                                        extendedNumber = 2
                                                } else {
                                                        extendedNumber = 3
                                                }
                                        }
                                } else { //4-7
                                        if (time.minutes < 1) { //4-5
                                                if (time.seconds < 45) {
                                                        extendedNumber = 4
                                                } else {
                                                        extendedNumber = 5
                                                }
                                        } else { //6-7
                                                if (time.minutes < 1.5) {
                                                        extendedNumber = 6
                                                } else {
                                                        extendedNumber = 7
                                                }
                                        }
                                }
                        } else { //8-15
                                if (time.minutes < 10) { //8-11
                                        if (time.minutes < 5) { //8-9
                                                if (time.minutes < 3) {
                                                        extendedNumber = 8
                                                } else {
                                                        extendedNumber = 9
                                                }
                                        } else { //10-11
                                                if (time.minutes < 7) {
                                                        extendedNumber = 10
                                                } else {
                                                        extendedNumber = 11
                                                }
                                        }
                                } else { //12-15
                                        if (time.minutes < 30) { //12-13
                                                if (time.minutes < 15) {
                                                        extendedNumber = 12
                                                } else {
                                                        extendedNumber = 13
                                                }
                                        } else { //14-15
                                                if (time.minutes < 45) {
                                                        extendedNumber = 14
                                                } else {
                                                        extendedNumber = 15
                                                }
                                        }
                                }
                        }
                } else { //16-31
                        if (time.hours < 16) { //16-23
                                if (time.hours < 4) { //16-19
                                        if (time.hours < 2) { //16-17
                                                if (time.hours < 1.5) {
                                                        extendedNumber = 16
                                                } else {
                                                        extendedNumber = 17
                                                }
                                        } else { //18-19
                                                if (time.hours < 3) {
                                                        extendedNumber = 18
                                                } else {
                                                        extendedNumber = 19
                                                }
                                        }
                                } else { //20-23
                                        if (time.hours < 8) { //20-21
                                                if (time.hours < 6) {
                                                        extendedNumber = 20
                                                } else {
                                                        extendedNumber = 21
                                                }
                                        } else { //22-23
                                                if (time.hours < 12) {
                                                        extendedNumber = 22
                                                } else {
                                                        extendedNumber = 23
                                                }
                                        }
                                }
                        } else { //24-31
                                if (time.days < 3) { //24-27
                                        if (time.days < 1.5) { //24-25
                                                if (time.days < 1) {
                                                        extendedNumber = 24
                                                } else {
                                                        extendedNumber = 25
                                                }
                                        } else { //26-27
                                                if (time.days < 2) { 
                                                        extendedNumber = 26
                                                } else {
                                                        extendedNumber = 27
                                                }
                                        }
                                } else { //28-31
                                        if (time.days < 5) { //28-29
                                                if (time.days < 4) {
                                                        extendedNumber = 28
                                                } else {
                                                        extendedNumber = 29
                                                }
                                        } else { //30-31
                                                if (time.weeks < 1) {
                                                        extendedNumber = 30
                                                } else {
                                                        extendedNumber = 31
                                                }
                                        }
                                }
                        }
                }
        } else { //32-63
                if (time.months < 28) { //32-47
                        if (time.months < 6) {//32-39
                                if (time.months < 1.5) { //32-35
                                        if (time.weeks < 3) { //32-33
                                                if (time.weeks < 2)  {
                                                        extendedNumber = 32
                                                } else {
                                                        extendedNumber = 33
                                                }
                                        } else { //34-35
                                                if (time.months < 1) {
                                                        extendedNumber = 34
                                                } else {
                                                        extendedNumber = 35
                                                }
                                        }
                                } else { //36-39
                                       if (time.months < 3) { //36-37
                                                if (time.months < 2)  {
                                                        extendedNumber = 36
                                                } else {
                                                        extendedNumber = 37
                                                }
                                        } else { //38-39
                                                if (time.months < 4) {
                                                        extendedNumber = 38
                                                } else {
                                                        extendedNumber = 39
                                                }
                                        }
                                }
                        } else { //40-47
                                if (time.months < 15) { //40-43
                                       if (time.months < 10) { //40-41
                                                if (time.months < 8)  {
                                                        extendedNumber = 40
                                                } else {
                                                        extendedNumber = 41
                                                }
                                        } else { //42-43
                                                if (time.years < 1) {
                                                        extendedNumber = 42
                                                } else {
                                                        extendedNumber = 43
                                                }
                                        }
                                } else { //44-47
                                       if (time.months < 21) { //44-45
                                                if (time.months < 18)  {
                                                        extendedNumber = 44
                                                } else {
                                                        extendedNumber = 45
                                                }
                                        } else { //46-47
                                                if (time.years < 2) {
                                                        extendedNumber = 46
                                                } else {
                                                        extendedNumber = 47
                                                }
                                        }
                                }
                        }
                } else { //48-63
                        if (time.years < 15) { //48-55
                                if (time.years < 4) { //48-51
                                       if (time.years < 3) { //48-49
                                                if (time.months < 32)  {
                                                        extendedNumber = 48
                                                } else {
                                                        extendedNumber = 49
                                                }
                                        } else { //50-51
                                                if (time.years < 3.5) {
                                                        extendedNumber = 50
                                                } else {
                                                        extendedNumber = 51
                                                }
                                        }
                                } else { //52-55
                                       if (time.years < 7) { //52-53
                                                if (time.years < 5)  {
                                                        extendedNumber = 52
                                                } else {
                                                        extendedNumber = 53
                                                }
                                        } else { //54-55
                                                if (time.years < 10) {
                                                        extendedNumber = 54
                                                } else {
                                                        extendedNumber = 55
                                                }
                                        }
                                }
                        } else { //56-63
                                if (time.years < 50) { //56-59
                                       if (time.years < 30) { //56-57
                                                if (time.years < 20)  {
                                                        extendedNumber = 56
                                                } else {
                                                        extendedNumber = 57
                                                }
                                        } else { //58-59
                                                if (time.years < 40) {
                                                        extendedNumber = 58
                                                } else {
                                                        extendedNumber = 59
                                                }
                                        }
                                } else { //60-63
                                       if (time.years < 80) { //60-61
                                                if (time.years < 60)  {
                                                        extendedNumber = 60
                                                } else {
                                                        extendedNumber = 61
                                                }
                                        } else { //62-63
                                                if (time.years < 100) {
                                                        extendedNumber = 62
                                                } else {
                                                        extendedNumber = 63
                                                }
                                        }
                                }
                        }
                        
                }
        }
        
}
function showClassDiscord() {
        document.getElementById("class-dc").innerHTML = discordName[discordNumber]
        document.getElementById("next-dc").innerHTML = discordName[discordNumber + 1]
}
function showClassExtended() {
        document.getElementById("class-ex").innerHTML = extendedName[extendedNumber]
}
function calculateProgressDiscord() {
        progressDiscord = (time.seconds - discordValue[discordNumber]) / (discordValue[discordNumber + 1] - discordValue[discordNumber])
}
function calculateProgressExtended() {
        progressExtended = (time.seconds - extendedValue[extendedNumber]) / (extendedValue[extendedNumber + 1] - extendedValue[extendedNumber])        
}
function showProgressDiscord() {
        document.getElementById("percent-dc").innerHTML = round(progressDiscord * 100, 3)
        document.getElementById("progress-dc").value = progressDiscord
        document.getElementById("current-dc").innerHTML = discordName[discordNumber]
        document.getElementById("next-dc").innerHTML = discordName[discordNumber + 1]
}
function showProgressExtended() {
        document.getElementById("percent-ex").innerHTML = round(progressExtended * 100, 3)
        document.getElementById("progress-ex").value = progressExtended
        document.getElementById("current-ex").innerHTML = extendedName[extendedNumber]
        document.getElementById("next-ex").innerHTML = extendedName[extendedNumber + 1]
}
function round(Number, Number2) {
        return Math.round(Number * Math.pow(10, Number2)) / Math.pow(10, Number2)
}
var doTick = window.setInterval(function() {
        if (automaticIncrease == true) {
                data.seconds += 1
                convert() 
                showUnits()
                chooseClassDiscord()
                chooseClassExtended()
                showClassDiscord()
                showClassExtended()
                calculateProgressDiscord()
                calculateProgressExtended()
                showProgressDiscord()
                showProgressExtended()
        }
}, 1000)
