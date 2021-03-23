const fetch = require("node-fetch");
const fs = require("fs").promises;

function getData() {
  fetch(
    "https://data.cityofnewyork.us/api/views/25th-nujf/rows.json?accessType=DOWNLOAD"
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data[0]);
      const dataOut = [];
      for (let i = 0; i <= 10; i++) {
        dataOut.push(json.data[i]);
      }
      fs.writeFile("ten_data_points.json", JSON.stringify(dataOut));
    })
    .catch((err) => console.log(err));
}

getData();
