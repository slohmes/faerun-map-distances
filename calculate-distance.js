const fs = require('node:fs');

const distances_file_data = (distances_file_data === undefined) ? fs.readFile('./distances.csv', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    return data;
  }) : distances_file_data;

const cities = (cities === undefined) ? getCities : cities;

const getCities = () => {
      const rows = distances_file_data.split("\n").slice(1);
      
      const cities = rows.map(row => row.split(",").slice(0,2)) // get city names from first 2 columns
        .flat()
        .filter((value, index, array) => array.indexOf(value) === index); // remove dups
    
      console.log(cities);
};
