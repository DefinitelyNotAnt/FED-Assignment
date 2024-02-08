$(document).ready(function () {
    const apiKey = "CwcyKOR5lUGs6RTfUXNeHw==AfTraDK9OjymV4LP";
    const countries = [
        "India",
        "China",
        "United States",
        "Indonesia",
        "Pakistan",
        "Nigeria",
        "Brazil",
        "Bangladesh",
        "Russia",
        "Mexico",
        "Ethiopia",
        "Japan",
        "Philippines",
        "Egypt",
        "DR Congo",
        "Vietnam",
        "Iran",
        "Turkey",
        "Germany",
        "Thailand",
        "United Kingdom",
        "Tanzania",
        "France",
        "South Africa",
        "Italy",
        "Kenya",
        "Myanmar",
        "Colombia",
        "South Korea",
        "Uganda",
        "Sudan",
        "Spain",
        "Argentina",
        "Algeria",
        "Iraq",
        "Afghanistan",
        "Poland",
        "Canada",
        "Morocco",
        "Saudi Arabia",
        "Ukraine",
        "Angola",
        "Uzbekistan",
        "Yemen",
        "Peru",
        "Malaysia",
        "Ghana",
        "Mozambique",
        "Nepal",
        "Madagascar",
        "Côte d'Ivoire",
        "Venezuela",
        "Cameroon",
        "Niger",
        "Australia",
        "North Korea",
        "Mali",
        "Burkina Faso",
        "Syria",
        "Sri Lanka",
        "Malawi",
        "Zambia",
        "Romania",
        "Chile",
        "Kazakhstan",
        "Chad",
        "Ecuador",
        "Somalia",
        "Guatemala",
        "Senegal",
        "Netherlands",
        "Cambodia",
        "Zimbabwe",
        "Guinea",
        "Rwanda",
        "Benin",
        "Burundi",
        "Tunisia",
        "Bolivia",
        "Haiti",
        "Belgium",
        "Jordan",
        "Dominican Republic",
        "Cuba",
        "South Sudan",
        "Sweden",
        "Honduras",
        "Czech Republic (Czechia)",
        "Azerbaijan",
        "Greece",
        "Papua New Guinea",
        "Portugal",
        "Hungary",
        "Tajikistan",
        "United Arab Emirates",
        "Belarus",
        "Israel",
        "Togo",
        "Austria",
        "Switzerland",
        "Sierra Leone",
        "Laos",
        "Serbia",
        "Nicaragua",
        "Libya",
        "Paraguay",
        "Kyrgyzstan",
        "Bulgaria",
        "Turkmenistan",
        "El Salvador",
        "Congo",
        "Singapore",
        "Denmark",
        "Slovakia",
        "Central African Republic",
        "Finland",
        "Norway",
        "Liberia",
        "State of Palestine",
        "Lebanon",
        "New Zealand",
        "Costa Rica",
        "Ireland",
        "Mauritania",
        "Oman",
        "Panama",
        "Kuwait",
        "Croatia",
        "Eritrea",
        "Georgia",
        "Mongolia",
        "Moldova",
        "Uruguay",
        "Bosnia and Herzegovina",
        "Albania",
        "Jamaica",
        "Armenia",
        "Gambia",
        "Lithuania",
        "Qatar",
        "Botswana",
        "Namibia",
        "Gabon",
        "Lesotho",
        "Guinea-Bissau",
        "Slovenia",
        "North Macedonia",
        "Latvia",
        "Equatorial Guinea",
        "Trinidad and Tobago",
        "Bahrain",
        "Timor-Leste",
        "Estonia",
        "Mauritius",
        "Cyprus",
        "Eswatini",
        "Djibouti",
        "Fiji",
        "Comoros",
        "Guyana",
        "Bhutan",
        "Solomon Islands",
        "Luxembourg",
        "Montenegro",
        "Suriname",
        "Cabo Verde",
        "Micronesia",
        "Malta",
        "Maldives",
        "Brunei",
        "Bahamas",
        "Belize",
        "Iceland",
        "Vanuatu",
        "Barbados",
        "Sao Tome & Principe",
        "Samoa",
        "Saint Lucia",
        "Kiribati",
        "Grenada",
        "Tonga",
        "Seychelles",
        "St. Vincent & Grenadines",
        "Antigua and Barbuda",
        "Andorra",
        "Dominica",
        "Saint Kitts & Nevis",
        "Marshall Islands",
        "Liechtenstein",
        "Monaco",
        "San Marino",
        "Palau",
        "Nauru",
        "Tuvalu",
        "Holy See"
    ];
    function fetchData(country) {
        return $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/covid19?country=${country}`,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json'
        });
    }

    function displayTable(country, data) {
        const resultContainer = $('.result-container');
    
        if (data && data.cases) {
            const yearlyData = {};
    
            // Loop through the dates and aggregate total cases for each year
            Object.entries(data.cases).forEach(([date, dailyCases]) => {
                const year = new Date(date).getFullYear();
                if (!yearlyData[year]) {
                    yearlyData[year] = 0;
                }
                yearlyData[year] += dailyCases.total;
            });
    
            // Sort the yearly data in descending order of the year
            const sortedYearlyData = Object.entries(yearlyData)
                .sort(([yearA], [yearB]) => yearB - yearA);
    
            const tableHtml = `
                <table class="table">
                    <thead>
                        <tr><th>Year</th><th>Total Cases</th></tr>
                    </thead>
                    <tbody>
                        ${sortedYearlyData.map(([year, totalCases]) =>
                            `<tr><td>${year}</td><td>${totalCases}</td></tr>`
                        ).join('')}
                    </tbody>
                </table>`;
    
            resultContainer.append(`<h2>${country} Yearly Cases</h2>`).append(tableHtml);
        }
    }
    

    countries.forEach(function (country) {
        fetchData(country)
            .done(function (result) {
                console.log(result);
                displayTable(country, result[0]);
            })
            .fail(function (jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $('.result-container').append(`<p>Error fetching data for ${country}: ${jqXHR.responseText}</p>`);
            });
    });
    
});
