import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

import * as data from "./data.js";

data.LoadTemperatureData().then(() => {
  visualizeTemperatureData(data.temperatureData);
});

function visualizeTemperatureData(temperatureData) {
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // Range for x axis (time)
  const x = d3
    .scaleLinear()
    .domain(d3.extent(temperatureData, (d) => d.time))
    .range([marginLeft, width - marginRight]);

  // Range for y axis (temperature)
  const y = d3
    .scaleLinear()
    .domain(d3.extent(temperatureData, (d) => d.temperature))
    .nice()
    .range([height - marginBottom, marginTop]);

  const svg = d3.create("svg").attr("width", width).attr("height", height);

  /**
   * ###### X Axis ######
   * */
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  /**
   * ###### Y Axis ######
   * */
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  /**
   * ###### Line Chart ######
   * */
  const line = d3
    .line()
    .x((d) => x(d.time))
    .y((d) => y(d.temperature));

  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 1.5)
    .attr("d", line(temperatureData));

  container.append(svg.node());
}
