let x = 0
let y = 0
let maxScale = 0
let knob2Value = 0
let knobValue = 0
function showDot (value: number, maxValue: number, leftSide: boolean) {
    if (leftSide) {
        x = 0
    } else {
        x = 4
    }
    y = value / 1023
    y = y * 4
    y = Math.round(y)
    led.plot(x, y)
}
basic.forever(function () {
    maxScale = 1023
    knob2Value = pins.analogReadPin(AnalogPin.P0)
    knobValue = pins.analogReadPin(AnalogPin.P2)
    basic.clearScreen()
    showDot(knobValue, maxScale, false)
    showDot(knob2Value, maxScale, true)
    basic.pause(100)
})
