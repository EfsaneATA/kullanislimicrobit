input.onButtonPressed(Button.A, function () {
    basic.showNumber(sicaklik)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(isik)
    basic.pause(1000)
    basic.clearScreen()
})
let derece = 0
let isik = 0
let sicaklik = 0
input.calibrateCompass()
basic.forever(function () {
    derece = input.compassHeading()
    if (derece < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (derece < 90) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (derece < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (derece < 180) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (derece < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (derece < 270) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (derece < 315) {
        basic.showArrow(ArrowNames.West)
    } else if (derece < 360) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    sicaklik = input.temperature()
    isik = input.lightLevel()
})
