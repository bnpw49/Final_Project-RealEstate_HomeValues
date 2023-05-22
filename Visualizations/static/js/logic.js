// Read in the data
d3.csv("/templates/map_data.csv").then(function(data) {
    var mymap = L.map("map").setView([36.7783, -119.4179], 5);
    
    var streetMap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    });
    streetMap.addTo(mymap);

    // Create dropdown
    var dropdownContainer = d3.select("body")
        .append("div");

    dropdownContainer.append("span")
        .text("Select a Year: ");

    var dropdown = dropdownContainer.append("select")
        .attr("id", "dropdown-menu")
        .on("change", function() {
            var selectedColumn = d3.select(this).property("value");
            updateMarkers(selectedColumn);
    });

    // Get column names from data
    var columns = Object.keys(data[0]);
    columns = columns.filter(column => column.indexOf("sale")!=-1)
    var years = []
    columns.forEach(column => years.push(column.substring(0,4)))

    // Populate dropdown with columns
    dropdown.selectAll("option")
        .data(years)
        .enter()
        .append("option")
        .text(function(d) {
            return d;
        });

    // Initialize markers
    updateMarkers("2015"); 

    function updateMarkers(column) {
        // Clear existing markers
        var region = "RegionName"
        var data_column1 = column+"_avg_sale"
        var data_column2 = column+"_avg_rent"
        mymap.eachLayer(function(layer) {
            if (layer instanceof L.Marker) {
                mymap.removeLayer(layer);
            }
        });

        // Add markers based on selected column
        data.forEach(function(d) {
            var lat = parseFloat(d["Latitude"]); 
            var lng = parseFloat(d["Longitude"]);
            var value = parseFloat(d[column]);
            
            var markerColor = getMarkerColor(value);

            var marker = L.marker([lat, lng]).addTo(mymap);

            // Set marker color based on value
            //var markerColor = getMarkerColor(value);
            marker.getElement().classList.add('marker');
            marker.getElement().classList.add(markerColor);

            // Add hover effect to display column value
            marker.bindTooltip(`
                <h3>${d[region]}</h3>
                <hr>
                <p>Average Sale: $${parseFloat(d[data_column1]).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p>Average Rent: $${parseFloat(d[data_column2]).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            `, { permanent: false, direction: 'top' });

           
        });
    }

    function getMarkerColor(value) {
        if (value > 0) {
            return 'green'; // Positive value, green color
        } else if (value < 0) {
            return 'red'; // Negative value, red color
        } else {
            return 'orange'; // Zero value, orange color
        }
    }
});


