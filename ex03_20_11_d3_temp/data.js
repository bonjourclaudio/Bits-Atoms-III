class Temperature {
  constructor(time, temperature) {
    this.time = time;
    this.temperature = temperature;
  }
}

export let temperatureData = [];

export function LoadTemperatureData() {
  return fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((jsonData) => {
      temperatureData = jsonData.map((d) => {
        const [minuteStr, secondStr] = d.time.split(":");
        const minute = Number(minuteStr);
        const second = Number(secondStr);

        return new Temperature(minute, d.temperature);
      });

      return temperatureData;
    });
}
