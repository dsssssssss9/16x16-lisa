function zeichne_kurve () {
    x = 0
    y = 0
    t = 0
    while (t < pi * 2) {
        x = Math.round(3 * Math.sin(a * t)) + 3
        y = 7 - (Math.round(3 * Math.sin(b * t - delta_fix - delta_var)) + 3)
        // callimatrix.SetMatrixColorbright(0x0000ff, x, y, cbrightness.hp1)
        matrix.setPixel(x, y, neopixel.colors(NeoPixelColors.Blue))
        t = t + schritt_kurve
    }
}
let t = 0
let y = 0
let x = 0
let matrix: SmartMatrix.Matrix = null
let schritt_kurve = 0
let delta_var = 0
let delta_fix = 0
let b = 0
let a = 0
let pi = 0
let einzelschritt = false
pi = 3.1415926
a = 1
b = 1
delta_fix = 0
delta_var = 0
let animation = true
let anzahl_punkte = 26
let anzahl_frames = 24
schritt_kurve = pi * 2 / anzahl_punkte
let schritt_animation = pi * 2 / Math.min(a, b) / anzahl_frames
let verzoegerung = 500 / anzahl_frames
matrix = SmartMatrix.create(
DigitalPin.P2,
16,
16,
NeoPixelMode.RGB
)
matrix.clear()
matrix.show()
basic.showIcon(IconNames.House)
basic.forever(function () {
    zeichne_kurve()
    // callimatrix.callimatrix_show()
    matrix.show()
    if (animation) {
        basic.pause(20)
        // callimatrix.callimatrix_del()
        matrix.clear()
        delta_var = delta_var + schritt_animation
    }
})
