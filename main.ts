input.onButtonPressed(Button.A, function () {
    Player_Amounts += -1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(randint(1, Player_Amounts))
    OnOff = 1
})
input.onButtonPressed(Button.B, function () {
    Player_Amounts += 1
})
let OnOff = 0
let Player_Amounts = 0
radio.setGroup(173)
Player_Amounts = 0
OnOff = 0
if (OnOff == 1) {
    basic.showString("Game Started")
} else {
    basic.showNumber(Player_Amounts)
}
