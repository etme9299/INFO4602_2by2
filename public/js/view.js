let avgGraph;
let personalGraph;

let data = [{x:100,y:100}]; // List to keep track of data
let personal_data = [{x:100,y:100}];
let personal_titles = ["Dummy"];
let personal_colors = ['#000000'];


function update_average_graph() {
    let mode = document.getElementById('avg_type_dropdown').value;
    data = [{x:100,y:100}]; // List to keep track of data
    if (mode == 'avg') {
        //Code to find averages for the data
        for (let x = 0; x < tags.length; x++) {
            let x_sum = 0;
            let y_sum = 0;
            let count = 0;
            
            for (let y = 0; y < points.length; y++) {
            console.log(points[y].name + ' ' +  tags[x].name);
            if (points[y].name == tags[x].name) {
                x_sum += points[y].xVal;
                y_sum += points[y].yVal;
                count++;
            }
            }

            if (count > 0) {
                data.push({x:x_sum/count, y:y_sum/count})
            }
        }
    } else if (mode == 'med') {
        for (let x = 0; x < tags.length; x++) {
            let x_vals = [];
            let y_vals = [];
            let count = 0;
            
            for (let y = 0; y < points.length; y++) {
            console.log(points[y].name + ' ' +  tags[x].name);
            if (points[y].name == tags[x].name) {
                x_vals.push(points[y].xVal);
                y_vals.push(points[y].yVal);
                count++;
            }
            }

            if (count > 0) {
                data.push({x:x_vals[Math.round(count/2)], y:y_vals[Math.round(count/2)]})
            }
        }
    } else if (mode == 'ext') {
        for (let x = 0; x < tags.length; x++) {
            let x_ext = 0;
            let y_ext = 0;
            let count = 0;
            
            for (let y = 0; y < points.length; y++) {
                console.log(points[y].name + ' ' +  tags[x].name);
                if (points[y].name == tags[x].name) {
                    if (Math.abs(x_ext) < Math.abs(points[y].xVal)) {
                        x_ext = points[y].xVal;
                    }
                    if (Math.abs(y_ext) < Math.abs(points[y].yVal)) {
                        y_ext = points[y].yVal;
                    }
                    count++;
                }
            }

            if (count > 0) {
                data.push({x:x_ext, y:y_ext})
            }
        }
    } else {
        return;
    }

    try {
        avgGraph.destroy();
    } catch {

    } finally {
        create_average_graph();
    }
}




window.onresize = set_container_size;

$(document).ready(function() {
    set_container_size();
    update_average_graph();
    create_personal_graph();
    update_personal();

    // Enable tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            matches = matches.slice(0, 3)

            cb(matches);
        };
    };


    $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'states',
        source: substringMatcher(valid_names)
    }).on("typeahead:selected typeahead:autocompleted", function(ev, my_Suggestion_class) {
        document.getElementById("input_name").blur();
        update_personal();
    });
});




function get_quadrant(pt){
    // Function that returns the label for the quadrant to the tooltip to display during hover

    x_val = pt['x'];
    y_val = pt['y'];


    let quadrant;

    if (x_val >= 0){ // Right Half
        if (y_val >= 0){ // Upper-Right Q
            quadrant = `${graph.posx} & ${graph.posy}`; //Insert correct labels based on graph info
        }
        else{ // Bottom-Right Q
            quadrant = `${graph.posx} & ${graph.negy}`;
        }
    }
    else{ // Left Half
        if (y_val >= 0){ // Upper-Left Q
            quadrant = `${graph.negx} & ${graph.posy}`;
        }
        else{
            quadrant = `${graph.negx} & ${graph.negy}`;
        }
    }
    return quadrant;
}

