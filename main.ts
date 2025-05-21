radio.setGroup(45)
radio.setFrequencyBand(56)
let x: number
let y: number
radio.setTransmitSerialNumber(true)

basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)

    radio.sendString(`${x}, ${y}`)

    basic.pause(20)
})
