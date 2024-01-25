// about.js
$(document).ready(function () {
    const apiKey = "CwcyKOR5lUGs6RTfUXNeHw==AfTraDK9OjymV4LP";

    // List of known countries
    const countries = ["Afghanistan", "Albania", "Algeria", "Malaysia","Singapore"/* ... add more countries ... */];

    // Function to fetch COVID-19 data for a given country
    function fetchData(country) {
        return $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/covid19?country=' + country,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json'
        });
    }

    // Function to display the result in a table
    function displayTable(country, data) {
        if (data && data.cases) {
            var tableHtml = '<table class="table">';
            tableHtml += '<thead><tr><th>Date</th><th>Total Cases</th><th>New Cases</th></tr></thead>';
            tableHtml += '<tbody>';

            // Loop through the dates and add rows to the table
            for (var date in data.cases) {
                if (data.cases.hasOwnProperty(date)) {
                    var dailyCases = data.cases[date];
                    tableHtml += '<tr><td>' + date + '</td><td>' + dailyCases.total + '</td><td>' + dailyCases.new + '</td></tr>';
                }
            }

            tableHtml += '</tbody></table>';

            // Append the table to the result-container div
            $('.result-container').append('<h2>' + country + ' Cases</h2>').append(tableHtml);
        } else {
            // Display a message if there is no cases data
            $('.result-container').append('<p>No cases data available for ' + country + '</p>');
        }
    }

    // Loop through each country and fetch data
    countries.forEach(function (country) {
        fetchData(country)
            .done(function (result) {
                console.log(result);
                displayTable(country, result[0]); // Assuming the data is the first element of the array
            })
            .fail(function (jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                // Display the error in the result-container div
                $('.result-container').append('<p>Error fetching data for ' + country + ': ' + jqXHR.responseText + '</p>');
            });
    });
});
