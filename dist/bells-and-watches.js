import sun from "sunrise-sunset-js";
import { addHours, differenceInSeconds, addSeconds } from "date-fns";
export var getDayBW = function (date, lat, long) {
    var day;
    if (date) {
        day = new Date(Date.parse(date));
    }
    else {
        day = new Date();
    }
    if (lat && long) {
        return dayBW(day, Number(lat), Number(long));
    }
    navigator.geolocation.getCurrentPosition(function (_a) {
        var coords = _a.coords;
        return dayBW(day, coords.latitude, coords.longitude);
    }, function (err) {
        console.log("Couldn't get position automatically. Please supply longitude and latitude.");
        return dayBW(day, 0, 0);
    });
};
var dayBW = function (date, lat, long) {
    // get sunrise and sunset around date
    var rise = sun.getSunrise(lat, long, date);
    var set = sun.getSunset(lat, long, date);
    var end = sun.getSunrise(lat, long, addHours(date, 24));
    // get length of day and night *starting at sunrise* - not exactly 24h
    // ÷ 12 for length of bell and watch
    var bell = differenceInSeconds(rise, set) / 12;
    var watch = differenceInSeconds(set, end) / 12;
    var times = [];
    // Add bells
    for (var i = 0; i < 12; i++) {
        times.push(addSeconds(rise, i * bell));
    }
    // Add watches
    for (var i = 0; i < 12; i++) {
        times.push(addSeconds(set, i * watch));
    }
    return times;
};
//# sourceMappingURL=bells-and-watches.js.map