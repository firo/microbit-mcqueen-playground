let distance = 0
let speed = 0
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 4) {
        speed = 0
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (distance > 30) {
        speed = 255
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
        speed = distance * 7
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
})
