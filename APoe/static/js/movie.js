//Tabs//
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all other tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
 
  
  // Create table for Winners Tab// 
// from ap_oscar_movie.csv
const tableData = ap_oscar_data;

// get table references
var tbody = d3.select("tbody");

function buildTable(ap_oscar_data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  ap_oscar_data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
   let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
   let elementValue = changedElement.property("value");
   console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
   let filterId = changedElement.attr("id");
   console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
 filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);

  
// if (title) {
//   filteredData = filteredData.filter(row => row.Title === title);
// };

// if (name) {
//   filteredData = filteredData.filter(row => row.Name === name);
// };

// if (date) {
//   filteredData = filteredData.filter(row => row.Date === date);
// };

//if (Headline) {
 // filteredData = filteredData.filter(row => row.country === country);
//};

//if (shape) {
  //filteredData = filteredData.filter(row => row.shape === shape);
//};


// // Create table for Money Tab// 
// // from ap_oscar_movie.csv
// const tableData = ap_money_data;

// // get table references
// var tbody = d3.select("tbody");

// function buildTable(ap_money_data) {
//   // First, clear out any existing data
//   tbody.html("");

//   // Next, loop through each object in the data
//   // and append a row and cells for each value in the row
//   ap_money_data.forEach((dataRow) => {
//     // Append a row to the table body
//     let row = tbody.append("tr");

//     // Loop through each field in the dataRow and add
//     // each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       let cell = row.append("td");
//       cell.text(val);
//     });
//   });
// }

// // 1. Create a variable to keep track of all the filters as an object.
// var filters = {};

// // 3. Use this function to update the filters. 
// function updateFilters() {

//     // 4a. Save the element that was changed as a variable.
//    let changedElement = d3.select(this);

//     // 4b. Save the value that was changed as a variable.
//    let elementValue = changedElement.property("value");
//    console.log(elementValue);

//     // 4c. Save the id of the filter that was changed as a variable.
//    let filterId = changedElement.attr("id");
//    console.log(filterId);
  
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.
//     if (elementValue) {
//       filters[filterId] = elementValue;
//     }
//     else {
//       delete filters[filterId];
//     }
  
//     // 6. Call function to apply all filters and rebuild the table
//  filterTable();
  
//   }
  
//   // 7. Use this function to filter the table when data is entered.
//   function filterTable() {
  
//     // 8. Set the filtered data to the tableData.
//     let filteredData = tableData;
  
//     // 9. Loop through all of the filters and keep any data that
//     // matches the filter values
//     Object.entries(filters).forEach(([key, value]) => {
//       filteredData = filteredData.filter(row => row[key] === value);
//     });
  
//     // 10. Finally, rebuild the table using the filtered data
//     buildTable(filteredData);
//   }
  
//   // 2. Attach an event to listen for changes to each filter
//   d3.selectAll("input").on("change", updateFilters);
  
//   // Build the table when the page loads
//   buildTable(tableData);
