# Bells and Watches

> artsyhonker@artsyhonker@sunbeam.city

> Idea: A clock that takes the time of daylight and divides it up into twelve sections, let's call them "bells", and they are shorter in winter and longer in summer. In the night, same idea, let's call them "watches" and they are longer in winter, shorter in summer.

> Trains and timed meds and stuff would still need to run on UTC, but imagine being able to organise your day to the length of daylight/darkness. 

> Most people would still need different routines in winter and summer but this is a feature, not a bug. 

> If you think of better names for the bells and watches then let me know, I'm borrowing from nautical terminology here. 

> Also does anyone want to program this? Even as a website where I could input my location by city, it would be super useful. Even going strictly by sunrise/sunset and ignoring concepts like dusk, it would be helpful.

## Design

- Get location and time. Allow user to input both.
- Get sunrise and sunset based on location and selected day.
- Divide the day between sunrise and sunset into 12 equal "bells", and the night into 12 equal "watches".
- Convert between this timescale and Unix, UTC and local times
- Display the current time in b/w 
- Display a timeline or circle of the current day with local and b/w time