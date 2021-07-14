// alert('hello javascript alert!')
// creates an alert pop up on web

// console.log('hello console!')
// creates text in web developer tool section

// starter map code, setView([lat,long,zoom])
var map = L.map('map').setView([34.0697,-118.4432], 17);

// L stands for leaflet, above says to create a map in a specific area we specified on the web, and allows us to set the 'home' to something we want

// sets the base map to be the open source one
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// creates marker at a specific location and adds to the map also allows us to create a pop up with a text and tells it to automatically open the popup
var marker = L.marker([34.0697,-118.4432]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Where Yoh is sitting this very moment')
		.openPopup();	

// there are ways to populate popups and markers for data point in the csv
