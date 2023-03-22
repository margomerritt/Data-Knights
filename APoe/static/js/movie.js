// Create Tabs//
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
//var tbody = d3.select("tbody");
var tbody = d3.select("#winner_table");

function buildTable(ap_oscar_data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  ap_oscar_data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    //let row = winner_table.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


//Create Search function on "Winners" table
// TA Angle helped here. Thank you Angel for your help here and the entire program!
function handleClick() {

  // Grab the value from the filter
  let title = d3.select("#title").property("value");
  let name = d3.select("#name").property("value");
  let year = d3.select("#date").property("value");
  let filteredData = tableData;
  
  // Check to see if title, name or year are in the filteredData
  if (title) {
    // Apply `filter` to the table data to only keep the
    // rows where the `original_title` value matches the filter value
    filteredData = filteredData.filter(row => row.original_title === title);
  }
  if (name) {
    // Apply `filter` to the table data to only keep the
    // rows where the `name` value matches the filter value
    filteredData = filteredData.filter(row => row.name === name);
  }
  if (year) {
    // Apply `filter` to the table data to only keep the
    // rows where the `year` value matches the filter value
    filteredData = filteredData.filter(row => row.release_year === year);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);




// // Create table for Money Tab// 
// // from ap_oscar_movie.csv
const tableData2 = ap_money_data;

// get table references
var tbody2 = d3.select("#money_table");

// make sortable
//sorttable.makeSortable(tableData2)

function buildTable2(ap_money_data) {
  // First, clear out any existing data
  tbody2.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  ap_money_data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody2.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
  
  // Build the table when the page loads
  buildTable2(tableData2);

















