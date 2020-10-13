input.onButtonPressed(Button.A, function () {
    Peso += 1
    basic.showNumber(Peso)
})
input.onGesture(Gesture.Shake, function () {
    Peso = 74
    basic.showNumber(Peso)
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * (Peso / (Estatura * Estatura))
    basic.showNumber(Peso)
    while (IMC < 18.5) {
        basic.showString("IMC=")
        basic.showNumber(IMC)
        basic.showString("Delgada")
        break;
    }
    while (IMC >= 18.5 && IMC < 25) {
        basic.showString("IMC=")
        basic.showNumber(IMC)
        basic.showString("Saludable")
        break;
    }
    while (IMC >= 25 && IMC < 29.99) {
        basic.showString("IMC=")
        basic.showNumber(IMC)
        basic.showString("Sobrepeso")
        break;
    }
    while (IMC > 30) {
        basic.showString("IMC=")
        basic.showNumber(IMC)
        basic.showString("Obesidad")
        break;
    }
})
input.onButtonPressed(Button.B, function () {
    Peso += -1
    basic.showNumber(Peso)
})
let IMC = 0
let Peso = 0
let Estatura = 0
Estatura = 180
Peso = 74
