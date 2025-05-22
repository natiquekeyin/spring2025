// Miltiline template literal to wrap the CSV data

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            4126347 ,        130 cm
0134140,       Doug         Thomas       , 532           4126347, 158cm`;

/*
Required output after cleaning:
 
0134138,Alan Smith,333-580-2254,70 inches
0134139,Christina Lee,123-412-6347,51 inches
0134140,Doug Thomas,532-412-6347,62 inches

*/

/* 
STEPS TO SOLVE IT:
1. Split the raw CSV string into an array of rows (one row per employee).
Hint: The data might include Unix (\n) or Windows (\r\n) line endings.

2. For each row, split it into individual fields (ID, Name, Phone Number, Height).
Note: You must handle cases where there is extra or missing whitespace around fields.


3.Remove any unnecessary spaces around the Name field to make it consistent.

4.Using a regular expression, extract the Area Code from the Phone Number field. The phone numbers are stored in two formats:
o	"555-555-5555"
o	"5555555555"

*/

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function rowToFields(row) {
  //split on with our without space on either side..

  let fields = row.split(/\s*,\s*/);

  //   Remove extra spaces from name field

  //   fields[0] ID, fields[1] Name, fields[2] phone , fields[3] height

  fields[1] = fields[1].replace(/\s+/, " ");

  //   Extract area code from phone number!
  let phoneNumber = fields[2];
  let matches = phoneNumber.match(/(\(?\d{3}\)?)?[\s\-]*\d{3}[\s\-]*\d{4}/);
  if (matches) {
    // fields[2] = matches[1] + "1234456";

    fields[2] = matches[1];

    fields[2] = fields[2].trim();
    fields[2] = `${fields[2]}- ${fields[2]} - ${fields[2]}`;
    // Now you need to make this phone consistant for all records??
  }
  return fields;
}

function processCSV(csv) {
  // do all the required steps

  //   Step1: break the CSV into rows

  let rows = splitIntoRows(csv);

  //   Step 2: split all rows into array of fields..

  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     console.log(fields);
  //     data.push(fields);
  //   }

  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  let data = rows.map((row) => rowToFields(row));

  console.log(data);
  //   console.log(rows);
  return csv;
}

//Log output of processing
var processed = processCSV(csvData);
// console.log(processed);
