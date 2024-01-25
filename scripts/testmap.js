var url = "https://covid19.who.int/WHO-COVID-19-global-data.csv";
fetch(url)
  .then(function(response) {
    if (response){
        return response.json();
    }
  })
  .then (function(data){
    console.log(data);
  })
  .catch(function(error) {
    // handle the error
  });