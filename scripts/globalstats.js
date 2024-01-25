// about.js
$(document).ready(function () {
    const apiKey = "CwcyKOR5lUGs6RTfUXNeHw==AfTraDK9OjymV4LP";
    var country = prompt("Enter country");

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/covid19?country=' + country,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);

            // Display the result in a table
            if (result && Array.isArray(result) && result.length > 0) {
                var data = result[0]; // Assuming the data is the first element of the array

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
                    
                    $('.result-container').html(tableHtml);
                } else {
                    // Display a message if there is no cases data
                    $('.result-container').html('<p>No cases data available</p>');
                }
            } else {
                // Display a message if there is no data
                $('.result-container').html('<p>No data available</p>');
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            // Display the error in the result-container div
            $('.result-container').html('<p>Error: ' + jqXHR.responseText + '</p>');
        }
    });
});
