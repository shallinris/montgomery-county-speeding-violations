var long = 0;
var lat = 39.02;
var mymap;
var heatmap;
var ll = [];

function initMap() {
    var uluru = {lat: 39.1609, lng: -77.2206};
    mymap = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: uluru
    });
    $.ajax({
        url: "https://data.montgomerycountymd.gov/resource/ms8i-8ux3.json?color=RED&$where=description like '%25EXCEED%25' AND latitude > 39.02 AND longitude < 0 AND date_of_stop between '2015-01-10T00:00:00' and '2016-01-10T00:00:00'",
        type: "GET",
        data: {
            "$limit" : 10000,
            "$$app_token" : "EomQIfjQBBVCOkhua3dU0818w"
        }
    }).done(function(data){
        $("#notification").text("Retrieved " + data.length + " Records From The Data Set!");
        for (i in data) {
            // console.log(data[i].description);
            // console.log(data[i].date_of_stop);
            // console.log(data[i].time_of_stop);
            //  	console.log(data[i].color + " " + data[i].race + " " + data[i].latitude + " " + data[i].longitude);
            var latLng = new google.maps.LatLng(data[i].latitude, data[i].longitude);
            ll.push(latLng);
        }
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: ll,
            map: mymap
        });
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
};


$("#submitForm").click(function() {
    var firstDate = ($("#firstDate").val());
    var secondDate = ($("#secondDate").val());
    var firstTime = ($("#firstTime").val());
    var secondTime= ($("#secondTime").val());
});