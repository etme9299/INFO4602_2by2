document.getElementById('tags').addEventListener('keydown',(e)=>{
    if(e.key == "Enter") add_tag();
  }) 
let tags = [];

function customize_plot(type){
    if (type == "2by2"){
        $("#2by2_modal").modal('show');

    }
    let left_label = document.getElementById("negx");
    // left_label.addEventListener('change', write_labels)
    
    //draw_graph();
}

function add_tag() {
    let newTag = document.getElementById('tags').value.trim().replace(/[^0-9A-Z ]+/gi,"");
    document.getElementById('tags').value = "";
    if (newTag == "" || tags.includes(newTag)) return;
    tags = [...tags, newTag];
    document.getElementById('tags_area').innerHTML += `<span class='tag_item' id='tag_${newTag}'>${newTag} <a class='tag_item_delete' onclick="delete_tag('${newTag}')"><i class="fas fa-times"></i></a></span>`;
}

function delete_tag(tag) {
    const index = tags.indexOf(tag);
    if (index > -1) {
        tags.splice(index, 1); // 2nd parameter means remove one item only
    }
    document.getElementById('tag_' + tag).remove();
    console.log(tags);
}

function set_container_size(){
    let container_size;

    if (window.innerHeight < window.innerWidth){ // Horizontal orientation
        container_size = "40vh";
    }
    else{
        container_size = "40vw";
    }

    var container = document.getElementById("chart-container");

    container.style.width = container_size;
    container.style.height = container_size;

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
    ctx.fillStyle = '#ffffff';

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

function write_labels(){
    alert("These nuts");
}

function draw_graph(){
    set_container_size();

    var ctx = document.getElementById("simpleChart");

    const quadrant_labeler = {
        id: "quadrant labeler",
        
        beforeDraw: function(chart, args, options){
            // Function to add labels to chart
            // const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
            
            // const font = "bold 10px Helvetica";

            // const vert_padding = 0.04 * height;
            // const horiz_padding = 0.12 * width;


            // drawTextBG(ctx,negx,font,left + horiz_padding , height/2);
            // drawTextBG(ctx,posx,font,right - horiz_padding , height/2);
            // drawTextBG(ctx,negy,font, (width/2)  , bottom - vert_padding);
            // drawTextBG(ctx,posy,font,(width/2), top+vert_padding);

            document.getElementById("posx-label").innerHTML = posx;
            document.getElementById("negx-label").innerHTML = negx;
            document.getElementById("posy-label").innerHTML = posy;
            document.getElementById("negy-label").innerHTML = negy;

        }
    }

    const config = {
        type: 'scatter',
        data: {
            datasets: [{
                data: []
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false //This will do the task
            },
            plugins: {
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

    chart = new Chart(ctx, config);

}

function submit_modal(type){
    if (type == "2by2"){
        // Validation
        let valid = true

        // Recording appropriate variables
        graphName = document.getElementById("GraphName").value;
        posx = document.getElementById("posx").value;
        negx = document.getElementById("negx").value;
        posy = document.getElementById("posy").value;
        negy = document.getElementById("negy").value;
        posxDes = document.getElementById("posx-des").value;
        negxDes = document.getElementById("negx-des").value;
        posyDes = document.getElementById("posy-des").value;
        negyDes = document.getElementById("negy-des").value;

        if (graphName == ""){
            document.getElementById("GraphName").className = "form-control is-invalid";
            valid = false
        }
        else{
            document.getElementById("GraphName").className = "form-control is-valid";
        }

        if (posx == ""){
            document.getElementById("posx").className= "form-control is-invalid";
            valid = false
        }
        else{
            document.getElementById("posx").className= "form-control is-valid";
        }

        if (negx == ""){
            document.getElementById("negx").className= "form-control is-invalid";
            valid = false
        }
        else{
            document.getElementById("negx").className= "form-control is-valid";
        }

        if (posy == ""){
            document.getElementById("posy").className= "form-control is-invalid";
            valid = false
        }
        else{
            document.getElementById("posy").className= "form-control is-valid";
        }

        if (negy == ""){
            document.getElementById("negy").className= "form-control is-invalid";
            valid = false
        }
        else{
            document.getElementById("negy").className= "form-control is-valid";
        }

        document.getElementById("posx-des").className= "form-control is-valid";
        document.getElementById("negx-des").className= "form-control is-valid";
        document.getElementById("posy-des").className= "form-control is-valid";
        document.getElementById("negy-des").className= "form-control is-valid";

        // Showing second modal
        if (valid == true){
            $("#2by2_modal").modal('hide')
            $("#name_modal").modal('show')
            draw_graph()
        }
        ;
    }
}

function submit_name_modal(){
    let valid = true

    tags
    if (tags.length == 0){
        valid = false;

    }

    if (valid == true){
        //Parse textbox input into values
        console.log(tags);
        //Create random colors
        let finalTags = [];
        for(let i = 0; i < tags.length; i++){
            let color = '#' + Math.floor(Math.random()*16777215).toString(16)
            finalTags.push({
                "name": tags[i],
                "color": color
            });
            //console.log("%c " + colors[i], 'background: #ffffff; color: ' + colors[i]);
        }

        //Send to server
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:8080/create";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                // Print received data from server
                server_response = this.responseText;

                if (server_response == "Error creating graph"){
                    alert("Something went wrong");
                }
                else{
                    $("#name_modal").modal('hide');
                    code = server_response.replace(/[^0-9A-Z]+/gi,"")
                    document.getElementById('link_text').innerHTML = '2by2.us/' + code;
                    document.getElementById('link_text').href = '../' + code;
                    $("#link_modal").modal('show');

                }

            }
        };


        let data = JSON.stringify({
            "name": graphName,
            "posX": posx,
            "negX": negx,
            "posY": posy,
            "negY": negy,
            "posX_des": posxDes,
            "negX_des": negxDes,
            "posY_des": posyDes,
            "negY_des": negyDes,
            "tags": finalTags,
        });
        console.log(data);
        xhr.send(data);

    }
    

}

function copy_link(){
    var copyText = document.getElementById("link_text").innerText;
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    document.getElementById("copy-button").innerHTML = "<i class='fas fa-copy'></i>"

}