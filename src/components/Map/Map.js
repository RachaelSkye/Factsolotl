import React from "react";
import * as classes from "./Map.module.css";
import { Chart } from "react-google-charts";

class Map extends React.Component {
  render() {


      var data = [
        ["County", "Exceedances"],
        ["Alameda County", 63],
        ["Alpine County", 1],
        ["Amador County", 2],
        ["Butte County", 2],
        ["Calaveras County", 3],
        ["Colusa County	", 0],
        ["Contra Costa County", 11],
        ["Del Norte County", 0],
        ["El Dorado County", 5],
        ["Fresno County", 17],
        ["Glenn County", 1],
        ["Humboldt County", 4],
        ["Imperial County", 7],
        ["Inyo County", 1],
        ["Kern County	", 12],
        ["Kings County", 21],
        ["Lake County", 8],
        ["Lassen County", 0],
        ["Los Angeles County", 45],
        ["Madera County", 4],
        ["Marin County", 2],
        ["Mariposa County", 0],
        ["Mendocino County", 2],
        ["Merced County", 1],
        ["Modoc County", 0],
        ["Mono County	", 0],
        ["Monterey County", 1],
        ["Napa County", 3],
        ["Nevada County", 7],
        ["Orange County", 17],
        ["Placer County", 13],
        ["Plumas County", 1],
        ["Riverside County", 17],
        ["Sacramento County", 15],
        ["San Benito County", 1],
        ["San Bernardino County", 27],
        ["San Diego County", 17],
        ["San Francisco", 18],
        ["San Joaquin County", 12],
        ["San Luis Obispo County	", 6],
        ["San Mateo County", 11],
        ["Santa Barbara County", 3],
        ["Santa Clara County	", 29],
        ["Santa Cruz County", 2],
        ["Shasta County", 5],
        ["Sierra County", 13],
        ["Siskiyou County", 7],
        ["Solano County", 7],
        ["Sonoma County", 0],
        ["Stanislaus County", 8],
        ["Sutter County", 1],
        ["Tehama County", 0],
        ["Trinity County", 2],
        ["Tulare County", 7],
        ["Tuolumne County", 1],
        ["Ventura County", 6],
        ["Yolo County", 4],
        ["Yuba County", 0]
      ];

      var options = {
        region: "US-CA",
        displayMode: "markers",
        resolution: "provinces",
        markerOpacity: 0.7,
        colorAxis: { colors: ["green", "yellow", "orange", "red"] },
        datalessRegionColor: "white",
        backgroundColor: {
          fill: "transparent"
        },
        legend: "none"
      };
    

    return (
      <div>
        <div id="chart_div" className={classes.map}>
          <Chart
            chartType="GeoChart"
            data={data}
            options={options}
            mapsApiKey="AIzaSyDL0sPhoIQ-w6JtRXkZiIwc2izy2m26cPE"
          />
        </div>
      </div>
    );
  }
}

export default Map;
