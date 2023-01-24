function ATInitEsp () {
    SendATCommand("abc", 10)
}
// thingspeak
input.onButtonPressed(Button.A, function () {
    if (esp8266_EJ.isWifiConnected()) {
        basic.showLeds(`
            # # . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        esp8266_EJ.uploadThingspeak(
        "ICPZTSAEIMBWJDTK",
        200
        )
        if (esp8266_EJ.isThingspeakUploaded()) {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # . . .
                . . . . .
                . . # . .
                `)
        }
    } else {
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . # . . .
            `)
    }
})
function ATEchoOnOff (TrueFalse: boolean) {
    if (TrueFalse) {
        SendATCommand("AT+ECXH0", 10)
    } else {
        SendATCommand("AT+ECXH1", 10)
    }
}
// thingspeak
input.onButtonPressed(Button.AB, function () {
    if (esp8266_EJ.isWifiConnected()) {
        basic.showLeds(`
            # # . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        if (true) {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # . . .
                . . . . .
                . . # . .
                `)
        }
    } else {
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . # . . .
            `)
    }
})
// thingspeak
input.onButtonPressed(Button.B, function () {
    if (esp8266_EJ.isWifiConnected()) {
        basic.showLeds(`
            # # . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        if (true) {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # . .
                . . . . .
                # # . . .
                . . . . .
                . . # . .
                `)
        }
    } else {
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . # . . .
            `)
    }
})
function SendATCommand (strCommand: string, nWaitAfterms: number) {
    serial.writeLine(strCommand)
    basic.pause(nWaitAfterms)
}
function RadiSendLongString (LongString: string, RadioGroup: number) {
    radio.setGroup(RadioGroup)
    LongStringLength = LongString.length
    LongStringDiv19 = LongStringLength / 18
    for (let index = 0; index <= LongStringDiv19 + 1; index++) {
        radio.sendString(LongString.substr(index * 18, 20))
        basic.pause(200)
        TempStr = LongString.substr(index * 18, 20)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RadiSendLongString("1.........2.........3.........4.........5.........6.........7.........8.........9.........10........11........12........13........", 1)
    RadiSendLongString("-", 1)
    RadiSendLongString("1.........2.........3.........4.........5.........6.........7.........8.........9.........10........11........12........13........", 1)
})
let TempStr = ""
let LongStringDiv19 = 0
let LongStringLength = 0
radio.setGroup(1)
led.setBrightness(10)
basic.pause(200)
RadiSendLongString("MBIT with ESP started", 1)
basic.pause(200)
// APEX_HTTP
// Grove ESP USB power EJ01 v1.01
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.pause(5000)
// Grove ESP USB power EJ01 v1.01
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
esp8266_EJ.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266_EJ.isESP8266Initialized()) {
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    esp8266_EJ.connectWiFi("ARRIS-02D9", "01C2BBC549B74403")
    basic.showLeds(`
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    if (esp8266_EJ.isWifiConnected()) {
        basic.showLeds(`
            # # . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        RadiSendLongString("MBIT with ESP WiFi connected", 1)
    } else {
        basic.showLeds(`
            # # . . .
            . . . . .
            # . . . .
            . . . . .
            . # . . .
            `)
        RadiSendLongString("MBIT with ESP WiFi connection error", 1)
    }
} else {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
}
basic.forever(function () {
	
})
