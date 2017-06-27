     
     
    function getLocationNameByLatLong(index, lat, lng) {
         //This function use GoogleMap API to get Location's Name
         //By passing latitude and longtitude
         var googleApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true';
         $http({
             method: 'GET',
             url: googleApiUrl
         }).then(function successCallback(response) {
         //retrive the location's name from response data
             locationName = response.data.results[2].formatted_address;
         });
     };
