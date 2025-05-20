radio.setGroup(45)
radio.setFrequencyBand(56)
let x: number
let y: number

basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)

    radio.sendString(`${x}, ${y}, ${control.deviceSerialNumber()}`)

    basic.pause(20)
})