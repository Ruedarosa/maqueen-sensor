let item = false
let item2: neopixel.Strip = null
let red = 0
let green = 0
let BLUE = 0
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    if (maqueen.sensor(PingUnit.Centimeters) < 35 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.showNumber(maqueen.sensor(PingUnit.Centimeters))
            basic.pause(800)
        }
        if (item == false) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
        item2 = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        red = 0
        green = 0
        BLUE = 255
        for (let index = 0; index < 255; index++) {
            green += 1
            red += -1
            item2.showColor(neopixel.rgb(red, green, BLUE))
            basic.pause(1000)
        }
    }
})
