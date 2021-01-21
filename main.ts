// Set up 2 variables: speed and distance
let distance = 0
let speed = 0
// stop the vehicle if obstacle is less than 4 cm and tune speed
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distance < 4) {
        speed = 0
    } else if (distance > 30) {
        speed = 255
    } else {
        speed = distance * 7
    }
})
// Tune motor speed based on line tracking
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