function drawTextBG(ctx, txt, font, x, y) {

    /// lets save current state as we make a lot of changes        
    ctx.save();

    /// set font
    ctx.font = font;


    /// draw text from top - makes life easier at the moment
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";

    /// color for background
    ctx.fillStyle = "rgba(255, 255, 255, 0)";

    /// get width of text
    var width = ctx.measureText(txt).width;
    var height = parseInt(font, 14);

    /// draw background rect assuming height of font
    ctx.fillRect(x - (width/2), y-(height/2), width, height);

    /// text color
    ctx.fillStyle = '#000000';

    /// draw text on top
    ctx.fillText(txt, x, y);

    /// restore original state
    ctx.restore();
}

function set_container_size(){
    let container_size;

    if (window.innerHeight < window.innerWidth){ // Horizontal orientation
        container_size = "60vh";
    }
    else{
        container_size = "60vw";
    }

    var container1 = document.getElementById("chart-container1");
    var container2 = document.getElementById("chart-container2");
    //min_dimension = Math.min(window.innerHeight, window.innerWidth);
    //console.log("current",container.style.width);

    container1.style.width = container_size;
    container1.style.height = container_size;
    container2.style.width = container_size;
    container2.style.height = container_size;

}

function create_average_graph(){
    // "Main" function that creates the graph

    var ctx = document.getElementById("avgGraph");

    const quadrant_labeler = {
        id: "quadrant labeler",
        
        beforeDraw: function(chart, args, options){
            // Function to add labels to chart
            const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
            
            const font = "bold 14px Helvetica";

            const vert_padding = 0.04 * height;
            const horiz_padding = 0.045 * width;
            const horiz_shift = 0.016 * width;
            const vert_shift = 0.015 * height;

            // drawTextBG(ctx,graph.negx,font,left + horiz_padding , height/2 + vert_shift);
            // drawTextBG(ctx,graph.posx,font,right - horiz_padding , height/2 + vert_shift);
            // drawTextBG(ctx,graph.negy,font, (width/2) + horiz_shift , bottom - vert_padding);
            // drawTextBG(ctx,graph.posy,font,(width/2) + horiz_shift, top+vert_padding);

            //console.log("Height", height);
        }
    }


    const config = {
        type: 'scatter',
        data: {
            datasets: [{
                data: data,
                pointBackgroundColor:colors,
                pointBorderColor:colors
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false //This will do the task
            },
            onClick: function (event, chartElement) {
                if (chartElement.length != 0){
                    var clicked_point_index = chartElement[0].index
                    var clicked_point_name = titles[clicked_point_index]
                    document.getElementById("input_name").value = clicked_point_name;
                    update_personal();
                }
            },
            onHover: function (event, chartElement){
                if (chartElement.length != 0){ // If hovering over point
                    event.native.target.style.cursor = 'pointer'; // Set cursor to pointer to prompt click
                }
                else{
                    event.native.target.style.cursor = 'default';
                }   
            },

            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            // Title of point = Name
                            data_idx = context[0].dataIndex;
                            return titles[data_idx];
                        },
                        label: function(context){
                            // Label of point = quadrant label
                            data_idx = context.dataIndex;
                            data_vals = context.dataset.data
                            
                            return get_quadrant(data_vals[data_idx]);
                        }
                    }
                },
                legend:{
                    display: false
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    display: true,
                    min: -1.0,
                    max: 1.0,
                    ticks:{
                        stepSize: 0.5,
                        display: false,
                    },
                    grid:{
                        drawOnChartArea: true,
                        drawTicks: false,
                        drawBorder: false,
                        lineWidth: function(ctx){
                            if (ctx.tick.value == 0){
                                return 3;
                            }
                            else if (ctx.tick.value == -1 || ctx.tick.value == 1){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        },
                    }
                },
                y: {
                    display: true,
                    min: -1.0,
                    max: 1.0,
                    ticks:{
                        stepSize: 0.5,
                        display: false
                    },
                    grid:{
                        drawOnChartArea: true,
                        drawTicks: false,
                        drawBorder: false,
                        lineWidth: function(ctx){
                            if (ctx.tick.value == 0){
                                return 3;
                            }
                            else if (ctx.tick.value == -1 || ctx.tick.value == 1){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        }
                    }
                },
            }
        },
        plugins: [quadrant_labeler]
    };
    
    config.data.datasets.forEach(function (dataset) {
        dataset.pointRadius = 7;
        dataset.pointBorderWidth = 1;
        dataset.pointHoverRadius = 8;
    });

    avgGraph = new Chart(ctx, config);

}


