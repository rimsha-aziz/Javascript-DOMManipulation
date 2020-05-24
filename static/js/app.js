// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//reference body of table 
var tbody = d3.select("tbody");

//Console.log the data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each sighting oject
data.forEach(function(alienSighting) {
    console.log(alienSighting);
    //Step 2:  Use d3 to append one table row `tr` for each sighting object
    // Don't worry about adding cells or text yet, just try appending the `tr` elements.
    var row = tbody.append("tr");
    // Step 3:  Use `Object.entries` to console.log each sighting value
    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);
         // Step 4: Use d3 to append 1 cell per sighting value 
         var cell = row.append("td");
         cell.text(value);
        });
    });

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click",function() {
     // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
    // Empty the table to append with the filtered data 
    tbody.text("")
    // loop filteredData
    filteredData.forEach((datetime) => {
        var row = tbody.append("tr");
        Object.entries(datetime).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});

