const db = require('./db');
const cartesian_2d = require('../models/cartesian_2d');
const config = require('../config');
const theme = require('../config').theme;

async function createNewGraph(info){
  let returnVal;
  try {

    //Generate a new unique code
    let codes = [];
    (await cartesian_2d.find({}, {code: 1, _id: 0})).forEach(obj => codes.push(obj.code));

    let flag = true;
    let newCode;
    while (flag == true) {
      flag = false;
      newCode = Math.random().toString(36).slice(7).toUpperCase();
      if (newCode.length != 6) {
        flag = true;
        continue;
      }
      for (let i = 0; i < codes.length; i++) {
        if (codes[i].code == newCode) {
          flag = true;
        }
      }
    }

    console.log(newCode);

    //Insert the new graph into the database
    let newGraph = new cartesian_2d({
      name: info.name,
      code: newCode,
      axis: [info.posX, info.posY, info.negX, info.negY],
      descriptions: [info.posX_des, info.posY_des, info.negX_des, info.negY_des],
      tags: info.tags,
      points: []
    });

    console.log(newGraph);
    await newGraph.save();

    returnVal = newCode;
    
  } catch (err) {
    console.error(err.message);
    returnVal = "Error creating graph";
  }
  
  return returnVal;
  }

module.exports = {
  createNewGraph,
}
