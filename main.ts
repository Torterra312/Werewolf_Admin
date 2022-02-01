radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == Player) {
        basic.showString("Werewolf")
        TownWerewolf = 2
    } else {
        basic.showString("Town")
        TownWerewolf = 1
    }
    Game_On = 1
    Night_Time = 1
    if (receivedNumber == Player * 100) {
        Dead = 1
    }
})
input.onButtonPressed(Button.A, function () {
    if (Game_On == 0) {
        Player_Amounts += -1
    } else if (Player_Option == 1) {
        Player_Option = Player_Amounts
    } else {
        Player_Option += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Game_On == 0) {
        Who_werewolf = randint(1, Player_Amounts)
        radio.sendNumber(Who_werewolf)
        Game_On = 1
        radio.sendValue("Player Amount", Player_Amounts)
    } else if (Who_werewolf == 1) {
        TownWerewolf = 1
    } else if (Night_Time == 1) {
        Player_Choice = Player_Option
        radio.sendNumber(Player_Option * 100)
        Player_Choice = 0
        Night_Time = 0
    } else {
        Player_Choice = Player_Option
        radio.sendNumber(Player_Option * 10000)
        Player_Choice = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Game_On == 0) {
        Player_Amounts += 1
    } else if (Player_Option == Player_Amounts) {
        Player_Option = 1
    } else {
        Player_Option += 1
    }
})
radio.onReceivedValue(function (name, value) {
    Player_Amounts = value
})
let Who_werewolf = 0
let Player_Option = 0
let Game_On = 0
let Player_Choice = 0
let Player = 0
let Dead = 0
let Night_Time = 0
let TownWerewolf = 0
let Player_Amounts = 0
radio.setGroup(173)
Player_Amounts = 0
TownWerewolf = 1
Night_Time = 0
Dead = 0
Player = 1
Player_Choice = 0
Game_On = 0
Player_Option = Player
basic.forever(function () {
    if (Game_On == 0) {
        basic.showNumber(Player_Amounts)
    } else if (Dead == 1) {
        basic.showString("You Died")
    } else if (Night_Time == 1) {
        if (Player_Choice != 0) {
            basic.showString("ZZZ")
        } else if (TownWerewolf == 2) {
            basic.showNumber(Player_Option)
        } else {
            basic.showString("ZZZ")
        }
    } else {
        basic.showNumber(Player_Option)
    }
})
