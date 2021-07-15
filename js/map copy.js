// manually add data points

// alert('hello javascript alert!')
// creates an alert pop up on web

// console.log('hello console!')
// creates text in web developer tool section

// add data array to this file
// globals
let data = [
	{
		'title':'Osaka',
		'lat': 34.6937,
		'lon': 135.5023
	},
	{
		'title':'Cali',
		'lat': 3.4516,
		'lon': -76.5320
	},
	{
		'title':'Bangkok',
		'lat': 13.7563,
		'lon': 100.5018
	},
	{
		'title':'Tokyo',
		'lat': 35.6762,
		'lon': 139.6503
	},
	{
		'title':'LA',
		'lat': 34.0522,
		'lon': -118.2437
	}
]

let myMarkers = L.featureGroup();



// starter map code, setView([lat,long,zoom])
var map = L.map('map').setView([34.0697,-118.4432], 17);

// L stands for leaflet, above says to create a map in a specific area we specified on the web, and allows us to set the 'home' to something we want

// sets the base map to be the open source one
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 
// loop through data
data.forEach(function(item){

	// add marker to map
    var marker = L.marker([item.lat,item.lon])
        .bindPopup(item.title)
        // currently we're mapping markers one at a time

    myMarkers.addLayer(marker);
        // creates a marker for each element and adds it to the feature group

    // access side bar and add stuff to it 
    $('.sidebar').append('<div class="sidebar-item">'+item.title+'</div>')
})

// now we add markers to the map
myMarkers.addTo(map)

// creates marker at a specific location and adds to the map also allows us to create a pop up with a text and tells it to automatically open the popup
/*var marker = L.marker([34.0697,-118.4432]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Where Yoh is sitting this very moment')
		.openPopup();	
*/
// there are ways to populate popups and markers for data point in the csv

// zoom to the extent of all markers
map.fitBounds(myMarkers.getBounds())

/* why work in console?
    lets us test things out first until we get it right and
    put it in our actual code, lets us manipulate and preview our work 
*/




