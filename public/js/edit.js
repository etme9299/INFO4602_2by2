let myLineChart;

//let titles = ["Alex Fix","Andersen Dodge","Andrew Schwartz","Angela Peña de Niz","Ari Brecl","Benjamin Peterson","Brigid McNamara","Cassie Stearns","Cecily Coors","Dylan Gowins","Ethan Meyer","Hannah Pritchard","Holly McCollough","Jackie Martensen","Jackson Klein","Jacob Baca","Jasey Chanders","Jessica Emmons","Joe Moser","Joelle McDonald","John Douthit","Kate McCarthy","Keala Gapin","Natalia Storz","Ornella Musinguzi","Paige Burns","Pax Armon","Peyton Biggers","Riley Dudley","Ryan Slocum","Sara Oza","Shane Ball","Shreya Shresta","Simon Schroeder Bermudez","Taylor Alton","Zoe Drigot"];
//let colors = ["#010067","#95003A","#007DB5","#FF00F6","#FFEEE8","#774D00","#90FB92","#0076FF","#D5FF00","#FF937E","#6A826C","#FF029D","#FE8900","#7A4782","#7E2DD2","#85A900","#FF0056","#A42400","#00AE7E","#683D3B","#BDC6FF","#263400","#BDD393","#00B917","#9E008E","#001544","#C28C9F","#FF74A3","#01D0FF","#004754","#E56FFE","#788231","#0E4CA1","#91D0CB","#BE9970","#968AE8"];
const data = [{x:100,y:100}]; // List to keep track of data
let currentNameIdx = 1;
let submit_name;
let total_num_names = valid_names.length;


window.onresize = set_container_size;

$(document).ready(function() {
    show_modal(valid_names);
    set_container_size();
    create_graph();
    document.getElementById("result").style.display = "none";
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

function update_name(){
    // Function that updates name dispalayed in HTML

    
    const config = myLineChart.config;
    const current_name_element = document.getElementById("current_name");

    

    var name_idx = config.data.datasets[0].data.length; // determining current index

    if (name_idx > total_num_names){
        document.getElementById("bottom_bar").style.visibility = "hidden";
        return;
    }

    if (name_idx == total_num_names){
        current_name_element.innerHTML = "You"; // Changing HTML
    }
    else{
        current_name_element.innerHTML = titles[name_idx]; // Changing HTML
    }

    const hex_color = colors[name_idx];
    const hsl_color = hexToHSL(hex_color);
    const light_hex_bg = HSLToHex(hsl_color[0],hsl_color[1],90)
    //console.log(light_hex_bg);
    current_name_element.style.backgroundColor = light_hex_bg;
    current_name_element.style.borderColor = colors[name_idx]; // Change color

    

}

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
        container_size = "80vh";
    }
    else{
        container_size = "80vw";
    }

    var container = document.getElementById("chart-container");
    //min_dimension = Math.min(window.innerHeight, window.innerWidth);
    //console.log("current",container.style.width);

    container.style.width = container_size;
    container.style.height = container_size;

}

function create_graph(){
    // "Main" function that creates the graph

    var ctx = document.getElementById("myChart");

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

            //drawTextBG(ctx,graph.negx,font,left + horiz_padding , height/2 + vert_shift);
            //drawTextBG(ctx,graph.posx,font,right - horiz_padding , height/2 + vert_shift);
            //drawTextBG(ctx,graph.negy,font, (width/2) + horiz_shift , bottom - vert_padding);
            //drawTextBG(ctx,graph.posy,font,(width/2) + horiz_shift, top+vert_padding);

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
            
            onClick: function (event) {
                // Function that triggers when user clicks somewhere in graph
                // Adds a point to the dataset
                console.log("User has clicked on screen");

                if(currentNameIdx <= total_num_names){
                    const canvasPosition = Chart.helpers.getRelativePosition(event, myLineChart);

                    // Substitute the appropriate scale IDs
                    const valueX = myLineChart.scales.x.getValueForPixel(canvasPosition.x);
                    const valueY = myLineChart.scales.y.getValueForPixel(canvasPosition.y);

                    this.data.datasets.forEach((dataset) => {
                        dataset.data.push({
                            name: titles[currentNameIdx],
                            x: valueX,
                            y: valueY
                        });
                    });
                    


                    console.log("Datasets:",this.data.datasets[0].data)

                    update_name();

                    if (currentNameIdx == total_num_names){ // If data has been recorded for every person,
                        $("#submit_all").prop("disabled", false); // Enable the submit button
                        document.getElementById("bottom_bar").style.display = "none";
                        document.getElementById("skip_button").style.display = "none";
                        document.getElementById("result").style.display = "block";

                    }

            
                    currentNameIdx++;
                    this.update();

                }
                
                
                
            },
            onHover: function (event, chartElement){
                if (chartElement.length == 0){
                    event.native.target.style.cursor = 'crosshair';
                }
                else{
                    event.native.target.style.cursor = 'grab';
                }
                //console.log(chartElement);
                
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
                dragData: {
                    // Allow users to drag points around graph
                    dragX: true,
                    showTooltip: true,
                    onDragStart: function(e, datasetIndex, index, value) {},
                    onDrag: function(e, datasetIndex, index, value) {
                        e.target.style.cursor = 'grabbing'
                        //console.log("Drag Value: ", value.x)
                    },
                    onDragEnd: function(e, datasetIndex, index, value) {
                        e.target.style.cursor = 'grab'
                    },
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


    

    myLineChart = new Chart(ctx, config);
    update_name();

}



function show_modal(names){
    $("#exampleModal").modal('show'); // Showing modal on screen

    // Code to handle Auto-Typing
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
        source: substringMatcher(names)
    }).on("typeahead:selected typeahead:autocompleted", function(ev, my_Suggestion_class) {
        $("#modal_submit_button").prop("disabled", false); //Enabling modal_submit_button
    });

}

function submit_modal(){
    /* SECURE
    var input_name = $("#input_name").val();
    valid_names = titles;

    if (valid_names.includes(input_name)){
        //console.log("Valid");
        $('#exampleModal').modal('hide');
        window.input_name = input_name
    }
    else{
        alert("Go to hell Ben");
    }*/
    //INSECURE
    var input_name = $("#input_name").val(); // Get input value
    submit_name = input_name;
    window.input_name = input_name; // Make global

    $('#exampleModal').modal('hide'); // Close modal

    change_ordering() // Change order of names

    show_info();
     
}

function change_ordering(){
    input_name = window.input_name;
    
    input_name_idx = titles.indexOf(input_name);

    input_color = colors[input_name_idx];

    titles.splice(index=input_name_idx, deleteCount=1); // removing input name from titles 
    titles.push(input_name); // appending input_name to end to make last evaluation being self

    colors.splice(index=input_name_idx, deleteCount=1);
    colors.push(input_color);

    update_name();


    // console.log("Name ordering", titles);
}

function skip_name(){
    console.log("skipping");

    config = myLineChart.config;
    currentNameIdx++;
    config.data.datasets.forEach((dataset) => {
        dataset.data.push({
            x: null,
            y: null
        });
    });

    update_name();

}
function show_info(){
    $('#infoModal').modal('show');
}

function hide_info() {
    $('#infoModal').modal('hide');
}



