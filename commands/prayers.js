module.exports = {
    name: 'prayers',
    description: 'tells us about its creator',
    execute(message, args) {
        const fetch = require("node-fetch");


        const base = "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypts&method=5";

        fetch(base)
            .then((res) => {
                return res.json();

            })
            .then((data) => {
                switch (args[0]) {
                    case "fajr":
                        message.reply(
                            "Fajr prayer is set at " +
                                data.data.timings.Fajr +
                                " in Cairo"
                        );
                        break;
                    case "sunrise":
                        message.reply(
                            "Sunrise prayer is set at " +
                                data.data.timings.Sunrise +
                                " in Cairo"
                        );
                        break;
                    case "asr":
                        message.reply(
                            "Asr prayer is set at " +
                                data.data.timings.Asr +
                                " in Cairo"
                        );
                        break;
                    case "maghrib":
                        message.reply(
                            "Sunset prayer is set at " +
                                data.data.timings.Sunset +
                                " in Cairo"
                        );
                        break;
                    case "isha":
                        message.reply(
                            "Isha prayer is set at " +
                                data.data.timings.Isha +
                                " in Cairo"
                        );
                        break;
                    case "imsak":
                        message.reply(
                            "Imsak prayer is set at " +
                                data.data.timings.Imsak +
                                " in Cairo"
                        );
                        break;
                    case "midnight":
                        message.reply(
                            "Midnight prayer is set at " +
                                data.data.timings.Midnight +
                                " in Cairo"
                        );
                        break;
                    default:
                        if(!args.length){
                            message.reply('Which prayer you idiot');
                        }
                        else {
                        message.reply(
                            "That ain\'t even a prayer lol"
                        );
                        }
                        break;
                }
            });
    }
}
