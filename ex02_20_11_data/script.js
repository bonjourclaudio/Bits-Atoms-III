class Temperature {
  constructor(time, temperature) {
    this.time = time;
    this.temperature = temperature;
  }
}

// Fetch and process data from data.json
// Output in the div with id "data-output"
function fetchData() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let data = response.json();

      let outputDiv = document.getElementById("data-output");

      data.then((jsonData) => {
        let temperatureData = [];
        for (let i = 0; i < jsonData.length; i++) {
          let entry = jsonData[i];
          temperatureData.push(new Temperature(entry.time, entry.temperature));
        }

        let listHtml = "<ul>";
        temperatureData.forEach((temp) => {
          listHtml += `<li>Time: ${temp.time}, Temperature: ${temp.temperature}°C</li>`;
        });
        listHtml += "</ul>";

        outputDiv.innerHTML = listHtml;
      });
    })

    .catch((error) => {
      console.error("Error fetching the data:", error);
    });
}