function create_personal_graph(){
    // Function that creates personal graph

    var ctx = document.getElementById("personalGraph");

    const quadrant_labeler = {
        id: "quadrant labeler",
        
        beforeDraw: function(chart, args, options){
            // Function to add labels to chart
            const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
            
            const font = "bold 14px Helvetica";

            const vert_padding = 0.04 * height;
            const horiz_padding = 0.045 * width;
            const horiz_shift = 0.016 * width;
            const vert_shift = 0.015 * height;

            // drawTextBG(ctx,graph.negx,font,left + horiz_padding , height/2 + vert_shift);
            // drawTextBG(ctx,graph.posx,font,right - horiz_padding , height/2 + vert_shift);
            // drawTextBG(ctx,graph.negy,font, (width/2) + horiz_shift , bottom - vert_padding);
            // drawTextBG(ctx,graph.posy,font,(width/2) + horiz_shift, top+vert_padding);

            //console.log("Height", height);
        }
    }


    const config = {
        type: 'scatter',
        data: {
            datasets: [{
                data: personal_data,
                pointBackgroundColor: personal_colors,
                pointBorderColor: personal_colors
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false //This will do the task
            },

            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            // Title of point = Name
                            data_idx = context[0].dataIndex;
                            return personal_titles[data_idx];
                        },
                        label: function(context){
                            // Label of point = quadrant label
                            data_idx = context.dataIndex;
                            data_vals = context.dataset.data
                            
                            return get_quadrant(data_vals[data_idx]);
                        }
                    }
                },
                legend:{
                    display: false
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    display: true,
                    min: -1.0,
                    max: 1.0,
                    ticks:{
                        stepSize: 0.5,
                        display: false,
                    },
                    grid:{
                        drawOnChartArea: true,
                        drawTicks: false,
                        drawBorder: false,
                        lineWidth: function(ctx){
                            if (ctx.tick.value == 0){
                                return 3;
                            }
                            else if (ctx.tick.value == -1 || ctx.tick.value == 1){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        },
                    }
                },
                y: {
                    display: true,
                    min: -1.0,
                    max: 1.0,
                    ticks:{
                        stepSize: 0.5,
                        display: false
                    },
                    grid:{
                        drawOnChartArea: true,
                        drawTicks: false,
                        drawBorder: false,
                        lineWidth: function(ctx){
                            if (ctx.tick.value == 0){
                                return 3;
                            }
                            else if (ctx.tick.value == -1 || ctx.tick.value == 1){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        }
                    }
                },
            }
        },
        plugins: [quadrant_labeler]
    };
    
    config.data.datasets.forEach(function (dataset) {
        dataset.pointRadius = 7;
        dataset.pointBorderWidth = 1;
        dataset.pointHoverRadius = 8;
    });

    personalGraph = new Chart(ctx, config);

}

function show_group_info(){
    $('#summary-infoModal').modal('show');
}

function show_ind_info(){
    $('#individual-infoModal').modal('show');
}

function hide_info() {
    $('#infoModal').modal('hide');
}

function update_personal() {
    let selected_tag_name = document.getElementById("input_name").value;
    let selected_tag_color;
    tags.forEach (x => {
        if (x.name == selected_tag_name){
            selected_tag_color = x.color;
        }
    });
    console.log("Selected tag name: " + selected_tag_name);
    personal_colors = ['#000000'];
    personal_data = [{x:100,y:100}];
    personal_titles = ["Dummy"];
    points.forEach (x => {
        if (x.name == selected_tag_name){
            personal_data.push({
                x: x.xVal,
                y: x.yVal
            });
            personal_titles.push(x.submittedBy);
            personal_colors.push(selected_tag_color);
        }
    });

    personalGraph.destroy();
    create_personal_graph();
}