const db = require('./db');
const config = require('../config');
const cartesian_2d = require('../models/cartesian_2d');
let theme;
async function viewGraphs(codeToFind){
    let graphInfo = await cartesian_2d.find({code : codeToFind}).limit(1);
    if (graphInfo.length != 1) {
        throw({message : "No graph found"});
    }
    graphInfo = graphInfo[0];
    refreshTheme();
  return {
    graphInfo,
    theme
  }
}

async function editGraphs(codeToFind){
    let graphInfo = await cartesian_2d.find({code : codeToFind}).limit(1);
    

    if (graphInfo.length != 1) {
        throw({message : "No graph found"});
    }
    graphInfo = graphInfo[0];
    refreshTheme();
    console.log(theme);
  return {
    graphInfo,
    theme,
  }
}

async function submitPoints(info){
    let returnVal;
    try{
        let parentGraph = await cartesian_2d.find({_id:info.graphID});
        if (parentGraph.length != 1) {
            throw({message : "No graph found"});
        }
        let submitter_valid = false;
        for (let x in parentGraph[0].tags) {
            console.log(parentGraph[0].tags[x].name, info.submitter);
            if (parentGraph[0].tags[x].name == info.submitter) {
                submitter_valid = true;
            }
        }
        if (submitter_valid == false) {

            console.log('submitter not valid');
            throw({message : "Invalid submitter"});
        }
        parentGraph = parentGraph[0];

        let pointsData = info.data;
        for (let x = 0; x < pointsData.length; x++) {
            if (!pointsData[x].hasOwnProperty('name')) {
                pointsData.splice(x, 1);
            } else {
                pointsData[x].x = pointsData[x].x.toFixed(3);
                pointsData[x].y = pointsData[x].y.toFixed(3);
                pointsData[x].submitter = info.submitter;
            }
        }

        parentGraph.points = parentGraph.points.concat(pointsData);
        await parentGraph.save();
        returnVal = "Points submitted";
    } catch (err) {
        console.error(err.message);
        returnVal = "Error creating graph";
    }

    return returnVal


}


function refreshTheme() {
    theme = require('../config').theme
}
module.exports = {
    viewGraphs,
    editGraphs,
    submitPoints,
}