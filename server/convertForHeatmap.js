var fs = require('fs');
var machine0 = {};
var machine1 = {};
var machine2 = {};
var machine = {};
var obj;
fs.readFile('./valuesDecember.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj);
  obj.results.forEach((result, index) => {
    // console.log(result.statement_id);
    // console.log(result.series[0].name);
    // console.log(result.series[0].columns);
    // console.log(result.series[0].values);

    var statementId = result.statement_id;

    if(statementId == 0) {
      mObject = machine0
    } else if (statementId == 1) {
      mObject = machine1
    } else if (statementId == 2) {
      mObject = machine2
    } else {
      console.log('unknown statementId ' + statementId);
    }

    result.series[0].values.forEach((value, index) => {
      //console.log('creating machineJson ' + statementId + " " + value[0] + " " + value[1]);
      mObject[value[0]/1000] = value[1];
    })

    console.log();
    console.log('Machine0 values');
    console.log(machine0);
    writeOut(machine0, './newMach0.json')

    console.log();
    console.log('Machine1 values');
    console.log(machine1);
    writeOut(machine1, './newMach1.json')

    console.log();
    console.log('Machine2 values');
    console.log(machine2);
    writeOut(machine2, './newMach2.json')


  })
});

function writeOut(output, filename) {
  const content = JSON.stringify(output);
  fs.writeFile(filename, content, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }

      console.log("The file was saved as " + filename);
  });
}



// machine0.forEach((value, index) => {
//   console.log('Machine0 values');
//   console.log(value);
// })
//
// machine1.forEach((value, index) => {
//   console.log('Machine0 values');
//   console.log(value);
// })
//
// machine2.forEach((value, index) => {
//   console.log('Machine0 values');
//   console.log(value);
// })
