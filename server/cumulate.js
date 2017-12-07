var fs = require('fs');
var total = {};
var obj;

fs.readFile('./mach1.json', 'utf8', function (err, data) {
  if (err) throw err;
  mobj = JSON.parse(data);
  console.log(mobj);

  fs.readFile('./total.json', 'utf8', function (err, tdata) {
    if (err) throw err;
    tobj = JSON.parse(tdata);
    console.log(tobj);

    Object.keys(mobj).forEach((key) => {
      if(tobj[key] == null){
        console.log('key ' + key + ' does not exist in tobj')
      } else {
        tobj[key] += mobj[key]
      }
    })

    writeOut(total, './total.json')

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
