import { getSunrise, getSunset } from "sunrise-sunset-js";
import { addHours, differenceInSeconds, addSeconds } from "date-fns";

export const getDayBW = (date?: string, lat?: string, long?: string) => {
  let day: Date;
  if (date) {
    day = new Date(Date.parse(date));
  } else {
    day = new Date();
  }

  if (lat && long) {
    return dayBW(day, Number(lat), Number(long));
  }

  navigator.geolocation.getCurrentPosition(
    function({ coords }) {
      return dayBW(day, coords.latitude, coords.longitude);
    },
    _ => {
      console.log(
        "Couldn't get position automatically. Please supply longitude and latitude."
      );
      return dayBW(day, 0, 0);
    }
  );
};

const dayBW = (date: Date, lat: number, long: number) => {
  // get sunrise and sunset around date
  const rise = getSunrise(lat, long, date);
  const set = getSunset(lat, long, date);
  const end = getSunrise(lat, long, addHours(date, 24));

  // get length of day and night *starting at sunrise* - not exactly 24h
  // ÷ 12 for length of bell and watch

  const bell = differenceInSeconds(rise, set) / 12;
  const watch = differenceInSeconds(set, end) / 12;
  const times = [] as Date[];

  // Add bells
  for (let i = 0; i < 12; i++) {
    times.push(addSeconds(rise, i * bell));
  }

  // Add watches
  for (let i = 0; i < 12; i++) {
    times.push(addSeconds(set, i * watch));
  }

  return times;
};
