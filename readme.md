# About this repo

This is a simple cli to consume weather in the terminal because... why not? Not big ambitions here, just a simple thing I did for fun.

The geo coding data as well as the weather data is obtained from [Open-Meteo](https://open-meteo.com/).

## Features

### Temperature

- Current temperature: It can show the current temperature, in celsius degrees for a given city name.

```
weather temperature --current "city name"
```

It will try to obtain the approximated coordinates by searching the name of the given city at the geo coding api of Open-Meteo, then it will use the latitude and longitude data to obtain the current temperature.